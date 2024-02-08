import {FC} from "react";
import {SFooter, SFooterTop, SFooterDown, SFooterWrap, SFooterLogosWrap} from "./styled";
import logo from "@assets/logos/holidays-logo-white.svg"
import pirExpo from "@assets/logos/pir-expo-white.svg"
import pirHotel from "@assets/logos/pir-hotel-white.svg"
import Container from "@Components/Container";
import NavMenu from "@Components/UI/NavMenu";
import Typography from "@Components/UI/Typography";
import {useTheme} from "@mui/material";
import ArrowUp from "@shared/UI/Icons/ArrowUp";
import IconButton from "@Components/UI/Button/IconButton";
import Link from "@Components/UI/Link";
import {scrollToTop} from "@utils/scrollToTop.ts";
import {INavItem} from "@Components/UI/NavMenu/types.ts";

interface IFooter {
  navItems: INavItem[]
  scrollFn?: (href: string) => void
}

const Footer: FC<IFooter> = ({navItems, scrollFn}) => {

  const {palette}= useTheme()

  return (
    <SFooter>
      <Container>
        <SFooterWrap>
          <SFooterTop>
            <img src={logo} alt="Логотип Полезные Каникулы Отельера"/>
            <NavMenu items={navItems} invert scrollFn={scrollFn}/>
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
