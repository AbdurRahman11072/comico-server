import { Request, Response } from "express";
import { comicDetails } from "./comic_details_model";

const createComicDetails = async (req: Request, res: Response) => {
  try {
    const details = req.body;
    console.log(details);

    const result = await comicDetails.create(details);
    res.json({
      success: true,
      status: 200,
      data: result,
    });
  } catch (error) {
    res.json(error);
  }
};

const getAllComicDetails = async (req: Request, res: Response) => {
  try {
    const result = await comicDetails.find();
    res.json({
      message: "Operation successful",
      success: true,
      status: 200,
      data: result,
    });
  } catch (error) {
    res.json({
      message: "failed to find",
      status: 404,
      data: error,
    });
  }
};
const getComicDetailsById = async (req: Request, res: Response) => {
  try {
    const { comicdetailsbyid } = req.params;
    const result = await comicDetails.findById(comicdetailsbyid);
    res.json({
      message: "Operation successful",
      success: true,
      status: 200,
      data: result,
    });
  } catch (error) {
    res.json({
      message: "failed to find",
      status: 404,
      data: error,
    });
  }
};

const updatedComicDetailsById = async (req: Request, res: Response) => {
  try {
    const { comicid } = req.params;
    const updated_data = req.body;

    const result = await comicDetails.findByIdAndUpdate(
      comicid,
      { $set: updated_data },
      { new: true }
    );
    res.json({
      massage: "updated successful",
      status: 200,
      data: result,
    });
  } catch (error) {
    res.json({
      message: "failed to find",
      status: 404,
      data: error,
    });
  }
};

const deleteComicById = async (req: Request, res: Response) => {
  try {
    const { comicDetailsId } = req.params;

    const deleteuser = await comicDetails.findByIdAndDelete(comicDetailsId);
    res.json({
      success: true,
      status: 200,
      data: deleteuser,
    });
  } catch (error) {
    res.json({
      status: 404,
      data: error,
    });
  }
};

export const comicDetailsServices = {
  getAllComicDetails,
  getComicDetailsById,
  createComicDetails,
  updatedComicDetailsById,
  deleteComicById,
};
