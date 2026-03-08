import mongoose, { Types, Schema, Document, model } from "mongoose";

mongoose.connect("mongodb://localhost:27017/brainly")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("MongoDB connection error:", err));



export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
}

const userSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

export const User = model<IUser>("User", userSchema);


const tagSchema = new Schema({
  title: { type: String, required: true, unique: true },
});

export const Tag = model("Tag", tagSchema);


const contentTypes = ["image", "article", "video", "audio"] as const;

const contentSchema = new Schema({
  link: { type: String, required: true },
  type: { type: String, enum: contentTypes},
  title: { type: String, required: true },
  tags: [{ type: Types.ObjectId, ref: "Tag" }],
  userId: { type:Types.ObjectId, ref: "User", required:true},
});

export const Content = model("Content", contentSchema);



const linkSchema = new Schema({
  hash: { type: String, required: true },
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
});

export const Link = model("Link", linkSchema);