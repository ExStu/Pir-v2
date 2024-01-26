import type { FC, PropsWithChildren } from "react";

import type { SxProps, Theme } from "@mui/material/styles";
import {Box} from "@mui/material";

interface ICustomTabPanel extends PropsWithChildren<unknown> {
  index: number | string;
  value: number | string;
  childrenSx?: SxProps<Theme>;
}

export const CustomTabPanel: FC<ICustomTabPanel> = (props) => {
  const { children, value, index, childrenSx, ...other } = props;

  return (
      <div
          role="tabpanel"
          hidden={value !== index}
          id={`simple-tabpanel-${index}`}
          aria-labelledby={`simple-tab-${index}`}
          {...other}
      >
        {value === index && <Box sx={childrenSx}>{children}</Box>}
      </div>
  );
};
