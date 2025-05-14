import { ZodError, ZodIssue } from "zod";

export const zodErrorValidation = (err: ZodError) => {
  let errorSource = err.issues.map((issu: ZodIssue) => {
    return {
      path: issu?.path[issu.path.length - 1],
      message: issu?.message,
    };
  });
  return {
    status: 402,
    message: "Validation Error",
    errorSource,
  };
};
