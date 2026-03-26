import express, { Response, Request } from 'express';
import mongoose from 'mongoose';
import {randomBytes} from 'crypto';
import jwt from 'jsonwebtoken';
import {User, Content, Tag, Link} from './db';
import bcrypt from 'bcrypt';
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import authMiddleware from './middleware';



const app = express();
app.use(express.json());
app.use(cors());


const PORT = 3000;

app.get('/', (req,res)=> {
    res.send('Server is running');
})

app.post("/api/v1/signup", async (req, res) => {
    try{
        const {name, email, password} = req.body;

        if(!name || !email || !password) return res.status(401).json({msg:"Fields required"});

        const userExist = await User.findOne({email});

        if(userExist) {
            return res.status(401).json({msg:"email is already exist"})
        }
        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new User({
            name,
            email,
            password:hashedPassword
        });

        await user.save();

        return res.status(201).json({success: true, userId:user._id});

    }catch(error){
        res.status(500).json({msg:"Server error"});
    }   
})


app.post("/api/v1/signin", async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ msg: "Fields are required" });
        }

        const userExist = await User.findOne({ email });
        if (!userExist) {
            return res.status(400).json({ msg: "Invalid email or password" });
        }

        const isMatched = await bcrypt.compare(password, userExist.password);
        if (!isMatched) {
            return res.status(400).json({ msg: "Password is incorrect" });
        }

        if (!process.env.SECRET_KEY) {
            throw new Error("SECRET_KEY not defined");
        }

        const token = jwt.sign(
            { userId: userExist._id, email: userExist.email },
            process.env.SECRET_KEY as string,
            { expiresIn: "1h" }
        );

        return res.status(200).json({
            msg: "Login successful",
            token
        });

    } catch (error) {
        console.error("Signin error:", error);
        return res.status(500).json({ msg: "Server error" });
    }
});

app.post("/api/v1/content", authMiddleware, async (req, res) => {
  try {
    //@ts-ignore
    const userId = req.userId
    const { type, link, title, tags } = req.body;

    if (!type || !link || !title) {
      return res.status(400).json({ msg: "All fields are required" });
    }

    // if (!tags || !Array.isArray(tags) || tags.length === 0) {
    //   return res.status(400).json({ msg: "At least one tag is required" });
    // }

    const linkExist = await Content.findOne({ link });

    if (linkExist) {
      return res.status(409).json({ msg: "This link already exists" });
    }

    console.log("USER ID:", userId);
    const content = new Content({
      type,
      link,
      title,
      userId:userId
    });

    await content.save();

    res.status(201).json({ msg: "Content created successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Server error" });
  }
});


app.get("/api/v1/content", authMiddleware, async (req, res)=> {
    try{
        let contents;
        //@ts-ignore
        contents = await Content.find({userId:req.userId}).populate('userId', 'name')

        res.status(200).json({contents});
    }catch(error){
        res.status(500).json({msg:"Server error"});
    }
})


app.delete("/api/v1/content", authMiddleware, async (req, res) => {
    try{
        const { contentId } = req.body;

        const deleted = await Content.findByIdAndDelete({
            _id: contentId,
            //@ts-ignore
            userId: req.userId
        });

        if(!deleted) return res.status(404).json({msg:"Content doesn't found"});


        res.status(200).json({msg:"Succesfully deleted"});
    }catch(error){
        res.status(500).json({msg:"Server error"})
    }
})



app.post("/api/v1/brain/share", authMiddleware,  async (req, res) => {
    try{
        const { share } = req.body;

        //@ts-ignore
        const userId = req.userId;

        if(share){
            const existingLink = await Link.findOne({userId});

            if(existingLink){
                return res.json({
                    hash:existingLink.hash
                });
            }

            
            const hash = randomBytes(8).toString('hex');

        
            await Link.create({
                userId,
                hash
            });

            return res.status(200).json({
                msg:'Share link created',
                hash
            });
        }else{
            await Link.deleteOne({userId});
            return res.json({
                msg:"share link removed"
            });
        }
    }catch(error){
        res.status(500).json({msg:"Server error"})
    }
})


app.get("/api/v1/brain/:shareLink", async (req, res) => {
    try{
        const { shareLink } = req.params;
        const link = await Link.findOne({hash:shareLink});

        if(!link) return res.status(404).json({msg:"No link found"});

        const content = await Content.find({
            userId:link.userId
        }).populate("userId", "name");

        res.status(200).json({
            content
        })
    }catch(error){
        res.status(500).json({msg:"server error"});
    }
})



app.listen(PORT,  () => {
    console.log(`server is running on ${PORT}`)
})