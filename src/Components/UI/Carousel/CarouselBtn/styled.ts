import {styled} from "@mui/material/styles";
export const SCarouselBtn = styled("button")(({theme: {palette}}) => ({
  padding: 0,
  border: "none",
  backgroundColor: "transparent",
  position: "absolute",
  top: "115%",
  zIndex: 2,
  transform: "translateY(-50%)",
  cursor: "pointer",
  outline: "none",

  "&:disabled svg": {
    opacity: "0.3"
  },

  "&[disabled]:hover svg rect": {
    fill: "transparent"
  },

  "&[disabled]:hover svg path": {
    stroke: palette.main.primary
  },

  "& svg rect": {
    transition: "fill .15s ease-in",
    fill: "transparent"
  },

  "& svg path": {
    transition: "stroke .15s ease-in"
  },

  "&:hover svg rect": {
    fill: palette.main.primary
  },

  "&:hover svg path": {
    stroke: palette.main.white
  },
}))