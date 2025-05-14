import mongoose from "mongoose";
import { studentModel } from "./student.model";
import { userModel } from "../users/user.model";

const getAllStudentServices = async (query: Record<string, unknown>) => {
  const searchTerm = query?.searchText || "";
  const coTerams = { ...query };
  const searchFields = ["email", "name.firstName", "premanentAddress"];

  const searchQuery = studentModel.find({
    $or: searchFields.map((field) => ({
      [field]: { $regex: searchTerm, $options: "i" },
    })),
  });

  const delItem = ["searchText", "sort", "limit"];
  delItem.forEach((ele) => delete coTerams[ele]);
  console.log(query, coTerams);
  const searchFilter = searchQuery.find(coTerams);

  let sort = "-createdAt";
  if (query?.sort) {
    sort = query.sort as string;
  }

  const sortSearch = searchFilter.sort(sort);

  let limit = 1;
  if (query.limit) {
    limit = query.limit as number;
  }

  const limitQuery = await sortSearch.limit(limit);

  return limitQuery;
};

const getSingalStudentServices = async (id: string) => {
  const result = await studentModel.findOne({ _id: id });
  return result;
};

const updateStudentServices = async (
  id: string,
  payload: Record<string, unknown>
) => {
  const { name, guardian, localGuardian, ...remainStudent } = payload;

  const updateStude = { ...remainStudent };
  if (name && Object.keys(name).length) {
    for (const [key, value] of Object.entries(name)) {
      updateStude[`name.${key}`] = value;
    }
  }
  if (guardian && Object.keys(guardian).length) {
    for (const [key, value] of Object.entries(guardian)) {
      updateStude[`guardian.${key}`] = value;
    }
  }
  if (localGuardian && Object.keys(localGuardian).length) {
    for (const [key, value] of Object.entries(localGuardian)) {
      updateStude[`localGuardian.${key}`] = value;
    }
  }

  const result = await studentModel.updateOne({ id }, updateStude, {
    new: true,
  });
  console.log(result);
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
  updateStudentServices,
  deleteStudentServices,
};
