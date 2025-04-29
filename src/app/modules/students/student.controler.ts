import { catchAsyncFun } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/response";
import { studentServices } from "./student.services";

const getAllSudentControler = catchAsyncFun(async (req, res) => {
  const result = await studentServices.getAllStudentServices();
  sendResponse(res, {
    status: 200,
    message: "Students Get Successfully",
    success: true,
    result,
  });
});

const getSingalSudentControler = catchAsyncFun(async (req, res) => {
  const result = await studentServices.getAllStudentServices();
  sendResponse(res, {
    status: 200,
    message: "Students Get Successfully",
    success: true,
    result,
  });
});

const deleteSudentControler = catchAsyncFun(async (req, res) => {
  const result = await studentServices.getAllStudentServices();
  sendResponse(res, {
    status: 200,
    message: "Students Delete Successfully",
    success: true,
    result,
  });
});

export const studentControler = {
  getAllSudentControler,
  getSingalSudentControler,
  deleteSudentControler,
};
