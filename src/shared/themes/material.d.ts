import colors from "./colors";
import {CSSProperties} from "react";

type ColorTypes = typeof colors

interface IColors extends ColorTypes {}

declare module '@mui/material/styles' {
  interface PaletteOptions extends IColors {}
  interface TypographyVariants {
    t1: CSSProperties;
    t2: CSSProperties;
    t3: CSSProperties;
    t4: CSSProperties;
    t5: CSSProperties;
    t6: CSSProperties;
    t7: CSSProperties;
  }

  interface TypographyVariantsOptions {
    t1?: CSSProperties;
    t2?: CSSProperties;
    t3?: CSSProperties;
    t4?: CSSProperties;
    t5?: CSSProperties;
    t6?: CSSProperties;
    t7?: CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    t1: true;
    t2: true;
    t3: true;
    t4: true;
    t5: true;
    t6: true;
    t7: true;
  }
}

declare module '@mui/material/styles/createPalette' {
  interface Palette extends IColors {}
}

declare module '@mui/material/Chip' {
  interface ChipOwnProps {
    active?: boolean
  }
}