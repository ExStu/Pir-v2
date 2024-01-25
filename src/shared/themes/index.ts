import {createTheme, Theme} from "@mui/material/styles";
import colors from "./colors";
import components from "./components";
import typography from "./typography";

const holidays: Theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 1024,
      lg: 1200,
      xl: 1400,
    },
  },
  palette: {
    ...colors
  },
  typography: {
    ...typography.typography,
  },
  components: {
    ...components.components
  },

})

export default holidays;
