import Tabs, { tabsClasses } from "@mui/material/Tabs";
import {styled} from "@mui/material/styles";
export const STabs = styled(Tabs)(({ theme: { palette } }) => ({
  [`& .${tabsClasses.indicator}`]: {
    backgroundColor: palette.main.primary,
  },
}));
