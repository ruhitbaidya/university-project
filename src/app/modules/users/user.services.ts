import mongoose from "mongoose";
import { config } from "../../config/config";
import { academicModel } from "../semister/semister.model";
import { studentModel } from "../students/student.model";
import { Student } from "../students/students.interface";
import { generateId } from "./generateId";
import { Tuser } from "./user.interface";
import { userModel } from "./user.model";

const userCreateServices = async (password: string, studentdata: Student) => {
  const userData: Partial<Tuser> = {};

  const session = await mongoose.startSession();
  try {
    session.startTransaction();

    userData.password = password || config.default_password;
    userData.role = "student";
    const semisterInfo = await academicModel.findById(
      studentdata.academicSemister
    );
    if (semisterInfo) {
      userData.id = await generateId(semisterInfo);
    }
    const newUser = await userModel.create([userData], { session });

    studentdata.id = newUser[0].id;
    studentdata.user = newUser[0]._id;
    const resultUser = await studentModel.create([studentdata], {
      session,
    });

    await session.commitTransaction();
    await session.endSession();
    return resultUser;
  } catch (err) {
    await session.abortTransaction();
    await session.endSession();
  }
};

export const userServices = {
  userCreateServices,
};
