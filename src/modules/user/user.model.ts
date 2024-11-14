import mongoose, { Schema } from "mongoose";
import { usertype } from "./user.type";

const userSchema = new Schema<usertype>({
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
  refareid: {
    type: String,
    default: "No Refare ID",
  },
  isadmin: {
    type: String,
    enum: ["user", "modarator", "admin"],
    default: "user",
  },
});

export const user = mongoose.model("User", userSchema);
