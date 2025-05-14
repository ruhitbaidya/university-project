import { ZodError, ZodIssue } from "zod";
import { TGenericError } from "../interface/errorsType";

export const zodErrorValidation = (err: ZodError): TGenericError => {
  let errorSource = err.issues.map((issu: ZodIssue) => {
    return {
      path: issu?.path[issu?.path?.length - 1],
      message: issu?.message,
    };
  });
  return {
    status: 402,
    message: "Validation Error",
    errorSource,
  };
};
