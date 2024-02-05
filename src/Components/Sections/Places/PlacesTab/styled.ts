import {styled} from "@mui/material/styles";

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

interface ISPlacesItemTitle {
  hasLink?: boolean
}

export const SPlacesItemTitle = styled("div", {
  shouldForwardProp: props => props !== "hasLink"
})((props: ISPlacesItemTitle) => ({
  padding: "0 30px",
  position: "absolute",
  left: 0,
  bottom: props.hasLink ? "120px" : "18px"
}))

export const SPlacesItemRating = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  gap: "4px",
  position: "absolute",
  top: "30px",
  right: "30px",
}))

export const SPlacesItemLinkWrap = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  paddingBottom: "30px",

  "& .places__link": {
    gap: "10px",

    "& svg": {
      transition: "transform .15s ease-in",
    },

    "&:hover svg": {
      transform: "rotate(-45deg)"
    }
  }
}))