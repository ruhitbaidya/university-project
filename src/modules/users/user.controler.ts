import { NextFunction, Request, Response } from "express";
import { userServices } from "./user.services";

const userCreateControler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { password, student } = req.body;
    const result = await userServices.userCreateServices(password, student);
    res.status(200).json({
      success: true,
      message: "Student Create Successfull",
      result,
    });
  } catch (err) {
    next(err);
  }
};

export const userControler = {
  userCreateControler,
};
