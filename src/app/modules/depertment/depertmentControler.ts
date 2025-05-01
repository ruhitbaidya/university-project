import { catchAsyncFun } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/response";
import { depertmentServices } from "./depertmentServices";

const createDepertmentControler = catchAsyncFun(async (req, res) => {
  const result = await depertmentServices.createDepertmentSerices(req.body);
  sendResponse(res, {
    status: 200,
    success: true,
    message: "Depertment Create Success",
    result,
  });
});

const getAllDepertmentControler = catchAsyncFun(async (req, res) => {
  const result = await depertmentServices.getAllDepertmentSercies();
  sendResponse(res, {
    status: 200,
    success: true,
    message: "Get All Depertment",
    result,
  });
});

const getSingalDepertmentControler = catchAsyncFun(async (req, res) => {
  const result = await depertmentServices.getSingalDepertmentServices(
    req.params.id
  );
  sendResponse(res, {
    status: 200,
    success: true,
    message: "Get Singal Depertment",
    result,
  });
});

const updateDepertmentControler = catchAsyncFun(async (req, res) => {
  const result = await depertmentServices.updateDepertmentServices(
    req.params.id,
    req.body
  );
  sendResponse(res, {
    status: 200,
    success: true,
    message: "Update Succss Depertment",
    result,
  });
});

export const depertmentControler = {
  createDepertmentControler,
  getAllDepertmentControler,
  getSingalDepertmentControler,
  updateDepertmentControler,
};
