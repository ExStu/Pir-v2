import {FC} from "react";
import {
  SFooter,
  SFooterTop,
  SFooterDown,
  SFooterWrap,
  SFooterLogosWrap,
  SFooterDownActions, SFooterCopyright
} from "./styled";
import logo from "@assets/logos/holidays-logo-white.svg"
import pirExpo from "@assets/logos/pir-expo-white.svg"
import pirHotel from "@assets/logos/pir-hotel-white.svg"
import Container from "@Components/Container";
import NavMenu from "@Components/UI/NavMenu";
import {useMediaQuery, useTheme} from "@mui/material";
import ArrowUp from "@shared/UI/Icons/ArrowUp";
import IconButton from "@Components/UI/Button/IconButton";
import Link from "@Components/UI/Link";
import {scrollToTop} from "@utils/scrollToTop";
import {INavItem} from "@Components/UI/NavMenu/types";

interface IFooter {
  navItems: INavItem[]
  scrollFn?: (href: string) => void
}

const Footer: FC<IFooter> = ({navItems, scrollFn}) => {

  const {palette, breakpoints}= useTheme()
  const isMobile = useMediaQuery(breakpoints.only("xs"))

  return (
    <SFooter>
      <Container>
        <SFooterWrap>
          <SFooterTop>
            <img src={logo} alt="Логотип Полезные Каникулы Отельера"/>
            <NavMenu items={navItems} invert scrollFn={scrollFn}/>
          </SFooterTop>
          <SFooterDown>
            <SFooterCopyright variant={isMobile ? "t5" : "t2"} textAlign={isMobile ? "right" : "left"} color={palette.main.white}>
              © Ярмарка ПИР , 1997-2023. ВСЕ ПРАВА ЗАЩИЩЕНЫ.
            </SFooterCopyright>
            <SFooterDownActions>
              <SFooterLogosWrap>
                <Link href="https://pirexpo.com/" target="_blank" rel="noopener noreferrer">
                  <img src={pirExpo} alt="Логотип ПИР Экспо"/>
                </Link>
                <Link href="https://pirexpo.com/themes/hotel" target="_blank" rel="noopener noreferrer">
                  <img src={pirHotel} alt="Логотип ПИР Экспо Отель"/>
                </Link>
              </SFooterLogosWrap>
              <IconButton onClick={scrollToTop}>
                <ArrowUp/>
              </IconButton>
            </SFooterDownActions>
          </SFooterDown>
        </SFooterWrap>
      </Container>
    </SFooter>
  )
}

export default Footer;
