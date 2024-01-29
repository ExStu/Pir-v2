import type {FC, PropsWithChildren} from "react";

import type { ModalProps } from "@mui/material/Modal";
import { ModalCustom, SModalBox, SModalCloseBtn, SModalContainer } from "./styled";
import CloseButton from "@Components/UI/Button/CloseButton";

export interface IModalBox extends PropsWithChildren<unknown> {
  onClose: () => void
  maxWidth?: string
}

const Modal: FC<ModalProps> = ModalCustom;

export const ModalBox: FC<IModalBox> = ({ children, onClose }) => {
  // const { breakpoints } = useTheme();
  // const isMobile = useMediaQuery(breakpoints.only("mobile"));

  return (
      <SModalBox>
        <SModalContainer>
          <SModalCloseBtn>
            <CloseButton onClick={onClose}/>
          </SModalCloseBtn>
          {children}
        </SModalContainer>
      </SModalBox>
  );
};
export default Modal;
