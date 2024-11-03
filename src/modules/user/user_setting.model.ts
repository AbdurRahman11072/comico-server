import mongoose, { Schema } from "mongoose";
import { bookedmark, devices, transation, user_setting } from "./user.type";

// Define the schema for Bookmarked
const bookmarkedSchema = new Schema<bookedmark>({
  user_email: {
    type: String,
    required: true,
  },
  comic_id: {
    type: String,
    required: true,
  },
});

// Define the schema for Transaction
const transactionSchema = new Schema<transation>({
  user_email: {
    type: String,
    required: true,
  },
  withdraw_date: {
    type: Date,
    default: Date.now,
  },
  amount: {
    type: Number,
    required: true,
  },
});

// Define the schema for Devices
const devicesSchema = new Schema<devices>({
  user_email: {
    type: String,
    required: true,
  },
  user_device: {
    type: String,
    required: true,
  },
  user_ipaddress: {
    type: String,
    required: true,
  },
  user_login_date: {
    type: Date,
    default: Date.now,
  },
});

// Define the schema for User Settings
const userSettingSchema = new Schema<user_setting>({
  bookedmark: {
    type: [bookmarkedSchema],
    default: [],
  },
  points: {
    type: Number,
    default: 0,
  },
  transaction: {
    type: [transactionSchema],
    default: [],
  },
  refareid: {
    type: String,
    required: true,
  },
  points_count: {
    type: Number,
    default: 0,
  },
  ads_click: {
    type: Number,
    default: 0,
  },
  devices: {
    type: [devicesSchema],
    default: [],
  },
});

module.exports = mongoose.model("UserSetting", userSettingSchema);
