import {styled} from "@mui/material/styles";
import {Box, boxClasses} from "@mui/material";
import mq from "@shared/themes/breakpoints.ts";
export const SInvitesItem = styled("div")(({theme: {palette}}) => mq({
  display: "flex",
  flexDirection: "column",
  position: "relative",
  alignItems: "center",
  borderRadius: "30px 0 30px 0",
  transition: "background-color .3s ease-in",
  paddingBottom: [0, 0, "22px"],
  overflow: "hidden",
  alignSelf: "center",

  "&:hover": {
    backgroundColor: ["transparent", "transparent", palette.uncategorized.background]
  },

  [`&:hover .${boxClasses.root}`]: {
    transform: "translateY(100%)",
    opacity: 0,
  },

  "&:hover img": {
    filter: ["brightness(1)", "brightness(1)", "brightness(0.4)"]
  },

  "&:hover .invites__img": {
    transform: ["scale(1)", "scale(1)", "scale(1.1)"]
  },

  "&:hover .invites__play-btn": {
      opacity: 1
  }
}))

export const SInvitesItemTop = styled("div")(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "8px",
  width: "100%",

  "& img": {
    paddingLeft: "23.5px",
    width: "98px",
    height: "36px"
  }
}))

export const SInvitesItemDecor = styled("div")(({theme: {palette}}) => mq({
  width: ["100px", "130px"],
  height: ["100px", "130px"],
  backgroundColor: palette.main.primary,
  borderRadius: ["30px 0 30px 0", "40px 0 40px 0"],
}))

export const SInvitesItemImgWrap = styled("div")(() => mq({
  display: "block",
  overflow: "hidden",
  marginBottom: "12px",

  borderRadius: "0 55px 0 55px",

  "& img": {
    transition: "filter .3s ease-in-out, transform .3s ease-in-out",
    width: ["206px", "265px", "339px"],
    height: ["198px", "252px", "327px"],
  }
}))

export const SInvitesItemCover = styled(Box)(({theme: {palette}}) => mq({
  display: "flex",
  flexDirection: "column",
  padding: "20px 40px",
  width: "79.5%",
  minHeight: ["78px", "83px", "78px"],
  position: "absolute",
  bottom: 0,
  left: 0,
  gap: "4px",
  backgroundColor: palette.main.background,
  borderRadius: "30px 0 30px 0",
  transition: "transform .3s ease-in-out, opacity .3s ease-in-out"
}))

export const SInvitesPlay = styled("div")(({theme: {palette}}) => mq({
  position: ["static", "static", "absolute"],
  left: "44px",
  bottom: "130px",
  width: ["50%", "70%", "76%"],
  display: "flex",
  alignItems: "center",
  gap: "20px",
  marginTop: ["24px", "24px", 0],
  paddingBottom: "15px",
  borderBottom: [`1px solid ${palette.uncategorized.border}`, `1px solid ${palette.uncategorized.border}`, `1px solid ${palette.uncategorized.borderWhite}`],
  opacity: [1, 1, 0],
  transition: "opacity .3s ease-in-out",
  cursor: "pointer",

  "@media(min-width: 1024px)": {
    position: "absolute",
    opacity: 0
  }
}))
