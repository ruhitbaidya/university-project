import { TCources } from "./cource.interface";
import { courcesModel } from "./cource.model";

const createCourceServices = async (payload: TCources) => {
  const result = await courcesModel.create(payload);
  return result;
};

const getAllCources = async () => {
  const result = await courcesModel.find();
  return result;
};

const getSingalCources = async (id: string) => {
  const result = await courcesModel.findById(id);
  return result;
};

const updateCources = async (id: string, payload: Partial<TCources>) => {
  const result = await courcesModel.findByIdAndUpdate(id, payload);
  return result;
};

const deleteCources = async (id: string) => {
  const result = await courcesModel.findByIdAndUpdate(id, { isDelete: true });
  return result;
};
export const courcesServices = {
  createCourceServices,
  getAllCources,
  getSingalCources,
  updateCources,
  deleteCources,
};
