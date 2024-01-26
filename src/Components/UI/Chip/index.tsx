import type { FC } from "react";

import type { ChipProps } from "@mui/material/Chip";

import { SChip } from "./styled";

const Chip: FC<ChipProps> = ({ ...props }) => <SChip clickable {...props} />;
export default Chip;
