import {styled} from "@mui/material/styles";
import mq from "@shared/themes/breakpoints";

export const SAwaits = styled("section")(() => mq({
  padding: ["20px 0", "40px 0", "60px 0"]
}))

export const SAwaitsList = styled("ul")(() => mq({
  listStyle: "none",
  margin: "60px 0 30px",
  padding: 0,
  display: "flex",
  flexDirection: "column",
  gap: ["16px", "30px"],
}))