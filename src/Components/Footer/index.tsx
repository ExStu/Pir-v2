import {FC} from "react";
import {SFooter, SFooterTop, SFooterDown, SFooterWrap, SFooterLogosWrap} from "./styled.ts";
import logo from "@assets/logos/holidays-logo-white.svg"
import pirExpo from "@assets/logos/pir-expo-white.svg"
import pirHotel from "@assets/logos/pir-hotel-white.svg"
import navData from "@const/data/home/nav"
import Container from "@Components/Container";
import NavMenu from "@Components/UI/NavMenu";
import Typography from "@Components/UI/Typography";
import {useTheme} from "@mui/material";
import ArrowUp from "@shared/UI/Icons/ArrowUp";
import IconButton from "@Components/UI/Button/IconButton";
import Link from "@Components/UI/Link";

const Footer: FC = () => {

  const {palette}= useTheme()
  const scrollToTop = () => {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
      window.requestAnimationFrame(scrollToTop);
      window.scrollTo(0, c - c / 20);
    }
  };

  return (
    <SFooter>
      <Container>
        <SFooterWrap>
          <SFooterTop>
            <img src={logo} alt="Логотип Полезные Каникулы Отельера"/>
            <NavMenu items={navData} invert/>
          </SFooterTop>
          <SFooterDown>
            <Typography variant="t2" color={palette.main.white}>
              © Ярмарка ПИР , 1997-2023. ВСЕ ПРАВА ЗАЩИЩЕНЫ.
            </Typography>
            <SFooterLogosWrap>
              <Link href="https://pirexpo.com/" target="_blank" rel="noopener noreferrer">
                <img src={pirExpo} alt="Логотип ПИР Экспо"/>
              </Link>
              <Link href="https://pirexpo.com/themes/hotel" target="_blank" rel="noopener noreferrer">
                <img src={pirHotel} alt="Логотип ПИР Экспо Отель"/>
              </Link>
              <IconButton onClick={scrollToTop}>
                <ArrowUp/>
              </IconButton>
            </SFooterLogosWrap>
          </SFooterDown>
        </SFooterWrap>
      </Container>
    </SFooter>
  )
}

export default Footer;
