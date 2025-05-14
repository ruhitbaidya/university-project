import { TGenericError } from "../interface/errorsType";

export const duplicateErrorHandel = (err: any): TGenericError => {
  console.log(err);
  const errors = err?.message?.match(/"([^"]+)"/)?.[1];
  const errorSource = [
    {
      path: "",
      message: `${errors} is already exist`,
    },
  ];
  return {
    status: 400,
    message: "Duplicate Error",
    errorSource,
  };
};
