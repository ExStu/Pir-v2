import {styled} from "@mui/material/styles";
import mq from "@shared/themes/breakpoints";


export const SProjectsSection = styled("section")(() => ({
  padding: "30px 0"
}))
export const SProjectsList = styled("ul")(() => mq({
  display: "flex",
  flexDirection: "column",
  listStyle: "none",
  margin: 0,
  padding: 0,
}))