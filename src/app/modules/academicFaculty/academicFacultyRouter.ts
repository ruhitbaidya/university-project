import express from "express";
import { academicFacultyControler } from "./academicontroler";
import { validationCheck } from "../../middleware/validationCheck";
import academicFacultyValidationSchema from "./acdemicFacultyValidation";
const router = express.Router();


router.post("/create-faculty", validationCheck(academicFacultyValidationSchema) ,academicFacultyControler.createFacultyControler);
router.get("/get-all-faculty", academicFacultyControler.getAllFacultyControler);
router.get("/get-singal-faculty/:id", academicFacultyControler.getSingalFacultyControler);
router.patch("/update-faculty/:id", academicFacultyControler.updateFacultyControler);

export const facultyRouter = router