import {chipClasses, ChipProps} from "@mui/material/Chip";

import type { StyledComponent } from "@emotion/styled";
import {Chip} from "@mui/material";
import mq from "@shared/themes/breakpoints.ts";
import {styled} from "@mui/material/styles";

export const SChip: StyledComponent<ChipProps> = styled(Chip, {
  shouldForwardProp: props => props !== "active"
})(({ theme: { palette }, variant, active }) =>
    mq({
      [`&.${chipClasses.clickable}`]: {
        boxShadow: "none",
      },

      [`& .${chipClasses.icon}`]: {
        margin: 0,
      },
      [`&.${chipClasses.disabled}`]: {
        backgroundColor: palette.uncategorized.divider,
        [`& .${chipClasses.label}`]: {
          color: palette.uncategorized.divider,
        },
      },
      // height: ["36px", "40px"],
      height: "auto",
      borderRadius: ["4px", "9px"],
      padding: ["2px 18px", "0 18px"],
      backgroundColor: active ? palette.main.primary : "transparent",
      color: active ? palette.main.white : palette.main.primary,
      [`&.${chipClasses.root}`]: {
        transition: "background-color .1s ease-in, box-shadow .1s ease-in, color .1s ease-in",
        "&:active": {
          backgroundColor: active ? palette.main.primary : palette.main.primaryLight,
          color: palette.main.white
        },
      },
      "&:hover": {
        cursor: "pointer",
        backgroundColor: active ? palette.main.primary : palette.main.primaryLight,
        color: palette.main.white,
      },
      [`& .${chipClasses.label}`]: {
        fontSize: ["14px", "32px"],
        fontWeight: 400,
        lineHeight: "150%",
        padding: 0,
      },
      ...(variant === "outlined" && {
        [`&.${chipClasses.root}`]: {
          height: ["36px", "40px"],
          borderRadius: "100px",
          padding: "8px 16px",
          border: "none",
          backgroundColor: active ? palette.main.primary : "transparent",
          color: palette.main.primaryLight,
          [`&.${chipClasses.root}`]: {
            "&:active": {
              backgroundColor: palette.main.primaryLight,
            },
          },
          "&:hover": {
            cursor: "pointer",
            backgroundColor: palette.main.primaryLight,
            color: palette.main.primary,
          },
          [`&.${chipClasses.disabled}`]: {
            backgroundColor: palette.uncategorized.divider,
            [`& .${chipClasses.label}`]: {
              color: palette.uncategorized.divider,
            },
          },
        },
        [`&.${chipClasses.disabled}`]: {
          backgroundColor: palette.uncategorized.divider,
          [`& .${chipClasses.label}`]: {
            color: palette.uncategorized.divider,
          },
        },
      }),
    }),
);
