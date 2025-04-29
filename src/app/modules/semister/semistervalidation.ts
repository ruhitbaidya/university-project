import z from "zod";
import { AcedemicCode, AcedemicName, months } from "./academicSelimsterconst";

const academicValidationSchema = z.object({
  name: z.enum([...AcedemicName] as [string, ...string[]]),
  code: z.enum([...AcedemicCode] as [string, ...string[]]),
  year: z.string(),
  startMonth: z.enum([...months] as [string, ...string[]]),
  endMonth: z.enum([...months] as [string, ...string[]]),
});

export default academicValidationSchema;
