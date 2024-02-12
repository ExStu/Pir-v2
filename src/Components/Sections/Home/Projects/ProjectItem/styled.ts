import styled, {StyledComponent} from "@emotion/styled";
import {ReactNode} from "react";
import Button from "@Components/UI/Button";
import mq from "@shared/themes/breakpoints.ts";

interface ISProjectItem {
  children: ReactNode
  image: string
}
export const SProjectItem: StyledComponent<ISProjectItem> = styled("li")(({image}) => mq({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  padding: ["60px 50px", "70px 50px", "80px 60px"],
  background: `linear-gradient(0deg, rgba(0, 0, 0, 0.2) 100%, rgba(0, 0, 0, 0.4) 0%), url(${image})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: ["cover", "cover", "100% 100%"],
  backgroundPosition: "center",
  borderRadius: ["0 60px 0 60px", "0 70px 0 70px", "0 80px 0 80px"],
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