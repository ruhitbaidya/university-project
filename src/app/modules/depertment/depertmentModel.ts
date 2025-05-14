import { model, Schema } from "mongoose";
import { TDepertment } from "./depertment.interface";

const depertMentSchema = new Schema<TDepertment>(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    academicFaculty: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "academicFaculty",
    },
  },
  { timestamps: true }
);

export const depertmentModel = model("depertment", depertMentSchema);
