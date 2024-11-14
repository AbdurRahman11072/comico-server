import { Request, Response } from "express";
import { userSetting } from "./user_settings_model";

const createUserSetting = async (req: Request, res: Response) => {
  try {
    const userDetails = req.body;

    const createUserSetting = await userSetting.create(userDetails);
    res.json({
      message: "user setting created successful",
      success: true,
      status: 200,
      data: createUserSetting,
    });
  } catch (error) {
    res.json({
      message: "Failed to found",
      success: true,
      status: 200,
      data: error,
    });
  }
};
const getUserSetting = async (req: Request, res: Response) => {
  try {
    const getAllUserSetting = await userSetting.find();
    res.json({
      message: "All user Details found",
      success: true,
      status: 200,
      data: getAllUserSetting,
    });
  } catch (error) {
    res.json({
      message: "Failed to found",
      success: true,
      status: 200,
      data: error,
    });
  }
};

const updateUserSettingDetails = async (req: Request, res: Response) => {
  try {
    const { email, ...details } = req.body;
    const updateDetails = await userSetting.findOneAndUpdate(
      { email: email },
      {
        $set: details,
      },
      {
        new: true,
      }
    );
    res.json({
      message: "All user Details found",
      success: true,
      status: 200,
      data: updateDetails,
    });
  } catch (error) {
    res.json({
      message: "Failed to found",
      success: true,
      status: 200,
      data: error,
    });
  }
};

export const userSettingServices = {
  createUserSetting,
  getUserSetting,
  updateUserSettingDetails,
};
