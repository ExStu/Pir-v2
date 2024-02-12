import {styled} from "@mui/material/styles";
import {HTMLMotionProps, motion} from "framer-motion";
import {StyledComponent} from "@emotion/styled";
export const SBurgerBtn = styled(motion.button)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  border: "none",
  padding: 0,
  margin: 0,
  width: "60px",
  height: "60px",
  backgroundColor: "transparent",
  zIndex: 5,
}))

interface IBurgerLine extends HTMLMotionProps<"span">{
  state: boolean
  invert: boolean
}

// @ts-expect-error MUI problem
export const SBurgerBtnLine: StyledComponent<IBurgerLine> = styled(motion.span)(({theme: {palette}, state, invert}) => ({
  position: "absolute",
  height: "4px",
  width: "40px",
  borderRadius: "12px",
  backgroundColor: state || invert ? palette.main.white : palette.main.primary,
}))