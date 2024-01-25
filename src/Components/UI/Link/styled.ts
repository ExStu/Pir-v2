import { styled } from "@mui/material/styles";

import Link from "@mui/material/Link";

import {LinkProps} from "@mui/material";

import type { StyledComponent } from "@emotion/styled";
import mq from "@shared/themes/breakpoints.ts";

export const SLink: StyledComponent<LinkProps> = styled(Link)(
    ({ theme: {palette, typography }, variant, color }) =>
        mq({
          fontFeatureSettings: "'pnum' on, 'lnum' on",
          color: color || palette.main.primary,

          ...(variant === "t2"
              ? {
                ...typography.t2,
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
        }),
);
