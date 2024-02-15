import {FC, useEffect, useState} from "react";
import holidaysLogo from "@assets/logos/holidays-logo-primary.svg"
import holidaysLogoWhite from "@assets/logos/holidays-logo-white.svg"
import pirExpo from "@assets/logos/pir-expo-red.svg"
import pirExpoWhite from "@assets/logos/pir-expo-white.svg"
import pirHotel from "@assets/logos/pir-hotel-blue.svg"
import pirHotelWhite from "@assets/logos/pir-hotel-white.svg"
import {SHeader, SHeaderBurgerMenu, SHeaderLogoWrap} from "./styled";
import {INavItem} from "@Components/UI/NavMenu/types";
import NavMenu from "@Components/UI/NavMenu";
import Link from "@Components/UI/Link";
import {useMediaQuery, useTheme} from "@mui/material";
import Burger from "@Components/Header/Components/NavToggle";
import Container from "@Components/Container";

interface IHeader {
  navItems: INavItem[]
  invert?: boolean
  scrollFn: (href: string) => void
}

const Header: FC<IHeader> = ({navItems, invert, scrollFn}) => {
  const {breakpoints} = useTheme()
  const isTablet = useMediaQuery(breakpoints.up("md"))

  const [isOpenNav, setOpenNav] = useState(false);

  const handleScrollCloseNav = (href: string) => {
    setOpenNav(false)
    scrollFn(href)
  }

  const handleToggleNav = () => {
    setOpenNav(current => !current)
  }

  useEffect(() => {
    const html = document.querySelector("html")
    if(html) {
      html.style.overflow = isOpenNav ? "hidden" : "auto";
    }
  }, [isOpenNav]);

  return (
      <SHeader>
        <Container>
          {!invert ? (
              <img src={holidaysLogo} alt="Логотип проекта Полезные Каникулы Отельера"/>
          ) : (
              <img src={holidaysLogoWhite} alt="Логотип проекта Полезные Каникулы Отельера"/>
          )}
          {!isTablet ? (
              <>
                <Burger invert={!!invert} state={isOpenNav} toggleState={handleToggleNav}/>
                {isOpenNav && (
                    <>
                      <SHeaderBurgerMenu>
                        <NavMenu invert items={navItems} scrollFn={handleScrollCloseNav}/>
                        <SHeaderLogoWrap>
                          <Link href="https://pirexpo.com/" target="_blank" rel="noopener noreferrer">

                            <img src={pirExpoWhite} alt="Логотип ПИР Экспо"/>
                          </Link>
                          <Link href="https://pirexpo.com/themes/hotel" target="_blank" rel="noopener noreferrer">

                            <img src={pirHotelWhite} alt="Логотип ПИР Экспо Отель"/>
                          </Link>
                        </SHeaderLogoWrap>
                      </SHeaderBurgerMenu>
                    </>
                )}
              </>
          ) : (
              <>
                <NavMenu invert={invert} items={navItems} scrollFn={scrollFn}/>
                <SHeaderLogoWrap>
                  <Link href="https://pirexpo.com/" target="_blank" rel="noopener noreferrer">
                    {!invert ? (
                        <img src={pirExpo} alt="Логотип ПИР Экспо"/>
                    ) : (
                        <img src={pirExpoWhite} alt="Логотип ПИР Экспо"/>
                    )}
                  </Link>
                  <Link href="https://pirexpo.com/themes/hotel" target="_blank" rel="noopener noreferrer">
                    {!invert ? (
                        <img src={pirHotel} alt="Логотип ПИР Экспо Отель"/>
                    ) : (
                        <img src={pirHotelWhite} alt="Логотип ПИР Экспо Отель"/>
                    )}
                  </Link>
                </SHeaderLogoWrap>
              </>
          )}
        </Container>
      </SHeader>
  )


}

export default Header;
