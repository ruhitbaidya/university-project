import { catchAsyncFun } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/response";
import { studentServices } from "./student.services";

const getAllSudentControler = catchAsyncFun(async (req, res) => {
  const query = req?.query;
  const result = await studentServices.getAllStudentServices(query);
  sendResponse(res, {
    status: 200,
    message: "Students Get Successfully",
    success: true,
    result,
  });
});

const getSingalSudentControler = catchAsyncFun(async (req, res) => {
  const id = req.params.id;
  const result = await studentServices.getSingalStudentServices(id);
  sendResponse(res, {
    status: 200,
    message: "Students Get Successfully",
    success: true,
    result,
  });
});

const updateStudentControler = catchAsyncFun(async (req, res) => {
  const id = req.params.id;
  const stData = req.body;
  const result = await studentServices.updateStudentServices(id, stData);
  sendResponse(res, {
    success: true,
    message: "Student Update Successs",
    result: result || null,
    status: 200,
  });
});

const deleteSudentControler = catchAsyncFun(async (req, res) => {
  const id = req.params.id;
  const result = await studentServices.deleteStudentServices(id);
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
  updateStudentControler,
  deleteSudentControler,
};
