import {FC} from "react";
import {useTheme} from "@mui/material";
import Typography from "@Components/UI/Typography";
import {SHeroBtn, SHeroTitlesWrap, SHeroWrap} from "./styled";
import {IHero} from "./types";

const Hero: FC<IHero> = ({titles, onClick}) => {
  const {palette} = useTheme()

  return (
      <SHeroWrap>
        <SHeroTitlesWrap>
          <Typography variant="h3" color={palette.main.white}>ПОЛЕЗНЫЕ КАНИКУЛЫ ОТЕЛЬЕРА</Typography>
          <Typography variant="h1" color={palette.main.white}>{titles.place}</Typography>
          <Typography variant="h2" color={palette.main.white}>{titles.date}</Typography>
        </SHeroTitlesWrap>
        <SHeroBtn variant="outlined" size="large" onClick={onClick}>
          <Typography variant="t2" color={palette.main.primary}>
            Принять участие
          </Typography>
        </SHeroBtn>
      </SHeroWrap>
  )
}

export default Hero;
