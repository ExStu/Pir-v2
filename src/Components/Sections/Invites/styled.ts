import {styled} from "@mui/material/styles";

export const SInvites = styled("section")(() => ({
  paddingTop: "60px",
  paddingBottom: "105px"
}))

export const SInvitesModalContent = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  maxWidth: "300px",
  paddingBottom: "40px",
}))

export const SInvitesModalVideoWrap = styled("div")(() => ({
  paddingTop: "20px",
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