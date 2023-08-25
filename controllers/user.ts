import  UserService  from "../services/user";
import express, { Request, Response } from "express";
const router = express.Router();

router.get("/get", async (req: Request, res: Response) => {
  const data = await UserService.getAll();
  return res.status(200).send(data);
});

router.post("/create", async (req: Request, res: Response) => {
    console.log("jack")
  const data = await UserService.Create(req.body);
  return res.status(200).send(data);
});

module.exports = router
