import mongoose from "mongoose";
import { Schema, Document, model } from 'mongoose';

mongoose.connect("mongodb://localhost:27017/brainly");

interface IUser extends Document{
    name:string;
    email:string;
    password : string;
}

const userSchema = new Schema<IUser> ({
    name:{type:String , required:true},
    email:{type:String, required:true , unique:true},
    password:{type:String, required:true},
});

const userModel = model<IUser>('User', userSchema);
export default userModel;