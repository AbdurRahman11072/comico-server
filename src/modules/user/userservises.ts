import { Request, Response } from "express";
import { createuser } from "./user.model";

const create_user = async (req: Request, res: Response) => {
  try {
    const create_User = await createuser.create(req.body);
    res.json({
      message: "user created successful",
      success: true,
      status: 200,
      data: create_User,
    });
  } catch (error) {
    res.json(error);
  }
};

const getuserById = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;

    const getuser = await createuser.findById(userId);
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

export const user = {
  create_user,
  getuserById,
};
