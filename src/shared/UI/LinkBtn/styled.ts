import {styled} from "@mui/material/styles";
import Link from "@Components/UI/Link";

export const SLinkBtn = styled(Link)(({theme: {palette}}) => ({
  padding: "20px 40px",
  backgroundColor: palette.main.primary,
  color: palette.main.white,
  transition: "background-color .15s ease-in, color .15s ease-in",

  "&:hover": {
    backgroundColor: palette.main.white,
    color: palette.main.primary
  }
}))