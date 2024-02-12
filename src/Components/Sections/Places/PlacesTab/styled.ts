import {styled} from "@mui/material/styles";
import mq from "@shared/themes/breakpoints.ts";

export const SPlacesItem = styled("div")(() => mq({
  display: "flex",
  flexDirection: "column",
  gap: ["24px", "24px", "36px"]
}))

export const SPlacesItemImg = styled("img")(() => mq({
  width: ["100%", "100%", "365px"],
  height: ["326px", "329px", "400px"],
  borderRadius: ["35px 0 35px 0", "70px 0 70px 0", "80px 0 80px 0"],
  filter: ["brightness(0.8)", "brightness(0.8)", "brightness(0.6)"],

  "@media (max-width: 1024px)": {
    width: "100%",
    height: "370px"
  },

  "@media (max-width: 768px)": {
    width: "45vw",
    height: "62vh"
  },

  "@media (max-width: 640px)": {
    width: "100%",
    height: "260px"
  },

  "@media (max-width: 480px)": {
    width: "100%",
    height: "200px"
  }
}))

interface ISPlacesItemTitle {
  hasLink?: boolean
}

export const SPlacesItemTitle = styled("div", {
  shouldForwardProp: props => props !== "hasLink"
})((props: ISPlacesItemTitle) => mq({
  padding: [0, 0, "0 30px"],
  position: ["relative", "relative", "absolute"],
  left: ["unset", "unset", 0],
  bottom: ["unset", "unset", props.hasLink ? "120px" : "18px"],

  "& .places-item__title": {
    maxWidth: "320px"
  }
}))

export const SPlacesItemRating = styled("div")(() => mq({
  display: "flex",
  alignItems: "center",
  gap: ["2px", "4px"],
  position: "absolute",
  top: ["14px", "30px"],
  right: ["14px", "30px", "50px"],

  "& svg": {
    width: ["15px", "unset"],
    height: ["14px", "unset"],
  }
}))

export const SPlacesItemLinkWrap = styled("div")(() => mq({
  display: "flex",
  alignItems: "center",
  paddingBottom: [0, "30px"],

  "& .places__link": {
    gap: "10px",

    "& svg": {
      transition: "transform .15s ease-in",
      transform: ["rotate(-45deg)", "rotate(-45deg)", "rotate(0)"],
    },

    "&:hover svg": {
      transform: "rotate(-45deg)"
    }
  }
}))