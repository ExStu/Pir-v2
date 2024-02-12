import Tab, { tabClasses } from "@mui/material/Tab";
import {styled} from "@mui/material/styles";
import mq from "@shared/themes/breakpoints.ts";
export const STab = styled(Tab)(({ theme: { palette, typography } }) => mq({
  padding: ["0 12px", "0 12px", "0 15px"],
  fontSize: typography.t2.fontSize,
  lineHeight: typography.t2.lineHeight,
  minWidth: "fit-content",
  color: palette.main.primaryLight,
  fontFeatureSettings: "'pnum' on, 'lnum' on",
  transition: "color .15s ease-in",
  textTransform: "lowercase",
  "&:hover": {
    color: palette.main.primary,
  },
  [`&.${tabClasses.disabled}`]: {
    color: palette.text.disabled,
  },
  [`&.${tabClasses.selected}`]: {
    color: palette.main.primary,
    [`&.${tabClasses.disabled}`]: {
      color: palette.text.disabled,
    },
  },
}));
