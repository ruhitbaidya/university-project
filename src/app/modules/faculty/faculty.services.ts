import { TFaculty } from "./faculty.interface";

const findAllFaculty = async (query: Record<string, unknown>) => {
  return "";
};
const findSingalFaculty = async (query: string) => {
  return "";
};
const updateFaculty = async (id:string, payload:Partial<TFaculty>) => {
  return "";
};
const deleteFaculty = async (id:string) => {
  return "";
};

export const facultyServices = {
  findAllFaculty,
  findSingalFaculty,
  updateFaculty,
  deleteFaculty,
};
