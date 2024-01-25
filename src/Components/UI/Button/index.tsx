import {FC} from "react";
import {ButtonProps} from "@mui/material";
import {SButton} from "./styled.ts";

export const Button: FC<ButtonProps> = ({...props}) => (
  <SButton {...props}/>
)

export default Button;
