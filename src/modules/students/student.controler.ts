import { Request, Response } from "express";
import { studentServices } from "./student.services";

const studentCreateControler = async (req: Request, res: Response) => {
  const { student } = req.body;
  const result = await studentServices.studentCreateServices(student);
  res.status(200).json({
    success: true,
    message: "Student Create Successfull",
    result,
  });
};

export const studentControler = {
  studentCreateControler,
};
