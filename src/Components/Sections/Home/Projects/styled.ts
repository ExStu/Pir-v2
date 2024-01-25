import {styled} from "@mui/material/styles";


export const SProjectsSection = styled("section")(() => ({
  padding: "60px 0"
}))
export const SProjectsList = styled("ul")(() => ({
  display: "grid",
  gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
  listStyle: "none",
  margin: 0,
  padding: 0,
  gap: "20px",
}))