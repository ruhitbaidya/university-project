import express from "express";
import { studentRouter } from "../../modules/students/student.router";
import { userRouer } from "../../modules/users/user.router";
const router = express.Router();

const routers = [
  {
    path: "/",
    route: studentRouter,
  },
  {
    path: "/user",
    route: userRouer,
  },
];

routers.forEach((item) => router.use(`/api/v1${item.path}`, item.route));

export default router;
