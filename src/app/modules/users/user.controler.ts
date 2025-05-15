import { userServices } from "./user.services";
import { catchAsyncFun } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/response";

const userCreateControler = catchAsyncFun(async (req, res) => {
  const { password, student } = req.body;
  const result = await userServices.userCreateServices(password, student);
  sendResponse(res, {
    message: "Student Create Successfull",
    status: 200,
    result,
  });
});

const facultyUserCreateControler = catchAsyncFun(async (req, res) => {
  const result = await userServices.facultyUserCreateServices(req.body);
  sendResponse(res, { message: "create success faculty", status: 200, result });
});
export const userControler = {
  userCreateControler,
  facultyUserCreateControler,
};
