import { TAcademicFaculty } from "./academicFacultyInterface";
import { academicFacultyModel } from "./academicFacultymodel";


const createFacultyServices = async(data:TAcademicFaculty)=>{
    const result = await academicFacultyModel.create(data);
    return result
}

const getAllFaceltyServices = async()=>{
    const result = await academicFacultyModel.find();
    return result
}

const getSingalFacultyServices = async(id:string)=>{
    const result = await academicFacultyModel.findById(id);
    return result
}

const updateFacultyServices = async(id:string, name:string)=>{
    const result = await academicFacultyModel.findByIdAndUpdate(id, {$set:{name : name}});
    return result
};

export const academicFacultyServices = {
    createFacultyServices,
    getAllFaceltyServices,
    getSingalFacultyServices,
    updateFacultyServices
}