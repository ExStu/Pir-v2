import {styled} from "@mui/material/styles";
import Link from "@Components/UI/Link";

export const SCost = styled("section")(() => ({
    padding: "60px 0"
}))

export const SCostCard = styled("div")(({theme: {palette}}) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    padding: "40px 40px",
    backgroundColor: palette.main.background,
    borderRadius: "50px"
}))

export const SCostCardDesc = styled("div")(() => ({
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    maxWidth: "42%"
}))

export const SCostCardDescList = styled("ul")(() => ({
    padding: 0,
    paddingLeft: "20px",
    margin: 0,
    display: "flex",
    flexDirection: "column",
}))

export const SCostCardLink = styled(Link)(({theme: {palette}}) => ({
    padding: "20px 40px",
    backgroundColor: palette.main.primary,
    color: palette.main.white,
    transition: "background-color .15s ease-in, color .15s ease-in",

    "&:hover": {
        backgroundColor: palette.main.white,
        color: palette.main.primary
    }
}))