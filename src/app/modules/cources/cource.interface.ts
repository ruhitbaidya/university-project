import { Types } from "mongoose";

export type TPreRequesiteCouce = {
  cource: Types.ObjectId;
  isDelete: boolean;
};

export type TCources = {
  title: string;
  prefix: string;
  code: number;
  credis: number;
  preRequisedCource: [];
};
