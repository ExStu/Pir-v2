// import type { TypographyVariant } from "@mui/material";
import type { TypographyProps } from "@mui/material/Typography";
import {TypographyVariant} from "@mui/material";

export interface ITypography extends Omit<TypographyProps, "variant"> {
  type?: "SUCCESS" | "WARNING" | "ERROR" | "INFO" | "DISABLED" | "SECONDARY" | "PRIMARY";
  variant?:
      TypographyVariant
      | "t1"
      | "t2"
      | "t3"
      | "t4"
      | "t5"
      | "t6"
      | "t7"
}
