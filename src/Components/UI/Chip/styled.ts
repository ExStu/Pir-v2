// @ts-nocheck
import styled from "@emotion/styled";

import { chipClasses } from "@mui/material/Chip";

import type { SChipProps } from "./index";
import type { StyledComponent } from "@emotion/styled";
import {Chip} from "@mui/material";
import mq from "@shared/themes/breakpoints.ts";

export const SChip: StyledComponent<SChipProps> = styled(Chip, {
  shouldForwardProp: (prop) => !["isActive", "isTag", "type"].includes(prop),
})(({ theme: { palette }, color, variant, isActive }) =>
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
      height: ["36px", "40px"],
      borderRadius: "9px",
      padding: "0 18px",
      backgroundColor: isActive ? palette.main.primary : "transparent",
      color: isActive ? palette.main.white : palette.main.primary,
      [`&.${chipClasses.root}`]: {
        transition: "background-color .1s ease-in, box-shadow .1s ease-in",
        "&:active": {
          backgroundColor: isActive ? palette.main.primaryLight : "transparent",
        },
      },
      "&:hover": {
        cursor: "pointer",
        backgroundColor: isActive ? palette.main.primaryLight : palette.main.primaryLight,
        color: isActive ? colors.uncategorized.white : colors.text.primary,
      },
      [`& .${chipClasses.label}`]: {
        fontSize: ["14px", "16px"],
        fontWeight: 400,
        lineHeight: "20px",
        padding: 0,
      },
      ...(variant === "outlined" && {
        [`&.${chipClasses.root}`]: {
          height: ["36px", "40px"],
          borderRadius: "100px",
          padding: "8px 16px",
          border: "none",
          backgroundColor: isActive ? colors.secondary.main : "transparent",
          color: colors.text.primary,
          [`&.${chipClasses.root}`]: {
            "&:active": {
              backgroundColor: colors.secondary.light,
            },
          },
          "&:hover": {
            cursor: "pointer",
            backgroundColor: colors.secondary.dark,
            color: colors.text.primary,
          },
          [`&.${chipClasses.disabled}`]: {
            backgroundColor: colors.grey[50],
            [`& .${chipClasses.label}`]: {
              color: colors.text.disabled,
            },
          },
        },
        [`&.${chipClasses.disabled}`]: {
          backgroundColor: colors.grey[50],
          [`& .${chipClasses.label}`]: {
            color: colors.text.disabled,
          },
        },
      }),
    }),
);
