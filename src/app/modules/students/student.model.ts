import { model, Schema } from "mongoose";
import {
  Guardian,
  LocalGuadian,
  Student,
  userName,
} from "./students.interface";

const GuardianSchema = new Schema<Guardian>({
  fatherName: { type: String, required: true },
  fatherOccupation: { type: String, required: true },
  fatherContact: { type: String, required: true },
  motherName: { type: String, required: true },
  motherOccupation: { type: String, required: true },
  motherContact: { type: String, required: true },
});

const LocalGuardianSchema = new Schema<LocalGuadian>({
  name: { type: String, required: true },
  contact: { type: String, required: true },
});

const UserSchema = new Schema<userName>({
  firstName: { type: String, required: true },
  middleName: { type: String, required: true },
  lastName: { type: String, required: true },
});

const StudentSchema = new Schema<Student>(
  {
    id: { type: String, required: true },
    name: UserSchema,
    user: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "user",
    },
    gender: {
      type: String,
      enum: ["male", "female"],
      required: true,
    },
    dateOfBirth: { type: String, required: true },
    email: { type: String, required: true },
    contactNo: { type: String, required: true },
    emergancyContact: { type: String, required: true },
    bloodGroup: {
      type: String,
      enum: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
      required: true,
    },
    presentAddress: { type: String, required: true },
    premanentAddress: { type: String, required: true },
    guardian: GuardianSchema,
    localGuardian: LocalGuardianSchema,
    profileImage: { type: String, required: true },
    academicSemister: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "academicSemister",
    },
    academicDepertment: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "depertment",
    },
  },
  { timestamps: true }
);

export const studentModel = model<Student>("student", StudentSchema);
