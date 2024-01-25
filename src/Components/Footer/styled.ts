import {styled} from "@mui/material/styles";

export const SFooter = styled("footer")(({theme: {palette}}) => ({
  padding: "60px 0",
  backgroundColor: palette.main.primary
}))

export const SFooterWrap = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "30px"
}))

export const SFooterTop = styled("div")(() => ({
  display: "flex",
  justifyContent: "space-between"
}))

export const SFooterDown = styled("div")(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-end"
}))

export const SFooterLogosWrap = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  gap: "45px"
}))

export const SButtonScrollUp = styled("button")(() => ({

}))