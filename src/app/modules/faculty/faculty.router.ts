import express from "express";
import { facultyControler } from "./faculty.controler";
const router = express.Router();

router.get("/getAllFaculty", facultyControler.findAllFaculty);
router.get("/getSingalFaculty/:id", facultyControler.findSingalFaculty);
router.patch("/updateFaculty/:id", facultyControler.updateFaculty);
router.delete("/deleteFaculty/:id", facultyControler.deleteFaculty);

export const facultyRouter = router;
