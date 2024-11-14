import mongoose, { Schema } from "mongoose";
import { ComicDetailsType } from "./comic_details_type";

const comicDetailSChema = new Schema<ComicDetailsType>({
  comicId: {
    type: String,
    required: true,
  },
  chapter: {
    type: Number,
    required: true,
  },
  chapterImage: {
    type: [String],
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  likes: {
    type: Number,
    default: 0,
  },
  view: {
    type: Number,
    default: 0,
  },
});

export const comicDetails = mongoose.model("comicdetails", comicDetailSChema);
