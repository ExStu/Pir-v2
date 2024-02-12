import {styled} from "@mui/material/styles";
import mq from "@shared/themes/breakpoints.ts";

export const SNavMenuList = styled("ul")(() => mq({
  display: "flex",
  flexDirection: ["column", "row"],
  alignItems: ["flex-start", "flex-start", "center"],
  gap: ["20px", "20px", "40px"],
  margin: 0,
  padding: 0,
}))