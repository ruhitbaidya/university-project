import express from "express";
import cors from "cors";
import globalErrorHandel from "./app/middleware/globalErrorHandel";
import notFound from "./app/middleware/notFound";
import router from "./app/router/router";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Order Get Success",
  });
});
app.use(router);
app.use(globalErrorHandel);
app.use(notFound);
export default app;
