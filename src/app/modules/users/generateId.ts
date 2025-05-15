import { TSemister } from "../semister/semister.interface";
import { userModel } from "./user.model";

const lastStudent = async () => {
  const studentList = await userModel
    .findOne({ role: "student" }, { id: 1, _id: 0 })
    .sort({ createdAt: -1 })
    .lean();
  return studentList?.id;
};
export const generateId = async (semister: TSemister) => {
  let currentId = (0).toString();
  const currentUser = await lastStudent();
  const lastCurrentUserYear = currentUser?.substring(0, 4);
  const lastCurrentCode = currentUser?.substring(4, 6);
  console.log(
    semister.code,
    lastCurrentCode,
    semister.year,
    lastCurrentUserYear
  );
  if (
    currentUser &&
    semister.code === lastCurrentCode &&
    semister.year === lastCurrentUserYear
  ) {
    currentId = currentUser?.substring(6);
  }
  const insertId = (Number(currentId) + 1).toString().padStart(4, "0");
  const ids = `${semister.year}${semister.code}${insertId}`;
  return ids;
};

const findLastFacultyId = async () => {
  const lastFaculty = await userModel
    .findOne(
      {
        role: "faculty",
      },
      {
        id: 1,
        _id: 0,
      }
    )
    .sort({
      createdAt: -1,
    })
    .lean();

  return lastFaculty?.id ? lastFaculty.id.substring(2) : undefined;
};
export const generateFacultyId = async () => {
  let currentId = (0).toString();
  const lastFacultyId = await findLastFacultyId();

  if (lastFacultyId) {
    currentId = lastFacultyId.substring(2);
  }

  let incrementId = (Number(currentId) + 1).toString().padStart(4, "0");

  incrementId = `F-${incrementId}`;

  return incrementId;
};
