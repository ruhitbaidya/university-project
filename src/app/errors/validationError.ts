import mongoose from "mongoose";
import { TGenericError } from "../interface/errorsType";

export const validationErrorCheck = (
  err: mongoose.Error.ValidationError
): TGenericError => {
  const foundsTypeMsg = Object.values(err.errors).map((val) => {
    return {
      path: val?.path,
      message: val?.message,
    };
  });

  return {
    status: 400,
    errorSource: foundsTypeMsg,
    message: "validation error",
  };
};
