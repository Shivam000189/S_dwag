"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const crypto_1 = require("crypto");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const db_1 = require("./db");
const bcrypt_1 = __importDefault(require("bcrypt"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const cors_1 = __importDefault(require("cors"));
const middleware_1 = __importDefault(require("./middleware"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
const PORT = 3000;
app.get('/', (req, res) => {
    res.send('Server is running');
});
app.post("/api/v1/signup", async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password)
            return res.status(401).json({ msg: "Fields required" });
        const userExist = await db_1.User.findOne({ email });
        if (userExist) {
            return res.status(401).json({ msg: "email is already exist" });
        }
        const hashedPassword = await bcrypt_1.default.hash(password, 10);
        const user = new db_1.User({
            name,
            email,
            password: hashedPassword
        });
        await user.save();
        return res.status(201).json({ success: true, userId: user._id });
    }
    catch (error) {
        res.status(500).json({ msg: "Server error" });
    }
});
app.post("/api/v1/signin", async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ msg: "Fields are required" });
        }
        const userExist = await db_1.User.findOne({ email });
        if (!userExist) {
            return res.status(400).json({ msg: "Invalid email or password" });
        }
        const isMatched = await bcrypt_1.default.compare(password, userExist.password);
        if (!isMatched) {
            return res.status(400).json({ msg: "Password is incorrect" });
        }
        if (!process.env.SECRET_KEY) {
            throw new Error("SECRET_KEY not defined");
        }
        const token = jsonwebtoken_1.default.sign({ userId: userExist._id, email: userExist.email }, process.env.SECRET_KEY, { expiresIn: "1h" });
        return res.status(200).json({
            msg: "Login successful",
            token
        });
    }
    catch (error) {
        console.error("Signin error:", error);
        return res.status(500).json({ msg: "Server error" });
    }
});
app.post("/api/v1/content", middleware_1.default, async (req, res) => {
    try {
        //@ts-ignore
        const userId = req.userId;
        const { type, link, title, tags } = req.body;
        if (!type || !link || !title) {
            return res.status(400).json({ msg: "All fields are required" });
        }
        // if (!tags || !Array.isArray(tags) || tags.length === 0) {
        //   return res.status(400).json({ msg: "At least one tag is required" });
        // }
        const linkExist = await db_1.Content.findOne({ link });
        if (linkExist) {
            return res.status(409).json({ msg: "This link already exists" });
        }
        console.log("USER ID:", userId);
        const content = new db_1.Content({
            type,
            link,
            title,
            userId: userId
        });
        await content.save();
        res.status(201).json({ msg: "Content created successfully" });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Server error" });
    }
});
app.get("/api/v1/content", middleware_1.default, async (req, res) => {
    try {
        let contents;
        //@ts-ignore
        contents = await db_1.Content.find({ userId: req.userId }).populate('userId', 'name');
        res.status(200).json({ contents });
    }
    catch (error) {
        res.status(500).json({ msg: "Server error" });
    }
});
app.delete("/api/v1/content", middleware_1.default, async (req, res) => {
    try {
        const { contentId } = req.body;
        const deleted = await db_1.Content.findByIdAndDelete({
            _id: contentId,
            //@ts-ignore
            userId: req.userId
        });
        if (!deleted)
            return res.status(404).json({ msg: "Content doesn't found" });
        res.status(200).json({ msg: "Succesfully deleted" });
    }
    catch (error) {
        res.status(500).json({ msg: "Server error" });
    }
});
app.post("/api/v1/brain/share", middleware_1.default, async (req, res) => {
    try {
        const { share } = req.body;
        //@ts-ignore
        const userId = req.userId;
        if (share) {
            const existingLink = await db_1.Link.findOne({ userId });
            if (existingLink) {
                return res.json({
                    hash: existingLink.hash
                });
            }
            const hash = (0, crypto_1.randomBytes)(8).toString('hex');
            await db_1.Link.create({
                userId,
                hash
            });
            return res.status(200).json({
                msg: 'Share link created',
                hash
            });
        }
        else {
            await db_1.Link.deleteOne({ userId });
            return res.json({
                msg: "share link removed"
            });
        }
    }
    catch (error) {
        res.status(500).json({ msg: "Server error" });
    }
});
app.get("/api/v1/brain/:shareLink", async (req, res) => {
    try {
        const { shareLink } = req.params;
        const link = await db_1.Link.findOne({ hash: shareLink });
        if (!link)
            return res.status(404).json({ msg: "No link found" });
        const content = await db_1.Content.find({
            userId: link.userId
        }).populate("userId", "name");
        res.status(200).json({
            content
        });
    }
    catch (error) {
        res.status(500).json({ msg: "server error" });
    }
});
app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`);
});
//# sourceMappingURL=index.js.map