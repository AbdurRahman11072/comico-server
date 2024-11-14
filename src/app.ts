import express, { Request, Response } from "express";
import { userRoutes } from "./modules/user/userrouter";
import { userSettingRoutes } from "./modules/user_settings/user_settings_route";
import { bookmarkRoutes } from "./modules/bookmark/booomark_router";
import { comicRoutes } from "./modules/comic/comic_route";
import { comicDetailsRoutes } from "./modules/comic_Details/comic_details_route";

const app = express();
app.use(express.json());

// all routes
app.use("/api/user", userRoutes);
app.use("/api/user-setting", userSettingRoutes);
app.use("/api/bookmark", bookmarkRoutes);
app.use("/api/comic", comicRoutes);
app.use("/api/comic-detail", comicDetailsRoutes);
app.get("/", (req: Request, res: Response) => {
  res.send("Hello chudir vi3!");
});

export default app;
