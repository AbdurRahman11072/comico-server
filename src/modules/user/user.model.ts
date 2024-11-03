import mongoose, { Schema } from "mongoose";
import { user } from "./user.type";

const userSchema = new Schema<user>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    unique: true,
  },
  photourl: {
    type: String,
    required: true,
  },
  phonenum: {
    type: Number,
    required: true,
  },
  date_of_birth: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  isadmin: {
    type: String,
    enum: ["user", "modarator", "admin"],
    default: "user",
  },
});

export const createuser = mongoose.model("User", userSchema);
