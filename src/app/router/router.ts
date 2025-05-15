import express from "express";
import { studentRouter } from "../modules/students/student.router";
import { userRouer } from "../modules/users/user.router";
import { semisterRouter } from "../modules/semister/semister.router";
import { facultyRouter } from "../modules/academicFaculty/academicFacultyRouter";
import { depertmentRouter } from "../modules/depertment/depertmentRouter";
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
  {
    path: "/semister",
    route: semisterRouter,
  },
  {
    path: "/faculty",
    route: facultyRouter,
  },
  {
    path: "/depertment",
    route: depertmentRouter,
  },
  {
    path: "/faculty",
    route: facultyRouter,
  },
];

routers.forEach((item) => router.use(`/api/v1${item.path}`, item.route));

export default router;
