import express from 'express';
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import userModel from './db';
import bcrypt from 'bcrypt';
import dotenv from "dotenv";
dotenv.config();
import authMiddleware from './middleware';


const app = express();
app.use(express.json())

const PORT = 3000;

app.get('/', (req,res)=> {
    res.send('Server is running');
})

app.post("/api/v1/signup", async (req, res) => {
    try{
        const {name, email, password} = req.body;

        if(!name || !email || !password) return res.status(401).json({msg:"Fields required"});

        const userExist = await userModel.findOne({email});

        if(userExist) {
            return res.status(401).json({msg:"email is already exist"})
        }
        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new userModel({
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

        const userExist = await userModel.findOne({ email });
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

app.post("api/v1/content", authMiddleware, (req, res)=> {
    
})


app.get("api/v1/content", (req, res)=> {

})


app.delete("/api/v1/content", (req, res) => {

})



app.post("api/v1/brain/share", (req, res) => {

})


app.get("api/v1/brain/:shareLink", (req, res) => {

})



app.listen(PORT,  () => {
    console.log(`server is running on ${PORT}`)
})