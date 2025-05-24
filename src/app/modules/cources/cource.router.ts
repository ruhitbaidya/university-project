import express from "express";
import { courcesControler } from "./cource.controler";

const router = express.Router();

router.post("/create-cources", courcesControler.createCourcesControler);
router.get(
  "/get-singal-cources/:id",
  courcesControler.getSingalCourcesControler
);
router.get("/get-all-cources", courcesControler.getAllCourcesControler);
router.patch("/update-cources/:id", courcesControler.updateCourcesControler);
router.delete("/delete-cources/:id", courcesControler.deleteCourcesControler);
