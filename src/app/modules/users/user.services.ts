import { config } from "../../config/config";
import { academicModel } from "../semister/semister.model";
import { studentModel } from "../students/student.model";
import { Student } from "../students/students.interface";
import { generateId } from "./generateId";
import { Tuser } from "./user.interface";
import { userModel } from "./user.model";

const userCreateServices = async (password: string, studentdata: Student) => {
  const userData: Partial<Tuser> = {};

  const semisterInfo = await academicModel.findById(
    studentdata.academicSemister
  );

  if (semisterInfo) {
    userData.password = password || config.default_password;
    userData.role = "student";
    userData.id = await generateId(semisterInfo);
    const newUser = await userModel.create(userData);
    if (Object.keys(newUser).length) {
      studentdata.id = newUser.id;
      studentdata.user = newUser._id;
      const resultUser = await studentModel.create(studentdata);
      return resultUser;
    }
  }
};

export const userServices = {
  userCreateServices,
};
