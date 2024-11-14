import { Request, Response } from "express";
import { bookmark } from "./bookmark_model";

const getBookmarkByEmail = async (req: Request, res: Response) => {
  try {
    const email = req.body;
    const getbookmark = await bookmark.find(email);
    res.json({
      message: "All user Bookmark",
      success: true,
      status: 200,
      data: getbookmark,
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

const addBookmark = async (req: Request, res: Response) => {
  try {
    const addbookmark = await bookmark.create(req.body);
    res.json({
      message: "All user Bookmark",
      success: true,
      status: 200,
      data: addbookmark,
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

const deleteBookmark = async (req: Request, res: Response) => {
  try {
    const { deletebookmarkbyid } = req.params;
    const deletebookmark = await bookmark.findByIdAndDelete(deletebookmarkbyid);
    res.json({
      message: "Bookmark removed successfully",
      success: true,
      status: 200,
      data: deletebookmark,
    });
  } catch (error) {
    res.json({
      message: "Failed to remove",
      success: true,
      status: 200,
      data: error,
    });
  }
};

export const bookmarkServices = {
  getBookmarkByEmail,
  addBookmark,
  deleteBookmark,
};
