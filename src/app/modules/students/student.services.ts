import mongoose from "mongoose";
import { studentModel } from "./student.model";
import { userModel } from "../users/user.model";

const getAllStudentServices = async () => {
  const result = await studentModel.find();
  return result;
};

const getSingalStudentServices = async (id: string) => {
  const result = await studentModel.findOne({ _id: id });
  return result;
};

const deleteStudentServices = async (id: string) => {
  const session = await mongoose.startSession();
  try {
    session.startTransaction();

    const deleteUser = await studentModel.findOneAndUpdate(
      { id },
      { $set: { isDeleted: true } },
      { new: true, session }
    );

    await userModel.findOneAndUpdate(
      { id },
      { $set: { isDeleted: true } },
      { new: true, session }
    );

    await session.commitTransaction();
    await session.endSession();
    return deleteUser;
  } catch (err) {
    await session.abortTransaction();
    await session.endSession();
    return err;
  }
};
export const studentServices = {
  getAllStudentServices,
  getSingalStudentServices,
  deleteStudentServices,
};
