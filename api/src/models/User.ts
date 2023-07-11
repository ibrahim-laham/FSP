import mongoose, { Document } from "mongoose";

export type UserDocument = Document & {
  nickName: string;
  email: string;
  password: string;
};

const userSchema = new mongoose.Schema({
  nickName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

export default mongoose.model<UserDocument>("User", userSchema);
