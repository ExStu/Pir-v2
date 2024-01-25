import {FC} from "react";
import {INavItem} from "../types.ts";
import {SNavItem} from "./styled.ts";
import Link from "@Components/UI/Link";
import {useTheme} from "@mui/material";
import {SNavItemLinkWrap} from "@shared/UI/NavItemLinkWrap/styled.ts";

const NavItem: FC<INavItem> = ({text, bold, href, invert}) => {
  const {palette} = useTheme()
  return (
    <SNavItem>
      <SNavItemLinkWrap color={invert ? palette.main.white : ""}>
        <Link href={href} variant={bold ? "t4" : "t5"} color={invert ? palette.main.white : ""}>{text}</Link>
      </SNavItemLinkWrap>
    </SNavItem>
  )
}

export default NavItem;
