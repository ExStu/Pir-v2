import {styled} from "@mui/material/styles";

export const SHeroSection = styled("section")(() => ({
  paddingTop: "30px",
  paddingBottom: "60px",
}))
export const SHeroMain = styled("div")(() => ({
  overflow: "hidden",
  borderRadius: "0px 100px",
  position: "relative",
  maxHeight: "608px",

  "& img": {
    width: "100%",
  }
}))

export const SHeroMainTitleWrap = styled("div")(() => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "36px"
}))

export const SHeroLogosWrap = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  gap: "45px"
}))

export const SHeroMiddleWrap = styled("div")(() => ({
  display: "flex",
  justifyContent: "space-between",
  padding: "15px 0",
  gap: "15px"
}))

export const SHeroMiddleLeft = styled("div")(({theme: {palette}}) => ({
  padding: "86px 56px",
  borderRadius: "110px 0",
  backgroundColor: palette.main.primary
}))

export const SHeroMiddleLeftWrap = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "50px"
}))

export const SHeroBottom = styled("div")(({theme: {palette}}) => ({
  padding: "75px 60px",
  backgroundColor: palette.main.background,
  borderRadius: "0 110px"
}))