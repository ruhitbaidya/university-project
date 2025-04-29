import z from "zod";

export const userValidationSchema = z.object({
  password: z
    .string({ invalid_type_error: "Password Mustbe String" })
    .optional(),
});
