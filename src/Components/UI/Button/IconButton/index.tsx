import type { FC } from "react";

import { SIconButton } from "./styled";
import {IconButtonProps} from "@mui/material/IconButton";

const IconButton: FC<IconButtonProps> = ({ size = "large", ...props }) => (
    <SIconButton {...props} disableRipple size={size} />
);
export default IconButton;