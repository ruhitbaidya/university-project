import express from "express";
import { studentControler } from "./student.controler";

const router = express.Router();

router.get("/getAllStudent", studentControler.getAllSudentControler);
router.get("/getSingalStudent/:id", studentControler.getAllSudentControler);
router.delete("/deleteStudent", studentControler.deleteSudentControler);

export const studentRouter = router;
