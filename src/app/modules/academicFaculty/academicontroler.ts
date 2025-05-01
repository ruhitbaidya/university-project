import { catchAsyncFun } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/response";
import { academicFacultyServices } from "./academicFacultyServices";

const createFacultyControler = catchAsyncFun(async(req , res)=>{
    const data = req.body
    const result = await academicFacultyServices.createFacultyServices(data);
    sendResponse(res, {success : true, status:200,message : "Faculty Create Success", result})
});

const getAllFacultyControler = catchAsyncFun(async(req , res)=>{
    const result = await academicFacultyServices.getAllFaceltyServices();
    sendResponse(res, {success : true, status:200,message : "Get All Faculty", result})
})

const getSingalFacultyControler = catchAsyncFun(async(req , res)=>{
    const id = req.params.id
    const result = await academicFacultyServices.getSingalFacultyServices(id);
    sendResponse(res, {success : true, status:200,message : "Get Singal Faculty", result})
})

const updateFacultyControler = catchAsyncFun(async(req , res)=>{
    const id = req.params.id;
    const data = req.body;
    const result = await academicFacultyServices.updateFacultyServices(id, data);
    sendResponse(res, {success : true, status:200,message : "Update Successfully Faculty", result})
})

export const academicFacultyControler = {
    createFacultyControler,
    getAllFacultyControler,
    getSingalFacultyControler,
    updateFacultyControler
}