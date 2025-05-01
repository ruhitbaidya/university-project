import { model, Schema } from "mongoose";
import { TSemister } from "./semister.interface";
import { AcedemicCode, AcedemicName, months } from "./academicSelimsterconst";
import AppError from "../../errors/appError";

const semisterSchema = new Schema<TSemister>(
  {
    name: {
      type: String,
      required: true,
      enum: AcedemicName,
    },
    code: {
      type: String,
      required: true,
      enum: AcedemicCode,
    },
    year: {
      type: String,
      required: true,
    },
    startMonth: {
      type: String,
      required: true,
      enum: months,
    },
    endMonth: {
      type: String,
      required: true,
      enum: months,
    },
  },
  { timestamps: true }
);

semisterSchema.pre("save", async function (next) {
  const isSemisterExist = await academicModel.findOne({
    year: this.year,
    name: this.name,
  });
  if (isSemisterExist) {
    throw new AppError(404, "This Semister Is Exist!");
  }
  next();
});
export const academicModel = model<TSemister>(
  "academicSemister",
  semisterSchema
);
