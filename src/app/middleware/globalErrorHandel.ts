import { ErrorRequestHandler, NextFunction, Request, Response } from "express";
import status from "http-status";
import { number, ZodError, ZodIssue } from "zod";
import { config } from "../config/config";
import { zodErrorValidation } from "../errors/handelZodError";
import { validationErrorCheck } from "../errors/validationError";
import { TErrorSource } from "../interface/errorsType";
import { castErrorCheck } from "../errors/castErrorCheck";
import { duplicateErrorHandel } from "../errors/duplicateErrorHandel";
import AppError from "../errors/appError";

const globalErrorHandel: ErrorRequestHandler = async (err, req, res, next) => {
  let statuscode = 500;
  let message = err.message;

  let errorSource: TErrorSource[] = [
    {
      path: "",
      message: "Something Went Wrong!",
    },
  ];

  if (err instanceof ZodError) {
    const zodErrorsVali = zodErrorValidation(err);
    statuscode = zodErrorsVali.status as number;
    message = zodErrorsVali.message;
    errorSource = zodErrorsVali?.errorSource;
  } else if (err?.name === "ValidationError") {
    const vaidations = validationErrorCheck(err);
    statuscode = vaidations?.status as number;
    message = vaidations.message;
    errorSource = vaidations.errorSource;
  } else if (err?.name === "CastError") {
    const vaidations = castErrorCheck(err);
    statuscode = vaidations.status as number;
    message = vaidations.message;
    errorSource = vaidations.errorSource;
  } else if (err?.errorResponse?.code === 11000) {
    const vaidations = duplicateErrorHandel(err);
    statuscode = vaidations.status as number;
    message = vaidations.message;
    errorSource = vaidations.errorSource;
  } else if (err instanceof AppError) {
    statuscode = err?.statusCode;
    message = err.message;
    errorSource = [
      {
        path: "",
        message: err.message,
      },
    ];
  } else if (err instanceof Error) {
    statuscode = 400;
    message = err.message;
    errorSource = [
      {
        path: "",
        message: err.message,
      },
    ];
  }
  res.status(statuscode).json({
    success: false,
    message: message,
    errorSource,
    stack: config.envDev === "development" ? err?.stack : null,
  });
};

export default globalErrorHandel;
