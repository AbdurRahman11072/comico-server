import express from "express";
import { userSettingServices } from "./user_settings_services";

const router = express.Router();

router.get("/get-all-user-setting", userSettingServices.getUserSetting);
router.post("/create-user-setting", userSettingServices.createUserSetting);
router.patch("/add-point", userSettingServices.updateUserSettingDetails);
router.delete("/");

export const userSettingRoutes = router;
