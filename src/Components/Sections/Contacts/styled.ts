import {styled} from "@mui/material/styles";
import Typography from "@Components/UI/Typography";

export const SContactSection = styled("section")(() => ({
  padding: "60px 0"
}))

export const SContactTitle = styled(Typography)(() => ({
  marginBottom: "40px"
}))

export const SContactWrap = styled("div")(() => ({
  display: "grid",
  gap: "22px",
  gridTemplateColumns: "66% 34%",
}))

export const SContactBlock = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "20px",
}))

export const SContactItemWrap = styled("div")(({theme: {palette}}) => ({
  display: "flex",
  justifyContent: "space-around",
  padding: "40px",
  gap: "60px",
  borderRadius: "50px",
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