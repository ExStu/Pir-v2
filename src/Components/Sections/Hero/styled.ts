import {styled} from "@mui/material/styles";
import Button from "@Components/UI/Button";
import mq from "@shared/themes/breakpoints.ts";

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

export const SHeroBtn = styled(Button)(() => ({
  width: "300px",
}))