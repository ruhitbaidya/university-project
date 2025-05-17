import { model, Schema } from "mongoose";
import { TCources, TPreRequesiteCouce } from "./cource.interface";

const preRequisetCourceSchema = new Schema<TPreRequesiteCouce>({
  cource: {
    type: Schema.Types.ObjectId,
  },
  isDelete: {
    type: Boolean,
    default: false,
  },
});

const courceSchema = new Schema<TCources>({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  prefix: {
    type: String,
    required: true,
  },
  code: {
    type: Number,
    required: true,
  },
  credis: {
    type: Number,
    required: true,
  },
  preRequisedCource: [preRequisetCourceSchema],
});

export const courcesModel = model("cources", courceSchema);
