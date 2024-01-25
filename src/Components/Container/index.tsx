import {FC, PropsWithChildren} from "react";
import {SContainer} from "./styled.ts";

const Container: FC<PropsWithChildren<unknown>> = ({children}) => (<SContainer>{children}</SContainer>)

export default Container;
