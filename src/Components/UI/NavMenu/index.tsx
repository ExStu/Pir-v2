import {FC} from "react";
import {INavMenu} from "./types.ts";
import NavItem from "@Components/UI/NavMenu/NavItem";
import {SNavMenuList} from "@Components/UI/NavMenu/styled.ts";

const NavMenu: FC<INavMenu> = ({items, invert}) => {
  return (
    <nav>
      <SNavMenuList>
        {items.map((item) => (
            <NavItem key={item.text} text={item.text} bold={item.bold} href={item.href} invert={invert}/>
        ))}
      </SNavMenuList>
    </nav>
  )
}

export default NavMenu;
