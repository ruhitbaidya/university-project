import express from "express";
import cors from "cors";
import { studentRouter } from "./modules/students/student.router";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api/v1/student", studentRouter);
export default app;
