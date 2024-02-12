import {styled} from "@mui/material/styles";
import mq from "@shared/themes/breakpoints.ts";

export const SPlaces = styled("section")(() => mq({
  paddingTop: ["20px", "40px", "60px"],
  paddingBottom: ["80px", "105px"]
}))

export const SPlacesChipWrap = styled("div")(() => mq({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: ["25px", "60px"]
}))