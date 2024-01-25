import {styled} from "@mui/material/styles";

export const SAwaitsItemWrap = styled("li")(() => ({
  display: "flex",
  alignItems: "center",
  gap: "30px",
}))

export const SAwaitsItemImg = styled("div")(({theme: {palette}}) => ({
  paddingRight: "30px",
  borderRight: `2px solid ${palette.uncategorized.divider}`,
  "& img": {
    borderRadius: "20px 0px 20px 0px"
  }
}))

export const SAwaitsItemDesc = styled("div")(() => ({

}))