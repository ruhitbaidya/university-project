import { Types } from "mongoose";

export type Guardian = {
  fatherName: string;
  fatherOccupation: string;
  fatherContact: string;
  motherName: string;
  motherOccupation: string;
  motherContact: string;
};
export type LocalGuadian = {
  name: string;
  contact: string;
};
export type userName = {
  firstName: string;
  middleName: string;
  lastName: string;
};
export type Student = {
  id: string;
  name: userName;
  user: Types.ObjectId;
  gender: "male" | "female";
  dateOfBirth: string;
  email: string;
  contactNo: string;
  emergancyContact: string;
  bloodGroup: "A+" | "A-" | "B+" | "B-" | "AB+" | "AB-" | "O+" | "O-";
  presentAddress: string;
  premanentAddress: string;
  guardian: Guardian;
  localGuardian: LocalGuadian;
  academicSemister: Types.ObjectId;
  profileImage: string;
  academicDepertment: Types.ObjectId;
};
