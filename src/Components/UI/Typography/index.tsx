import type { FC } from "react";

import { STypography } from "./styled";
import type { ITypography } from "./types";

const Typography: FC<ITypography> = (props) => <STypography {...props} />;

export default Typography;
