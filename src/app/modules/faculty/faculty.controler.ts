import { catchAsyncFun } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/response";

const findAllFaculty = catchAsyncFun(async (req, res) => {
  const result = "";
  sendResponse(res, { status: 200, message: "Find All Faculty", result });
});
const findSingalFaculty = catchAsyncFun(async (req, res) => {
  const result = "";
  sendResponse(res, { status: 200, message: "Find Singal Faculty", result });
});
const updateFaculty = catchAsyncFun(async (req, res) => {
  const result = "";
  sendResponse(res, { status: 200, message: "Update Faculty", result });
});
const deleteFaculty = catchAsyncFun(async (req, res) => {
  const result = "";
  sendResponse(res, { status: 200, message: "Delete Faculty", result });
});

export const facultyControler = {
  findAllFaculty,
  findSingalFaculty,
  updateFaculty,
  deleteFaculty,
};
