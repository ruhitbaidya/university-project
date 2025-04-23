import express from "express";
import cors from "cors";
import { userRouer } from "./modules/users/user.router";

import globalErrorHandel from "./app/middleware/globalErrorHandel";
import notFound from "./app/middleware/notFound";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// app.use("/api/v1/student", studentRouter);
app.use("/api/v1/user", userRouer);
app.use(globalErrorHandel);
app.use(notFound);
export default app;
