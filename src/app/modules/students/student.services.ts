import { studentModel } from "./student.model";

const getAllStudentServices = async () => {
  const result = await studentModel.find();
  return result;
};

const getSingalStudentServices = async (id: string) => {
  const result = await studentModel.findOne({ _id: id });
  return result;
};

const deleteStudentServices = async (id: string) => {
  const result = await studentModel.deleteOne({ _id: id });
  return result;
};
export const studentServices = {
  getAllStudentServices,
  getSingalStudentServices,
  deleteStudentServices,
};
