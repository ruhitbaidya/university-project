import express from "express";
import { userControler } from "./user.controler";

const router = express.Router();

router.post("/create-user", userControler.userCreateControler);

export const userRouer = router;
