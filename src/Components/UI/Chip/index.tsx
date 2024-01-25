import type { FC } from "react";

import type { ChipProps } from "@mui/material/Chip";

import { SChip } from "./styled";

export interface SChipProps extends ChipProps {
  isActive?: boolean;
}

const Chip: FC<SChipProps> = ({ ...props }) => <SChip clickable {...props} />;
export default Chip;
