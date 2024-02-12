import Tabs, { tabsClasses } from "@mui/material/Tabs";
import {styled} from "@mui/material/styles";
import {tabScrollButtonClasses} from "@mui/material";
export const STabs = styled(Tabs)(({ theme: { palette } }) => ({

  [`& .${tabsClasses.indicator}`]: {
    backgroundColor: palette.main.primary,
  },

  [`& .${tabScrollButtonClasses.root}`]: {
    border: `1px solid ${palette.main.primary}`,
    borderRadius: "50%",
    height: "40px",
    margin: "0 8px",
    alignSelf: "center",
    opacity: 1,

    "& svg path": {
      fill: palette.main.primary
    },

    [`&.${tabScrollButtonClasses.disabled}`]: {
      opacity: 1,
      borderColor: palette.uncategorized.border,

      "& svg path": {
        fill: palette.uncategorized.border
      }
    }
  },
}));
