import { TDepertment } from "./depertment.interface";
import { depertmentModel } from "./depertmentModel";

const createDepertmentSerices = async (data: TDepertment) => {
  const result = await depertmentModel.create(data);
  return result;
};

const getAllDepertmentSercies = async () => {
  const result = await depertmentModel.find();
  return result;
};

const getSingalDepertmentServices = async (id: string) => {
  const result = await depertmentModel.findById(id);
  return result;
};

const updateDepertmentServices = async (
  id: string,
  data: Partial<TDepertment>
) => {
  const result = await depertmentModel.findByIdAndUpdate(
    id,
    {
      $set: { ...data },
    },
    { new: true }
  );
  return result;
};

export const depertmentServices = {
  createDepertmentSerices,
  getAllDepertmentSercies,
  getSingalDepertmentServices,
  updateDepertmentServices,
};
