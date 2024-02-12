import {styled} from "@mui/material/styles";
import mq from "@shared/themes/breakpoints.ts";

export const SPast = styled("section")(() => mq({
  paddingTop: ["20px", "40px", "60px"],
  paddingBottom: "105px",
  paddingRight: ["16px", 0],
  paddingLeft: ["16px", 0],
}))

export const SPastImg = styled("img")(() => mq({
  width: "100%",
  height: ["205px", "340px"],
  borderRadius: ["16px", "20px"],
  objectFit: "cover"
}))