import { NextFunction, Request, Response } from "express";
import status from "http-status";

const globalErrorHandel = async (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statuscode = status.INTERNAL_SERVER_ERROR;
  const message = err.message;
  res.status(statuscode).json({
    success: false,
    message: message,
    error: err,
  });
};

export default globalErrorHandel;
