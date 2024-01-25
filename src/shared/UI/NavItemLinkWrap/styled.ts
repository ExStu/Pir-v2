import {styled} from "@mui/material/styles";

export const SNavItemLinkWrap = styled("div")(({theme: {palette}, color}) => ({
  position: "relative",
  padding: "4px 0",

  "&::before, &::after": {
    content: "''",
    position: "absolute",
    width: "100%",
    height: "1px",
    background: color || palette.main.primaryLight,
    transform: "scaleX(0)",
    transition: "all .5s ease"
  },

  "&::before": {
    top: 0,
    left: 0,
    transformOrigin: "left",
  },

  "&::after": {
    bottom: 0,
    left: 0,
    transformOrigin: "right",
  },

  "&:hover::before, &:hover::after": {
    transform: "scaleX(1)"
  },
}))