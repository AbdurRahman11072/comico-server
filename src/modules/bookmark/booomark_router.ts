import express from "express";
import { bookmarkServices } from "./bookmark_services";

const router = express.Router();

router.get("/get-bookmark-by-email", bookmarkServices.getBookmarkByEmail);
router.post("/add-bookmark", bookmarkServices.addBookmark);
router.delete("/:deletebookmarkbyid", bookmarkServices.deleteBookmark);

export const bookmarkRoutes = router;
