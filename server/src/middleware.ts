import jwt from 'jsonwebtoken';
import dotenv from "dotenv";
dotenv.config();




const authMiddleware = async (req:any, res:any, next:any) => {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.spilt('')[1];

    if(!token) return res.status(400).json({msg:"There is no token"});

    try{
        const decoded = jwt.verify(token, process.env.SECRET_KEY as string);
        req.user = decoded;
        next();
    }catch(error){
        return res.status(500).json({msg:"Server error"});
    }
}


export default authMiddleware;