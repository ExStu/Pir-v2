import { styled } from "@mui/material/styles";
import {Button, buttonClasses} from "@mui/material";

export const SButton = styled(Button)(({theme: {palette}}) => ({

  borderRadius: 0,
  width: "100%",
  textTransform: "none",

  [`&.${buttonClasses.contained}`]: {
    backgroundColor: palette.main.primary,
    color: palette.main.background,
    "&:hover, &:focus-visible": {
      backgroundColor: palette.main.white,
      color: palette.main.primary,
    },
    "&:active": {
      backgroundColor: palette.main.background,
    },
  },

  [`&.${buttonClasses.outlined}`]: {
    border: "none",
    backgroundColor: palette.main.whiteLight,
    color: palette.main.primary,
    "&:hover, &:focus-visible": {
      backgroundColor: palette.main.background,
    },
  },

  [`&.${buttonClasses.text}`]: {
    color: palette.main.primary,
    // "&:hover, &:focus-visible": {
    //   color: palette.primary.dark,
    //   backgroundColor: palette.secondary.main,
    // },
    // "&:active": {
    //   color: palette.primary.light,
    //   backgroundColor: palette.secondary.light,
    // },
  },
}))