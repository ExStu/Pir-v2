import {FC} from "react";
import {useTheme} from "@mui/material";
import Typography from "@Components/UI/Typography";
import {SHeroLinkBtn, SHeroTitlesWrap, SHeroWrap} from "./styled";
import {IHero} from "./types";

const Hero: FC<IHero> = ({titles, href}) => {
  const {palette} = useTheme()

  return (
      <SHeroWrap>
        <SHeroTitlesWrap>
          <Typography textTransform="uppercase" variant="h3" color={palette.main.white}>ПОЛЕЗНЫЕ КАНИКУЛЫ ОТЕЛЬЕРА</Typography>
          <Typography textTransform="uppercase" variant="h1" color={palette.main.white}>{titles.place}</Typography>
          <Typography textTransform="uppercase" variant="h2" color={palette.main.white}>{titles.date}</Typography>
        </SHeroTitlesWrap>
        <SHeroLinkBtn sx={{visibility: href ? "visible" : "hidden"}} variant="t2" href={href} target="_blank">
            Принять участие
        </SHeroLinkBtn>
      </SHeroWrap>
  )
}

export default Hero;
