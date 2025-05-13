import AppError from "../../errors/appError";
import { TSemister } from "./semister.interface";
import { academicModel } from "./semister.model";

const semisterCreateServices = async (data: TSemister) => {
  type TAcedemicNameMapper = {
    [key: string]: string;
  };

  const semisterExistMapper: TAcedemicNameMapper = {
    Autum: "01",
    Summar: "02",
    Fall: "03",
  };

  // if (semisterExistMapper[data.name] !== data.code) {
  //   throw new AppError(403, "Invalid Semister Code");
  // }
  const result = await academicModel.create(data);
  return result;
};

const getAllSemisterServices = async () => {
  const result = await academicModel.find();
  return result;
};

const getSingalSemisterServies = async (id: string) => {
  const result = await academicModel.findOne({ _id: id });
  return result;
};
const updateSemisterServices = async (id: string, data: Partial<TSemister>) => {
  type TAcedemicNameMapper = {
    [key: string]: string;
  };

  const semisterExistMapper: TAcedemicNameMapper = {
    Autum: "01",
    Summar: "02",
    Fall: "03",
  };
  if (semisterExistMapper[data?.name as string] !== data.code) {
    throw new AppError(403, "Invalid Semister Code");
  }
  const result = await academicModel.findOneAndUpdate(
    { _id: id },
    {
      $set: {
        name: data.name,
        code: data.code,
        year: data.year,
        startMonth: data.startMonth,
        endMonth: data.endMonth,
      },
    }
  );
  return result;
};
export const semisterServices = {
  semisterCreateServices,
  getAllSemisterServices,
  getSingalSemisterServies,
  updateSemisterServices,
};
