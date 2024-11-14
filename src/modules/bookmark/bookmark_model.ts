import mongoose, { Schema } from "mongoose";
import { bookmarkType } from "./bookmark_type";

const bookmarkSchema = new Schema<bookmarkType>({
  email: {
    type: String,
    required: true,
  },
  comicId: {
    type: String,
    required: true,
    unique: true,
  },
});

export const bookmark = mongoose.model("bookmark", bookmarkSchema);
