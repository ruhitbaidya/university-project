import z from "zod";

export const depertmentValidationSchema = z.object({
  name: z.string(),
  academicFaculty: z.string(),
});
