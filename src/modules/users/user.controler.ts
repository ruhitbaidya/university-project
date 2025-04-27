import { NextFunction, Request, Response } from "express";
import { userServices } from "./user.services";
import { sendResponse } from "../../app/utils/response";

const userCreateControler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { password, student } = req.body;
    const result = await userServices.userCreateServices(password, student);
    sendResponse(res, {
      message: "Student Create Successfull",
      status: 200,
      result,
    });
  } catch (err) {
    next(err);
  }
};

export const userControler = {
  userCreateControler,
};
