import {styled} from "@mui/material/styles";
import mq from "@shared/themes/breakpoints";
import Typography from "@Components/UI/Typography";

export const SFooter = styled("footer")(({theme: {palette}}) => ({
  padding: "60px 0",
  backgroundColor: palette.main.primary
}))

export const SFooterWrap = styled("div")(() => mq({
  display: "flex",
  flexDirection: ["row", "column"],
  gap: "30px",
  justifyContent: "space-between"
}))

export const SFooterTop = styled("div")(() => mq({
  display: "flex",
  flexDirection: ["column", "column", "row"],
  justifyContent: "space-between",
  gap: ["32px", "32px", 0],

  "& img": {
    width: ["125px", "160px", "auto"],
    height: ["45px", "55px", "auto"]
  }
}))

export const SFooterDown = styled("div")(() => mq({
  display: "flex",
  flexDirection: ["column", "row"],
  justifyContent: "space-between",
  alignItems: "flex-end",
  gap: "36px"
}))

export const SFooterDownActions = styled("div")(() => mq({
  display: "flex",
  flexDirection: ["column", "row"],
  alignItems: "flex-end",
  gap: ["32px", "44px"]
}))

export const SFooterLogosWrap = styled("div")(() => mq({
  display: "flex",
  alignItems: "center",
  gap: ["20px", "32px", "45px"],

  "& img": {
    maxWidth: ["76px", "100%"],
    maxHeight: ["23px", "100%"]
  }
}))

export const SFooterCopyright = styled(Typography)(() => mq({
  maxWidth: ["225px", "288px", "100%"]
}))