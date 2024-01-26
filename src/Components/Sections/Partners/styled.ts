import {styled} from "@mui/material/styles";

export const SPartners = styled("section")(() => ({
  padding: "60px 0"
}))

export const SPartnersList = styled("ul")(() => ({
  listStyle: "none",
  margin: 0,
  padding: 0,
  display: "grid",
  gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
  gap: "20px"
}))

export const SPartnersItem = styled("li")(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}))