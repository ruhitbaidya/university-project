import { config } from "../../app/config/config";
import { studentModel } from "../students/student.model";
import { Student } from "../students/students.interface";
import { Tuser } from "./user.interface";
import { userModel } from "./user.model";

const userCreateServices = async (password: string, studentdata: Student) => {
  const userData: Partial<Tuser> = {};

  userData.password = password || config.default_password;
  userData.role = "student";
  userData.id = "2030102568";
  const newUser = await userModel.create(userData);

  if (Object.keys(newUser).length) {
    studentdata.id = newUser.id;
    studentdata.user = newUser._id;
    const resultUser = await studentModel.create(studentdata);
    return resultUser;
  }
};

export const userServices = {
  userCreateServices,
};
