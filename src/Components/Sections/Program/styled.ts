import {styled} from "@mui/material/styles";
import {motion} from "framer-motion";

export const SProgram = styled("section")(() => ({
  padding: "60px 0",
}))

export const SProgramTabsWrap = styled("div")(({theme: {palette}}) => ({
  display: "flex",
  alignItems: "center",
  paddingBottom: "30px",
  borderBottom: `1px solid ${palette.main.primaryLight}`
}))

export const SProgramList = styled(motion.ul)(() => ({
  listStyle: "none",
  padding: 0,
  margin: 0
}))