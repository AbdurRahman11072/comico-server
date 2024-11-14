import express from "express";
import { userservises } from "./userservises";

const router = express.Router();

router.post("/createuser", userservises.create_user);
router.get("/alluser", userservises.getalluser);
router.get("/:userId", userservises.getuserById);
router.patch("/:userId", userservises.updateuser);
router.delete("/:userId", userservises.deleteuserById);

export const userRoutes = router;
