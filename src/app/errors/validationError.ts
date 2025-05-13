import mongoose from "mongoose";

export const validationErrorCheck = (err: mongoose.Error.ValidationError) => {
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
