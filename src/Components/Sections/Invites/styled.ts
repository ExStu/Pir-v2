import {styled} from "@mui/material/styles";
import mq from "@shared/themes/breakpoints";

export const SInvites = styled("section")(() => mq({
  paddingTop: ["20px", "40px", "60px"],
  paddingBottom: ["80px", "105px"],
}))

export const SInvitesModalContent = styled("div")(() => mq({
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  maxWidth: "300px",
  paddingBottom: ["60px", "40px"],
}))

export const SInvitesModalVideoWrap = styled("div")(() => mq({
  paddingTop: ["40px", "20px"],
  width: "300px",
  height: "480px",

  "& video": {
    display: "block",
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "8px"
  }
}))

interface IModalTabImg {
  active?: boolean
}

export const SInvitesModalTabImg = styled("button", {
  shouldForwardProp: (props) => (
    props !== "active"
  )})((props: IModalTabImg) => ({
  display: "flex",
  flexDirection: "column",
  gap: "4px",
  alignItems: "center",
  padding: 0,
  margin: 0,
  border: "none",
  backgroundColor: "transparent",
  cursor: "pointer",
  borderRadius: "50%",

  "& img": {
    width: "70px",
    height: "70px",
    borderRadius: "50%",
    filter: props.active ? "brightness(1)" : "brightness(0.5)"
  }

}))