import mongoose from "mongoose";
import { config } from "../../config/config";
import { academicModel } from "../semister/semister.model";
import { studentModel } from "../students/student.model";
import { Student } from "../students/students.interface";
import { generateFacultyId, generateId } from "./generateId";
import { Tuser } from "./user.interface";
import { userModel } from "./user.model";
import { TFaculty } from "../faculty/faculty.interface";
import AppError from "../../errors/appError";
import { depertmentModel } from "../depertment/depertmentModel";
import { Faculty } from "../faculty/faculty.model";

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

const facultyUserCreateServices = async (payload: TFaculty) => {
  const userData: Partial<Tuser> = {};
  userData.password = payload?.password || config?.facultyPassword;
  userData.role = "faculty";
  const findDepertment = await depertmentModel.findById(
    payload.academicDepartment
  );
  if (!findDepertment) {
    throw new AppError(400, "depertment not found!");
  }
  const session = await mongoose.startSession();
  try {
    session.startTransaction();
    userData.id = await generateFacultyId();
    const users = await userModel.create([userData], { session });
    if (!users.length) {
      throw new AppError(401, "User Create Problem");
    }
    payload.id = users[0].id;
    payload.user = users[0]._id;

    const createFaculti = await Faculty.create([payload], { session });
    if (!createFaculti.length) {
      throw new AppError(401, "Faculty Not Create");
    }
    await session.commitTransaction();
    await session.endSession();

    return createFaculti;
  } catch (err) {
    await session.abortTransaction();
    await session.endSession();
  }
};
export const userServices = {
  userCreateServices,
  facultyUserCreateServices,
};
