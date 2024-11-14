import { Request, Response } from "express";
import { comic } from "./comic_model";

const allComic = async (req: Request, res: Response) => {
  try {
    const getAllComic = await comic.find();
    res.json({
      message: "All comic have been found",
      success: true,
      status: 200,
      data: getAllComic,
    });
  } catch (error) {
    res.json(error);
  }
};

const addComic = async (req: Request, res: Response) => {
  try {
    const create_comic = await comic.create(req.body);

    res.json({
      message: "Comic created successfully",
      success: true,
      status: 200,
      data: create_comic,
    });
  } catch (error) {
    res.json(error);
  }
};

const getComicById = async (req: Request, res: Response) => {
  try {
    const { get_comic_by_id } = req.params;

    const getComic = await comic.findById(get_comic_by_id);
    res.json({
      message: "Comic has been found",
      success: true,
      status: 200,
      data: getComic,
    });
  } catch (error) {
    res.json({
      message: "failed to found",
      status: 404,
      data: error,
    });
  }
};

const updateComic = async (req: Request, res: Response) => {
  try {
    const { update_comic_by_id } = req.params;
    const updated_data = req.body;

    const updatedComicDetails = await comic.findByIdAndUpdate(
      update_comic_by_id,
      updated_data,
      { new: true }
    );
    res.json({
      massage: "Comic updated successfully",
      status: 200,
      data: updatedComicDetails,
    });
  } catch (error) {
    console.log(error);
  }
};

const deleteComic = async (req: Request, res: Response) => {
  try {
    const { delete_comic_by_id } = req.params;

    const deletecomic = await comic.findByIdAndDelete(delete_comic_by_id);
    res.json({
      message: "Comic has been deleted",
      success: true,
      status: 200,
      data: deletecomic,
    });
  } catch (error) {
    res.json({
      message: "failed to found",
      status: 404,
      data: error,
    });
  }
};

export const comicServices = {
  allComic,
  addComic,
  getComicById,
  updateComic,
  deleteComic,
};
