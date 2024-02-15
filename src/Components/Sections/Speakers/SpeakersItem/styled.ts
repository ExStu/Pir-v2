import {styled} from "@mui/material/styles";
import mq from "@shared/themes/breakpoints";
import Typography from "@Components/UI/Typography";

export const SSpeakersItem = styled("div")(() => mq({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  gap: ["12px", "24px"]
}))

export const SSpeakersItemImg = styled("img")(() => mq({
  width: ["131px", "25vw", "251px"],
  height: ["131px", "unset", "251px"],
  borderRadius: "50%",
}))

export const SSpeakersPost = styled(Typography)(() => mq({
  maxWidth: ["185px", "unset"]
}))