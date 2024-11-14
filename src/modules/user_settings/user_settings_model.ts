import mongoose from "mongoose";
import { userSettingType } from "./user_settings_type";

const userSettingSchema = new mongoose.Schema<userSettingType>({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  points: {
    type: Number,
    default: 0,
  },
  purchased_point: {
    type: Number,
    default: 0,
  },
  ads_click: {
    type: Number,
    default: 0,
  },
});

// Export the model
export const userSetting = mongoose.model("user settings", userSettingSchema);
