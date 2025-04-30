import { model, Schema } from "mongoose";

const academicFacultySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const academicFacultyModel = model(
  "academicFaculty",
  academicFacultySchema
);
