import mq from "@shared/themes/breakpoints";
import Link from "@Components/UI/Link";
import {styled} from "@mui/material/styles";
import Typography from "@Components/UI/Typography";
import {motion} from "framer-motion";
export const SProjectItem = styled(motion.li)(({theme: {palette}}) => mq({
  position: "relative",
  display: "flex",
  flexDirection: ["column-reverse", "row"],
  alignItems: "center",
  minHeight: "280px",
  padding: ["20px 40px", "20px 32px", "20px 32px"],
  gap: ["20px", 0],
  borderBottom: `2px solid ${palette.main.primary}`,

  "@media(max-width:1024px)": {
    padding: "20px 0"
  }
}))

export const SProjectItemTitle = styled(motion.h3)(({theme: {palette, typography}}) => mq({
  margin: 0,
  fontSize: typography.h3.fontSize,
  lineHeight: typography.h3.lineHeight,
  color: palette.main.primary,
  textTransform: "uppercase",
  textAlign: ["center", "left"],
  fontWeight: ["800", typography.h3.fontWeight]
}))

export const SProjectItemDate = styled(Typography)(() => mq({
  textAlign: ["center", "left"]
}))

export const SProjectItemWrap = styled("div")(() => mq({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: ["center", "flex-start"],
  textAlign: "left",

  "@media(max-width:1024px)": {
    flexDirection: "column",
    gap: "20px"
  }
}))

export const STextWrap = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "20px",
}))

export const SProjectItemImg = styled(motion.img)(() => mq({
  position: "absolute",
  height: ["200px", "200px", "260px"],
  width: ["230px", "250px", "320px"],
  borderRadius: "12px",
  zIndex: 1,
  pointerEvents: "none",
  objectFit: "cover",

  "@media(max-width:1024px)": {
    position: "static",
    height: "200px",
    width: "320px",
  }
}))

export const SProjectItemLinkBtn = styled(Link)(({theme: {palette}}) => mq({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: ["200px", "200px", "250px"],
  padding: "20px 40px",
  gap: "10px",
  backgroundColor: palette.main.background,
  color: palette.main.primary,
  transition: "background-color .2s ease-in, color .15s ease-in",
  cursor: "pointer",
  pointerEvents: "auto",

  "& svg path": {
    transition: "stroke .2s ease-in"
  },

  "&:hover": {
    backgroundColor: palette.main.primary,
    color: palette.main.white,

    "& svg path": {
      stroke: palette.main.white
    }
  },

  // "&::before": {
  //   content: "''",
  //   position: "absolute",
  //   height: "100%",
  //   width: "100%",
  //   inset: 0,
  // }
}))