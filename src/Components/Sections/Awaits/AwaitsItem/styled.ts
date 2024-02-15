import {styled} from "@mui/material/styles";
import mq from "@shared/themes/breakpoints";

export const SAwaitsItemWrap = styled("li")(() => mq({
  display: "flex",
  alignItems: "center",
  gap: ["16px", "30px"],
}))

export const SAwaitsItemImg = styled("div")(({theme: {palette}}) => mq({
  paddingRight: ["16px", "30px"],
  borderRight: `2px solid ${palette.uncategorized.divider}`,
  "& img": {
    width: ["100px", "unset"],
    height: ["100px", "unset"],
    borderRadius: "20px 0px 20px 0px"
  }
}))

export const SAwaitsItemDesc = styled("div")(() => ({

}))