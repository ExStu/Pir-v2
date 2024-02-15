import {FC} from "react";
import {
  SHeroBottom,
  SHeroMain,
  SHeroMainTitleWrap,
  SHeroMiddleLeft,
  SHeroMiddleLeftWrap,
  SHeroMiddleWrap,
  SHeroSection,
  SHeroLogosWrap, SHeroMainImg
} from "./styled";

import heroImg from "@assets/images/home/hero.webp"
import heroMiddle from "@assets/images/home/hero-middle.webp"
import Typography from "@Components/UI/Typography";
import {useTheme} from "@mui/material";
import Link from "@Components/UI/Link";
import pirExpo from "@assets/logos/pir-expo-white.svg"
import pirHotel from "@assets/logos/pir-hotel-white.svg"
const HomeHero: FC = () => {

  const {palette} = useTheme()

  return (
    <SHeroSection>
      <SHeroMain>
        <SHeroMainImg src={heroImg} alt="Полезные каникулы отельера"/>
        <SHeroMainTitleWrap>
          <Typography variant="h1" color={palette.main.white} textTransform="uppercase" textAlign="center">
            Полезные каникулы отельера
          </Typography>
          <SHeroLogosWrap>
            <Link href="https://pirexpo.com/" target="_blank" rel="noopener noreferrer">
              <img src={pirExpo} alt="Логотип ПИР Экспо"/>
            </Link>
            <Link href="https://pirexpo.com/themes/hotel" target="_blank" rel="noopener noreferrer">
              <img src={pirHotel} alt="Логотип ПИР Экспо Отель"/>
            </Link>
          </SHeroLogosWrap>
        </SHeroMainTitleWrap>
      </SHeroMain>
      <SHeroMiddleWrap>
        <SHeroMiddleLeft>
          <SHeroMiddleLeftWrap>
            <Typography variant="t1" color={palette.main.white}>
              Для владельцев и директоров отелей
            </Typography>
            <Typography variant="t1" color={palette.main.white}>
              Для тех, кто открывает или собирается открыть отель
            </Typography>
          </SHeroMiddleLeftWrap>
        </SHeroMiddleLeft>
        <img src={heroMiddle} alt="Полезные каникулы отельера"/>
      </SHeroMiddleWrap>
      <SHeroBottom>
        <Typography variant="t1" color={palette.main.primary} textAlign="center">
          Формат проекта предполагает выезд в регион для знакомства с интересными объектами размещения, гастрономией региона, общение с коллегами, обмен опытом, а также отдых в самых интересных туристических локациях.
        </Typography>
      </SHeroBottom>
    </SHeroSection>
  )
}


export default HomeHero;
