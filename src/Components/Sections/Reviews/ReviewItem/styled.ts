import {styled} from "@mui/material/styles";
import mq from "@shared/themes/breakpoints.ts";

export const SReviewItem = styled("article")(({theme: {palette}}) => mq({
  display: "flex",
  flexDirection: "column",
  padding: "32px",
  minHeight: ["321px", "347px"],
  width: ["auto", "41vw"],
  borderRadius: "20px",
  backgroundColor: palette.main.background
}))

export const SReviewItemPost = styled("div")(() => mq({
  display: "flex",
  flexDirection: ["column", "row"],
  alignItems: ["flex-start", "center"],
  marginBottom: ["16px", "24px"],
  marginTop: ["8px", "4px"],
  gap: ["4px", 0]
}))