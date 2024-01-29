import {styled} from "@mui/material/styles";

export const SModalCloseBtn = styled("button")(({theme: {palette}}) => ({

  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: 0,
  padding: 0,
  border: "none",
  borderRadius: "50%",
  width: 40,
  height: 40,
  backgroundColor: "transparent",
  transition: "background-color .15s ease-in",
  cursor: "pointer",
  zIndex: 10,

  "& svg": {
    width: "17.48px",
    height: "17.48px",
  },

  "&:hover": {
    backgroundColor: "transparent",
  },

  "& svg path": {
    transition: "stroke .15s ease-in"
  },

  "&:hover svg path": {
    stroke: palette.main.primary
  }
}));