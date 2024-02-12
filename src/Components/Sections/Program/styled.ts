import {styled} from "@mui/material/styles";
import {motion} from "framer-motion";
import mq from "@shared/themes/breakpoints.ts";

export const SProgram = styled("section")(() => mq({
  padding: ["20px 0", "30px 0", "60px 0"],
}))

export const SProgramTabsWrap = styled("div")(({theme: {palette}}) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexWrap: "wrap",
  gap: "12px",
  paddingBottom: "30px",
  borderBottom: `1px solid ${palette.main.primaryLight}`
}))

export const SProgramList = styled(motion.ul)(() => ({
  listStyle: "none",
  padding: 0,
  margin: 0
}))