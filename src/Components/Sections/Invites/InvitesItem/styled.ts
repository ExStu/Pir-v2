import {styled} from "@mui/material/styles";
import {Box, boxClasses} from "@mui/material";
export const SInvitesItem = styled("div")(({theme: {palette}}) => ({
  display: "flex",
  flexDirection: "column",
  position: "relative",
  cursor: "pointer",
  alignItems: "center",
  borderRadius: "30px 0 30px 0",
  transition: "background-color .3s ease-in",
  paddingBottom: "22px",

  "&:hover": {
    backgroundColor: palette.uncategorized.background
  },

  [`&:hover .${boxClasses.root}`]: {
    transform: "translateY(100%)",
    opacity: 0,
  },

  "&:hover img": {
    filter: "brightness(0.4)"
  },

  "&:hover .invites__img": {
    transform: "scale(1.1)"
  },

  "&:hover .invites__play-btn": {
      opacity: 1
  }
}))

export const SInvitesItemTop = styled("div")(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "8px",
  width: "100%",

  "& img": {
    paddingLeft: "23.5px",
    width: "98px",
    height: "36px"
  }
}))

export const SInvitesItemDecor = styled("div")(({theme: {palette}}) => ({
  width: "130px",
  height: "130px",
  backgroundColor: palette.main.primary,
  borderRadius: "40px 0 40px 0",
}))

export const SInvitesItemImgWrap = styled("div")(() => ({
  display: "block",
  overflow: "hidden",
  marginBottom: "12px",
  width: "339px",
  height: "327px",
  borderRadius: "0 55px 0 55px",

  "& img": {
    transition: "filter .3s ease-in-out, transform .3s ease-in-out"
  }
}))

export const SInvitesItemCover = styled(Box)(({theme: {palette}}) => ({
  display: "flex",
  flexDirection: "column",
  padding: "20px 40px",
  position: "absolute",
  bottom: 0,
  left: 0,
  gap: "4px",
  backgroundColor: palette.main.background,
  borderRadius: "30px 0 30px 0",
  transition: "transform .3s ease-in-out, opacity .3s ease-in-out"
}))

export const SInvitesPlay = styled("div")(({theme: {palette}}) => ({
  position: "absolute",
  left: "44px",
  bottom: "130px",
  width: "76%",
  display: "flex",
  alignItems: "center",
  gap: "20px",
  paddingBottom: "15px",
  borderBottom: `1px solid ${palette.uncategorized.borderWhite}`,
  opacity: 0,
  transition: "opacity .3s ease-in-out",
}))
