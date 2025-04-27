import express from "express";
import { userControler } from "./user.controler";
import { validationCheck } from "../../app/middleware/validationCheck";
import { userValidationSchema } from "./user.validation";

const router = express.Router();

router.post(
  "/create-user",
  validationCheck(userValidationSchema),
  userControler.userCreateControler
);

export const userRouer = router;
