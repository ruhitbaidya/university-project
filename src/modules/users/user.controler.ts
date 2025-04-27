import { userServices } from "./user.services";
import { catchAsyncFun } from "../../app/utils/catchAsync";
import { sendResponse } from "../../app/utils/response";

const userCreateControler = catchAsyncFun(async (req, res) => {
  const { password, student } = req.body;
  const result = await userServices.userCreateServices(password, student);
  sendResponse(res, {
    message: "Student Create Successfull",
    status: 200,
    result,
  });
});

export const userControler = {
  userCreateControler,
};
