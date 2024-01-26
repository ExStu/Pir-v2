import {styled} from "@mui/material/styles";
import Link from "@Components/UI/Link";

export const SPlacesItem = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "36px"
}))

export const SPlacesItemImg = styled("img")(() => ({
  width: "390px",
  height: "418px",
  borderRadius: "80px 0 80px 0",
  filter: "brightness(0.6)"
}))

export const SPlacesItemTitle = styled("div")(() => ({
  padding: "0 30px",
  position: "absolute",
  left: 0,
  bottom: "120px"
}))

export const SPlacesItemRating = styled("div")(() => ({
  position: "absolute",
  top: "30px",
  right: "30px",
}))

export const SPlacesItemLink = styled(Link)(() => ({
  paddingLeft: "30px",
  paddingBottom: "30px"
}))