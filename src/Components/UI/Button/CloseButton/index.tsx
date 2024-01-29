import type {ButtonHTMLAttributes, FC} from "react";

import { SModalCloseBtn } from "./styled";
import Close from "@shared/UI/Icons/Close";

interface ICloseButton extends ButtonHTMLAttributes<HTMLButtonElement> {}

const CloseButton: FC<ICloseButton> = ({...props}) => (
    <SModalCloseBtn {...props}>
      <Close/>
    </SModalCloseBtn>
);

export default CloseButton;
