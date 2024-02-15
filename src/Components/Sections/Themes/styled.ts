import {styled} from "@mui/material/styles";
import mq from "@shared/themes/breakpoints";

export const SThemes = styled("section")(() => mq({
  padding: ["20px 0", "40px 0", "60px 0"]
}))

export const SThemesList = styled("ul")(() => ({
  listStyle: "none",
  marginTop: "30px",
  padding: 0,
  display: "flex",
  flexDirection: "column",
  gap: "10px",
}))