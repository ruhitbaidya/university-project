import express from "express";
import { semisterControler } from "./semister.controler";
import { validationCheck } from "../../middleware/validationCheck";
import academicValidationSchema from "./semistervalidation";
const router = express.Router();

router.post(
  "/create-semister",
  // validationCheck(academicValidationSchema),
  semisterControler.semisterCreateControler
);

router.get("/getAllSemister", semisterControler.getAllSemisterControler);
router.get(
  "/getSingalSemister/:id",
  semisterControler.getSingalSemisterControler
);
router.patch("/updateSemister/:id", semisterControler.updateSemisterControler);

export const semisterRouter = router;
