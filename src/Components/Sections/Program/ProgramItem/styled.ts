import {styled} from "@mui/material/styles";

export const SProgramItem = styled("li")(({theme: {palette}}) => ({
  display: "flex",
  alignItems: "center",
  padding: "32px 0",
  borderBottom: `1px solid ${palette.main.primaryLight}`
}))

export const SProgramItemTime = styled("div")(() => ({
  width: "187px",
  flexShrink: 0,
  textAlign: "left"
}))