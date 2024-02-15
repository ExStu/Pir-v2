import {FC} from "react";
import {IThemes} from "@Components/Sections/Themes/types";
import {useTheme} from "@mui/material";
import {SThemes, SThemesList} from "@Components/Sections/Themes/styled";
import ThemesItem from "@Components/Sections/Themes/ThemesItem";
import Typography from "@Components/UI/Typography";

const Themes: FC<IThemes> = ({items}) => {
  const {palette} = useTheme()

  return (
      <SThemes id="themes">
        <Typography variant="h2" color={palette.main.primary} textAlign="center" textTransform="uppercase">
          ТЕМЫ Дискуссий
        </Typography>
        <SThemesList>
          {items.map((item) => (
              <ThemesItem key={item.desc} desc={item.desc}/>
          ))}
        </SThemesList>
      </SThemes>

  )
}

export default Themes;
