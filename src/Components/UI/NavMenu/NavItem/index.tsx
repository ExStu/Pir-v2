import {FC} from "react";
import {INavItem} from "../types.ts";
import {SNavItem} from "./styled.ts";
import Link from "@Components/UI/Link";
import {useTheme} from "@mui/material";
import {SNavItemLinkWrap} from "@shared/UI/NavItemLinkWrap/styled.ts";

const NavItem: FC<INavItem> = ({text, bold, href, invert, scrollFn}) => {
  const {palette} = useTheme()
  const refHash = href.charAt(0) === "#"
  return (
    <SNavItem>
      <SNavItemLinkWrap color={invert ? palette.main.white : ""}>
        <Link
            className="nav-menu__link"
            sx={{whiteSpace: "nowrap"}}
            component={refHash ? "button" : "a"}
            href={!refHash ? href : undefined}
            variant={bold ? "t4" : "t5"}
            color={invert ? palette.main.white : ""}
            onClick={() => scrollFn && refHash ? scrollFn(href) : null}
        >
          {text}
        </Link>
      </SNavItemLinkWrap>
    </SNavItem>
  )
}

export default NavItem;
