import express from "express";
import { comicDetailsServices } from "./comic_details_services";

const router = express.Router();

router.get("/", comicDetailsServices.getAllComicDetails);
router.post("/create-comic-details", comicDetailsServices.createComicDetails);
router.get("/:comicdetailsbyid", comicDetailsServices.getComicDetailsById);
router.patch("/:comicid", comicDetailsServices.updatedComicDetailsById);
router.delete("/:comicDetailsId", comicDetailsServices.deleteComicById);

export const comicDetailsRoutes = router;
