import {styled} from "@mui/material/styles";
import mq from "@shared/themes/breakpoints.ts";

export const SPartners = styled("section")(() => mq({
  padding: ["20px 0", "40px 0", "60px 0"]
}))

export const SPartnersList = styled("ul")(() => mq({
  listStyle: "none",
  margin: 0,
  padding: 0,
  display: "grid",
  gridTemplateColumns: ["repeat(2, minmax(0, 1fr))", "repeat(3, minmax(0, 1fr))", "repeat(4," +
  " minmax(0, 1fr))"],
  gap: "20px"
}))

export const SPartnersItem = styled("li")(() => mq({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  "& img": {
    maxWidth: ["155px", "unset", "unset"]
  }
}))