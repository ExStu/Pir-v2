import type { FC } from "react";

import type { TabsProps } from "@mui/material/Tabs";

import { STabs } from "./styled";

const Tabs: FC<TabsProps> = (props) => <STabs {...props} />;
export default Tabs;
