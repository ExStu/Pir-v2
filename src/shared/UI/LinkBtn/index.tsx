import {FC, PropsWithChildren} from "react";
import {SLinkBtn} from "./styled";

interface ILinkBtn extends PropsWithChildren<unknown> {
  href?: string
}

const LinkBtn: FC<ILinkBtn> = ({href}) => (
    <SLinkBtn variant="t2" href={href} target="_blank"/>
)

export default LinkBtn;
