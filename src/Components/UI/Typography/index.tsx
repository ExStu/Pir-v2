import type { FC } from "react";

import { STypography } from "./styled.ts";
import type { ITypography } from "./types.ts";

const Typography: FC<ITypography> = (props) => <STypography {...props} />;

export default Typography;
