import {styled} from "@mui/material/styles";
import mq from "@shared/themes/breakpoints";

export const SHeroImgWrap = styled("div")(() => ({
  position: "relative",
  zIndex: "-1",
}))

export const SHeroImg = styled("img")(() => mq({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: ["480px", "510px", "705px"],
  borderRadius: ["0", "0 0 80px 80px", "0 0 100px 100px"],
  background: "linear-gradient(0deg, rgba(0, 0, 0, 0.2) 100%, rgba(0, 0, 0, 0.4) 0%)",
  filter: "brightness(0.6)",
  objectFit: ["cover", "cover", "unset"]
}))