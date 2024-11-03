import express, { Request, Response } from "express";
import { createuserRoutes } from "./modules/user/userrouter";

const app = express();
app.use(express.json());

app.use("/api/createuser", createuserRoutes);
app.get("/", (req: Request, res: Response) => {
  res.send("Hello chudir vi3!");
});

export default app;
