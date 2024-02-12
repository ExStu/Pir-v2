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
          <Typography textTransform="uppercase" variant="h3" color={palette.main.white}>ПОЛЕЗНЫЕ КАНИКУЛЫ ОТЕЛЬЕРА</Typography>
          <Typography textTransform="uppercase" variant="h1" color={palette.main.white}>{titles.place}</Typography>
          <Typography textTransform="uppercase" variant="h2" color={palette.main.white}>{titles.date}</Typography>
        </SHeroTitlesWrap>
        <SHeroBtn sx={{visibility: onClick === null ? "hidden" : "visible"}} variant="outlined" size="large" onClick={onClick} className="baikal-hero__btn">
          <Typography variant="t2" color={palette.main.primary}>
            Принять участие
          </Typography>
        </SHeroBtn>
      </SHeroWrap>
  )
}

export default Hero;
