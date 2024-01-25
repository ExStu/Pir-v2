import type { IconButtonProps } from "@mui/material/IconButton";
import {IconButton, iconButtonClasses, keyframes} from "@mui/material";

import type { StyledComponent } from "@emotion/styled";
import {styled} from "@mui/material/styles";

const bounce = keyframes`
    from, 20%, 53%, 80%, to {
        transform: translate3d(0,0,0);
    }

    40%, 43% {
        transform: translate3d(0, -50%, 0);
    }

    70% {
        transform: translate3d(0, -20%, 0);
    }

    90% {
        transform: translate3d(0,-6%,0);
    }
`
export const SIconButton: StyledComponent<IconButtonProps> = styled(IconButton)(
    ({ theme: { palette } }) => ({
      [`&.${iconButtonClasses.root}`]: {
        borderRadius: "50%",
        height: "48px",
        border: `1px solid ${palette.main.white}`,

        "&:hover svg": {
          animation: `${bounce} 1s ease infinite`
        }
      },

      [`&.${iconButtonClasses.disabled}`]: {
        backgroundColor: palette.grey[50],
        border: "none",
        color: palette.text.disabled,
        svg: {
          path: {
            fill: palette.text.disabled,
          },
        },
      },
    }),
);