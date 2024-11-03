import express from "express";
import { user } from "./userservises";

const router = express.Router();

router.post("/", user.create_user);
router.get("/:userId", user.getuserById);

export const createuserRoutes = router;
