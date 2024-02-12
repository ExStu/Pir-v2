import {styled} from "@mui/material/styles";
import mq from "@shared/themes/breakpoints.ts";

export const SHeroSection = styled("section")(() => ({
  paddingTop: "30px",
  paddingBottom: "30px",
}))
export const SHeroMain = styled("div")(() => mq({
  overflow: "hidden",
  borderRadius: ["0px 50px", "0px 50px", "0px 100px"],
  position: "relative",
  maxHeight: "608px",
  fontSize: 0
}))

export const SHeroMainImg = styled("img")(() => mq({
  width: "100%",
  height: ["310px", "100%"],
  fontSize: 0,
  filter: "brightness(0.8)",
}))

export const SHeroMainTitleWrap = styled("div")(() => mq({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: ["16px", "16px", "36px"]
}))

export const SHeroLogosWrap = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  gap: "45px",
  zIndex: 1
}))

export const SHeroMiddleWrap = styled("div")(() => mq({
  display: "flex",
  flexDirection: ["column", "row", "row"],
  justifyContent: "space-between",
  padding: "15px 0",
  gap: "15px",

  "& img": {
    display: ["none", "block"],
    width: ["100%", "50%", "60%"]
  }
}))

export const SHeroMiddleLeft = styled("div")(({theme: {palette}}) => mq({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  padding: ["60px 30px", "30px 25px", "86px 56px"],
  borderRadius: ["40px 0", "40px 0", "110px 0"],
  backgroundColor: palette.main.primary
}))

export const SHeroMiddleLeftWrap = styled("div")(() => mq({
  display: "flex",
  flexDirection: "column",
  gap: ["30px", "30px", "50px"]
}))

export const SHeroBottom = styled("div")(({theme: {palette}}) => mq({
  padding: ["40px 16px", "40px 40px", "75px 60px"],
  backgroundColor: palette.main.background,
  borderRadius: ["0 40px", "0 40px", "0 110px"]
}))