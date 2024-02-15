import {styled} from "@mui/material/styles";
import Link from "@Components/UI/Link";
import mq from "@shared/themes/breakpoints";

export const SCost = styled("section")(() => mq({
    padding: ["40px 0", "40px 0", "60px 0"]
}))

export const SCostCard = styled("div")(({theme: {palette}}) => mq({
    display: "flex",
    flexDirection: ["column", "column", "row"],
    alignItems: "center",
    justifyContent: "space-around",
    padding: ["20px 20px", "40px 40px"],
    backgroundColor: palette.main.background,
    borderRadius: ["16px", "50px"],
    gap: ["24px", "24px", 0]
}))

export const SCostCardDesc = styled("div")(() => mq({
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    maxWidth: ["80%", "80%", "42%"]
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