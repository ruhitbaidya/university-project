import { NextFunction, Request, Response } from "express";
import { userServices } from "./user.services";
import { catchAsyncFun } from "../../app/utils/catchAsync";

const userCreateControler = catchAsyncFun(async (req,res) => {
    const { password, student } = req.body;
    const result = await userServices.userCreateServices(password, student);
    res.status(200).json({
      success: true,
      message: "Student Create Successfull",
      result,
    });
});

export const userControler = {
  userCreateControler,
};
