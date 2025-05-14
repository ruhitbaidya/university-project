export type TErrorSource = {
  path: string | number;
  message: string;
};

export type TGenericError = {
  status: number | string;
  message: string;
  errorSource: TErrorSource[];
};
