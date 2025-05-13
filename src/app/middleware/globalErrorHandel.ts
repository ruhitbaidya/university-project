import { ErrorRequestHandler, NextFunction, Request, Response } from "express";
import status from "http-status";
import { number, ZodError, ZodIssue } from "zod";
import { config } from "../config/config";
import { zodErrorValidation } from "../errors/handelZodError";
import { validationErrorCheck } from "../errors/validationError";

const globalErrorHandel: ErrorRequestHandler = async (err, req, res, next) => {
  let statuscode = 500;
  let message = err.message;

  type TErrorSource = {
    path: string | number;
    message: string;
  };
  let errorSource: TErrorSource[] = [
    {
      path: "",
      message: "Something Went Wrong!",
    },
  ];

  if (err instanceof ZodError) {
    const zodErrorsVali = zodErrorValidation(err);
    statuscode = zodErrorsVali.status;
    message = zodErrorsVali.message;
    errorSource = zodErrorsVali?.errorSource;
  } else if (err?.name === "ValidationError") {
    const vaidations = validationErrorCheck(err);
    statuscode = vaidations.status;
    message = vaidations.message;
    errorSource = vaidations.errorSource;
  }
  res.status(statuscode).json({
    success: false,
    message: message,
    errorSource,
    err,
    stack: config.envDev === "development" ? err?.stack : null,
  });
};

export default globalErrorHandel;
