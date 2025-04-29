export type TMonths =
  | "January"
  | "February"
  | "March"
  | "April"
  | "May"
  | "June"
  | "July"
  | "August"
  | "September"
  | "October"
  | "November"
  | "December";
export type TAcedemicName = "Autum" | "Summar" | "Fall";
export type TAcedemicCode = "01" | "02" | "03";
export type TSemister = {
  name: TAcedemicName;
  code: TAcedemicCode;
  year: String;
  startMonth: TMonths;
  endMonth: TMonths;
};
