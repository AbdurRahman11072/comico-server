import express from "express";
import { comicServices } from "./comic_services";

const router = express.Router();

router.get("/all-comic", comicServices.allComic);
router.post("/add-comic", comicServices.addComic);
router.get("/:get_comic_by_id", comicServices.getComicById);
router.put("/:update_comic_by_id", comicServices.updateComic);
router.delete("/:delete_comic_by_id", comicServices.deleteComic);

export const comicRoutes = router;
