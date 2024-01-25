// @ts-nocheck

import React from "react";
import type { FC } from "react";

import { SLink } from "./styled";
import {LinkProps} from "@mui/material";

const Link: FC<LinkProps> = ({ variant, ...props }) => (
    <SLink {...props} underline="none" variant={variant} />
);

export default Link;
