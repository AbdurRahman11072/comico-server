import mongoose, { Schema } from "mongoose";
import { comicType } from "./comic_type";

const comicSChema = new Schema<comicType>({
  comicTitle: {
    type: String,
    required: true,
  },
  comicDiscription: {
    type: String,
    required: true,
  },
  comicCoverPhoto: {
    type: String,
    required: true,
  },
  comicCoverPhoto2: {
    type: String,
    required: true,
  },
  comicUrl: {
    type: String,
    required: true,
  },
  comicStatus: {
    type: String,
    enum: ["Ongoing", "Completed", "Stopped"],
    required: true,
  },
  comicTags: {
    type: [String],
    required: true,
  },
  comicChapters: {
    type: [String],
    required: true,
  },
  comicReleaseDate: {
    type: String,
    required: true,
  },
  comicRating: {
    type: [String],
    required: true,
  },
  like: {
    type: Number,
    default: 0,
  },
  views: {
    type: Number,
    default: 0,
  },
});

export const comic = mongoose.model("comic", comicSChema);
