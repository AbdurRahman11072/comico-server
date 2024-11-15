import { Request, Response } from "express";
import { user } from "./user.model";
import { userSetting } from "../user_settings/user_settings_model";

const create_user = async (req: Request, res: Response) => {
  try {
    const email = req.body.email;
    const create_User = await user.create(req.body);
    if (create_User) {
      const createUserSetting = await userSetting.create(email);
      res.json({
        message: "user created successful",
        success: true,
        status: 200,
        data: create_User,
        data2: createUserSetting,
      });
    }
  } catch (error) {
    res.json(error);
  }
};
const getalluser = async (req: Request, res: Response) => {
  try {
    const getuser = await user.find();
    res.json({
      message: "User has been found",
      success: true,
      status: 200,
      data: getuser,
    });
  } catch (error) {
    res.json({
      message: "failed to found",
      status: 404,
      data: error,
    });
  }
};

const getuserById = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;

    const getuser = await user.findById(userId);
    res.json({
      message: "User has been found",
      success: true,
      status: 200,
      data: getuser,
    });
  } catch (error) {
    res.json({
      message: "failed to found",
      status: 404,
      data: error,
    });
  }
};

const updateuser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const updated_data = req.body;

    const result = await user.findByIdAndUpdate(
      userId,
      { $set: updated_data },
      { new: true, runValidators: true }
    );
    res.json({
      massage: "updated successful",
      status: 200,
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const deleteuserById = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;

    const deleteuser = await user.findByIdAndDelete(userId);
    res.json({
      message: "User has been found",
      success: true,
      status: 200,
      data: deleteuser,
    });
  } catch (error) {
    res.json({
      message: "failed to found",
      status: 404,
      data: error,
    });
  }
};

export const userservises = {
  create_user,
  getuserById,
  updateuser,
  deleteuserById,
  getalluser,
};
