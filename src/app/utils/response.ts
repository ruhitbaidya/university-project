import { Response } from "express";

export type TResponse<T> = {
  success?: boolean;
  status: number;
  message: string;
  result: T;
};

export const sendResponse = <T>(res: Response, data: TResponse<T>) => {
  res.status(data.status).json({
    success: true,
    message: data.message,
    data: data.result,
  });
};
