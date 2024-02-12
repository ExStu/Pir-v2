import {styled} from "@mui/material/styles";
import mq from "@shared/themes/breakpoints.ts";
import Link from "@Components/UI/Link";

export const SHeroWrap = styled("section")(() => mq({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: ["32px", "32px", "60px"],
  paddingTop: ["32px", "32px", "140px"],
  paddingBottom: ["120px", "140px", "180px"],
}))

export const SHeroTitlesWrap = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "20px",
  textAlign: "center"
}))

export const SHeroBtn = styled(Link)(({theme: {palette}}) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "300px",
  padding: "20px 40px",
  backgroundColor: palette.main.background,
  color: palette.main.primary,
  transition: "background-color .15s ease-in, color .15s ease-in",

  "&:hover": {
    backgroundColor: palette.main.white,
    color: palette.main.primary
  }
}))