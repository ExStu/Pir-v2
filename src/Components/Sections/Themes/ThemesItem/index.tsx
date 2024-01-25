import {FC} from "react";
import {useTheme} from "@mui/material";
import {IThemesItem} from "../types";
import {SThemesItem} from "@Components/Sections/Themes/ThemesItem/styled.ts";
import Typography from "@Components/UI/Typography";

export const ThemesItem: FC<IThemesItem> = ({desc}) => {
  const {palette} = useTheme()

  return (
      <SThemesItem>
        <Typography variant="t3" color={palette.main.primary}>{desc}</Typography>
      </SThemesItem>
  )
}

export default ThemesItem;
