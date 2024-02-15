// @ts-nocheck

import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import mq from "@shared/themes/breakpoints";

const pulseAnimate = keyframes`
    100% {
        opacity: 0;
        transform: scale(1.75);
    }
`;

export const SPlay = styled("div")(({ theme: { palette } }) => mq({

  position: "relative",
  backgroundColor: [palette.main.primary, palette.main.primary, palette.main.white],
  width: "28px",
  height: "28px",
  borderRadius: "50%",
  zIndex: 1,

  "& svg": {
    width: "18px",
    height: "16px",
    position: "absolute",
    top: "50%",
    left: "55%",
    transform: "translate(-50%, -50%)",
    zIndex: 2,

    "& path": {
      fill: [palette.main.white, palette.main.white, palette.main.primary]
    }
  },

  "&:before, &:after": {
    content: "''",
    position: "absolute",
    height: "100%",
    width: "100%",
    backgroundColor: "inherit",
    borderRadius: "50%",
    zIndex: "1",
    opacity: "0.6"
  },

  "&:before": {
    animation: `${pulseAnimate} 1.2s ease-out infinite`
  },

  "&:after": {
    animation: `${pulseAnimate} 1.2s .45s ease-out infinite`
  }
}));