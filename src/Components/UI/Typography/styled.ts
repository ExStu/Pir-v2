import { styled } from "@mui/material/styles";

import Typography from "@mui/material/Typography";

import type { ITypography } from "./types.ts";
import type { StyledComponent } from "@emotion/styled";
import mq from "@shared/themes/breakpoints.ts";


// @ts-expect-error STypography problem
export const STypography: StyledComponent<ITypography> = styled(Typography)(({ theme: { typography, palette }, color, variant = "body1" }) =>
    mq({
      color: color || palette.main.primary,
      fontSize: ["14px", "16px"],
      lineHeight: ["16px", "20px"],
      fontFeatureSettings: "'pnum' on, 'lnum' on",
      ...(variant === "h1"
          ? {
            ...typography.h1,
          }
          : {}),
      ...(variant === "h2"
          ? {
            ...typography.h2,
          }
          : {}),
      ...(variant === "h3"
          ? {
            ...typography.h3,
          }
          : {}),
      ...(variant === "h4"
          ? {
            ...typography.h4,
          }
          : {}),
      ...(variant === "h5"
          ? {
            ...typography.h5,
          }
          : {}),
      ...(variant === "h6"
          ? {
            ...typography.h6,
          }
          : {}),
      ...(variant === "t1"
          ? {
            ...typography.t1,
          }
          : {}),
      ...(variant === "t2"
          ? {
            ...typography.t2,
          }
          : {}),

      ...(variant === "t3"
          ? {
            ...typography.t3,
          }
          : {}),
      ...(variant === "t4"
          ? {
            ...typography.t4,
          }
          : {}),
      ...(variant === "t5"
          ? {
            ...typography.t5,
          }
          : {}),
      ...(variant === "t6"
          ? {
            ...typography.t6,
          }
          : {}),
      ...(variant === "t7"
          ? {
            ...typography.t7,
          }
          : {}),
    }),
);
