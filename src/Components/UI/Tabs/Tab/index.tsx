import type { FC } from "react";

import type { TabProps } from "@mui/material/Tab";

import { STab } from "./styled";

const Tab: FC<TabProps> = (props) => <STab {...props} disableRipple />;
export default Tab;
