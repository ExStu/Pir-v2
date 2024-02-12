import {styled} from "@mui/material/styles";
import Typography from "@Components/UI/Typography";
import mq from "@shared/themes/breakpoints.ts";

export const SContactSection = styled("section")(() => mq({
  padding: ["20px 0", "40px 0", "60px 0"]
}))

export const SContactTitle = styled(Typography)(() => mq({
  marginBottom: ["20px", "40px"]
}))

export const SContactWrap = styled("div")(() => mq({
  display: "grid",
  gap: "22px",
  gridTemplateColumns: ["auto", "auto", "66% 34%"],
}))

export const SContactBlock = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "20px",
}))

export const SContactItemWrap = styled("div")(({theme: {palette}}) => mq({
  display: "flex",
  flexDirection: ["column", "row", "row"],
  justifyContent: ["space-between", "space-between", "space-around"],
  padding: ["30px", "40px"],
  gap: ["24px", "60px"],
  borderRadius: ["24px", "50px"],
  backgroundColor: palette.main.background
}))

export const SContactItem = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "12px"
}))

export const SContactLinkWrap = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  gap: "20px"
}))