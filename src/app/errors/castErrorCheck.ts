import mongoose from "mongoose";
import { TGenericError } from "../interface/errorsType";

export const castErrorCheck = (
  err: mongoose.Error.CastError
): TGenericError => {
  const errorSource = [
    {
      path: err?.path,
      message: err?.message,
    },
  ];

  return {
    status: 400,
    message: "invalid id",
    errorSource,
  };
};
