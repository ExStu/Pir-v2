import {FC} from "react";
import {INavMenu} from "./types";
import NavItem from "@Components/UI/NavMenu/NavItem";
import {SNavMenuList} from "@Components/UI/NavMenu/styled";

const NavMenu: FC<INavMenu> = ({items, invert, scrollFn}) => {

  return (
    <nav>
      <SNavMenuList className="nav-menu">
        {items.map((item) => (
            <NavItem
                key={item.text}
                text={item.text}
                bold={item.bold}
                href={item.href}
                invert={invert}
                scrollFn={scrollFn}
            />
        ))}
      </SNavMenuList>
    </nav>
  )
}

export default NavMenu;
