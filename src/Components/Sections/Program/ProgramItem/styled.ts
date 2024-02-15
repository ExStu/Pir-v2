import {styled} from "@mui/material/styles";
import {motion} from "framer-motion";
import mq from "@shared/themes/breakpoints";

export const SProgramItem = styled(motion.li)(({theme: {palette}}) => mq({
  display: "flex",
  flexDirection: ["column", "row"],
  alignItems: ["flex-start", "center"],
  gap: ["12px", 0],
  padding: ["16px 0", "32px 0"],
  borderBottom: `1px solid ${palette.main.primaryLight}`
}))

export const SProgramItemTime = styled("div")(() => mq({
  width: ["150px", "150px", "187px"],
  flexShrink: 0,
  textAlign: "left"
}))