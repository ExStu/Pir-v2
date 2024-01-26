import {styled} from "@mui/material/styles";

export const SReviewItem = styled("article")(({theme: {palette}}) => ({
  display: "flex",
  flexDirection: "column",
  padding: "32px",
  minHeight: "353px",
  width: "868px",
  borderRadius: "20px",
  backgroundColor: palette.main.background
}))

export const SReviewItemPost = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  marginBottom: "24px",
  marginTop: "4px"
}))