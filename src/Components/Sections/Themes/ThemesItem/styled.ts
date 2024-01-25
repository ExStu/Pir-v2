import {styled} from "@mui/material/styles";

export const SThemesItem = styled("li")(({theme: {palette}}) => ({
  padding: "36px 50px",
  backgroundColor: palette.main.background,
  borderRadius: "50px"
}))