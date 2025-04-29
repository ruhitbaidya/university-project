import { catchAsyncFun } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/response";
import { semisterServices } from "./semister.services";

const semisterCreateControler = catchAsyncFun(async (req, res) => {
  const result = await semisterServices.semisterCreateServices(req.body);
  sendResponse(res, {
    status: 200,
    message: "Semister Create Successfull",
    success: true,
    result,
  });
});

const getAllSemisterControler = catchAsyncFun(async (req, res) => {
  const result = await semisterServices.getAllSemisterServices();
  sendResponse(res, {
    status: 200,
    message: "Get All Semister",
    success: true,
    result,
  });
});

const getSingalSemisterControler = catchAsyncFun(async (req, res) => {
  const id = req.params.id;
  const result = await semisterServices.getSingalSemisterServies(id);
  sendResponse(res, {
    status: 200,
    message: "getSingal Semister",
    success: true,
    result,
  });
});

const updateSemisterControler = catchAsyncFun(async (req, res) => {
  const id = req.params.id;
  const data = req.body;
  const result = await semisterServices.updateSemisterServices(id, data);
  sendResponse(res, {
    status: 200,
    message: "Update Successfull Semister",
    success: true,
    result,
  });
});
export const semisterControler = {
  semisterCreateControler,
  getAllSemisterControler,
  getSingalSemisterControler,
  updateSemisterControler,
};
