import {styled} from "@mui/material/styles";
import mq from "@shared/themes/breakpoints.ts";


export const SProjectsSection = styled("section")(() => ({
  padding: "60px 0"
}))
export const SProjectsList = styled("ul")(() => mq({
  display: "grid",
  gridTemplateColumns: ["repeat(1, minmax(0, 1fr))", "repeat(1, minmax(0, 1fr))", "repeat(3, minmax(0, 1fr))"],
  listStyle: "none",
  margin: 0,
  padding: 0,
  gap: "20px",
}))