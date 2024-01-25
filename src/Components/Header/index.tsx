import {FC} from "react";
import holidaysLogo from "@assets/logos/holidays-logo-primary.svg"
import holidaysLogoWhite from "@assets/logos/holidays-logo-white.svg"
import pirExpo from "@assets/logos/pir-expo-red.svg"
import pirExpoWhite from "@assets/logos/pir-expo-white.svg"
import pirHotel from "@assets/logos/pir-hotel-blue.svg"
import pirHotelWhite from "@assets/logos/pir-hotel-white.svg"
import {SHeader, SHeaderLogoWrap} from "./styled.ts";
import {INavItem} from "@Components/UI/NavMenu/types.ts";
import NavMenu from "@Components/UI/NavMenu";
import Link from "@Components/UI/Link";

interface IHeader {
  navItems: INavItem[]
  invert?: boolean
}

const Header: FC<IHeader> = ({navItems, invert}) => {
  return (
      <SHeader>
        {!invert ? (
            <img src={holidaysLogo} alt="Логотип проекта Полезные Каникулы Отельера"/>
        ) : (
            <img src={holidaysLogoWhite} alt="Логотип проекта Полезные Каникулы Отельера"/>
        )}
        <NavMenu invert={invert} items={navItems}/>
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
      </SHeader>
  )


}

export default Header;
