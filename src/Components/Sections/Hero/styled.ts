import {styled} from "@mui/material/styles";
import Button from "@Components/UI/Button";

export const SHeroWrap = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "60px",
  paddingTop: "140px"
}))

export const SHeroTitlesWrap = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "20px",
}))

export const SHeroBtn = styled(Button)(() => ({
  width: "300px"
}))