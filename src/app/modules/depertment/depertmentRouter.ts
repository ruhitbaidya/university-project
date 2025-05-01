import express from "express";
import { depertmentControler } from "./depertmentControler";
import { validationCheck } from "../../middleware/validationCheck";
import { depertmentValidationSchema } from "./depertmentValidation";

const router = express.Router();

router.post(
  "/create-depertment",
  validationCheck(depertmentValidationSchema),
  depertmentControler.createDepertmentControler
);

router.get(
  "/get-all-depertment",
  depertmentControler.getAllDepertmentControler
);
router.get(
  "/get-singal-depertment/:id",
  depertmentControler.getSingalDepertmentControler
);
router.patch(
  "/update-depertment/:id",
  depertmentControler.updateDepertmentControler
);

export const depertmentRouter = router;
