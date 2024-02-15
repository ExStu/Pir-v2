import {styled} from "@mui/material/styles";
import mq from "@shared/themes/breakpoints";

export const SThemesItem = styled("li")(({theme: {palette}}) => mq({
  padding: ["20px 40px", "30px 40px", "36px 50px"],
  backgroundColor: palette.main.background,
  borderRadius: ["16px", "40px", "50px"]
}))