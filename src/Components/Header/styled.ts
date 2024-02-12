import {styled} from "@mui/material/styles";
import mq from "@shared/themes/breakpoints.ts";

export const SHeader = styled("header")(() => ({
  "& .container": {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: "28px",
    paddingBottom: "28px",
  }
}))

export const SHeaderLogoWrap = styled("div")(() => mq({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  gap: "36px"
}))

export const SHeaderBurgerMenu = styled("div")(({theme: {palette}}) => ({
  display: "flex",
  flexDirection: "column",
  gap: "32px",
  padding: "32px",
  paddingTop: "44px",
  position: "absolute",
  top: 0,
  right: 0,
  height: "120vh",
  width: "100%",
  backgroundColor: palette.main.primary,
  zIndex: 3,
  overflowY: "auto",

  "& .nav-menu": {
    flexDirection: "column",

    "& .nav-menu__link": {
      fontSize: "20px",
    }
  }
}))