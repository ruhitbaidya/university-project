import { catchAsyncFun } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/response";
import { courcesServices } from "./cource.services";

const createCourcesControler = catchAsyncFun(async (req, res) => {
  const payload = req.body;
  const result = await courcesServices.createCourceServices(payload);
  sendResponse(res, {
    status: 200,
    success: true,
    message: "cource create success",
    result,
  });
});
const getAllCourcesControler = catchAsyncFun(async (req, res) => {
  const result = await courcesServices.getAllCources();
  sendResponse(res, {
    status: 200,
    success: true,
    message: "cource create success",
    result,
  });
});
const updateCourcesControler = catchAsyncFun(async (req, res) => {
  const id = req.params.id;
  const payload = req.body;

  const result = await courcesServices.updateCources(id, payload);

  sendResponse(res, {
    status: 200,
    success: true,
    message: "cource create success",
    result,
  });
});
const getSingalCourcesControler = catchAsyncFun(async (req, res) => {
  const id = req.params.id;

  const result = await courcesServices.getSingalCources(id);

  sendResponse(res, {
    status: 200,
    success: true,
    message: "cource create success",
    result,
  });
});
const deleteCourcesControler = catchAsyncFun(async (req, res) => {
  const id = req.params.id;
  const result = await courcesServices.deleteCources(id);
  sendResponse(res, {
    status: 200,
    success: true,
    message: "cource create success",
    result,
  });
});

export const courcesControler = {
  createCourcesControler,
  getAllCourcesControler,
  getSingalCourcesControler,
  updateCourcesControler,
  deleteCourcesControler,
};
