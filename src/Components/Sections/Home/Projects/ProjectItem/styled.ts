import styled, {StyledComponent} from "@emotion/styled";
import {ReactNode} from "react";
import Button from "@Components/UI/Button";

interface ISProjectItem {
  children: ReactNode
  image: string
}
export const SProjectItem: StyledComponent<ISProjectItem> = styled("li")(({image}) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "80px 60px",
  background: `linear-gradient(0deg, rgba(0, 0, 0, 0.2) 100%, rgba(0, 0, 0, 0.4) 0%), url(${image})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "100% 100%",
  backgroundPosition: "center",
  borderRadius: "0 80px 0 80px",
  pointerEvents: "none",
  transition: "background-size .5s ease",

  "&:hover": {
    backgroundSize: "120% 120%"
  }
}))

export const STextWrap = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "18px",
  marginBottom: "40px"
}))

export const SProjectItemBtn = styled(Button)(() => ({
  pointerEvents: "auto",
  maxWidth: "236px"
}))