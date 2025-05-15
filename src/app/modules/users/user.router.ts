import express from "express";
import { userControler } from "./user.controler";
import { validationCheck } from "../../middleware/validationCheck";
import { userValidationSchema } from "./user.validation";
import { createFacultyValidationSchema } from "../faculty/faculty.validation";

const router = express.Router();

router.post(
  "/create-user",
  validationCheck(userValidationSchema),
  userControler.userCreateControler
);

router.post(
  "/create-faculty",
  validationCheck(createFacultyValidationSchema),
  userControler.facultyUserCreateControler
);
export const userRouer = router;
