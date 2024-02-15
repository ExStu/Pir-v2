import {FC} from "react";
import {IPlacesItem} from "../types";
import {
  SPlacesItem, SPlacesItemImg,
  SPlacesItemLinkWrap,
  SPlacesItemRating,
  SPlacesItemTitle
} from "@Components/Sections/Places/PlacesTab/styled";
import Typography from "@Components/UI/Typography";
import {useMediaQuery, useTheme} from "@mui/material";
import Star from "@shared/UI/Icons/Star";
import {SNavItemLinkWrap} from "@shared/UI/NavItemLinkWrap/styled";
import Link from "@Components/UI/Link";
import ArrowLink from "@shared/UI/Icons/ArrowLink";

const PlacesTab: FC<IPlacesItem> = ({img, title, rating, href}) => {
  const {palette, breakpoints} = useTheme()
  const isTablet = useMediaQuery(breakpoints.down("lg"))

  return (
      <SPlacesItem>
        <SPlacesItemImg src={img} alt={title}/>
        <SPlacesItemTitle hasLink={!!href}>
          <Typography className="places-item__title" variant="h5" color={!isTablet ? palette.main.white : palette.main.primary} textTransform="uppercase">{title}</Typography>
        </SPlacesItemTitle>
        {href && (
            <SPlacesItemLinkWrap>
              <SNavItemLinkWrap color={palette.main.secondary}>
                <Link className="places__link" color={palette.main.secondary} variant="t2" href={href} target="_blank">
                  Перейти на сайт
                  <ArrowLink/>
                </Link>
              </SNavItemLinkWrap>
            </SPlacesItemLinkWrap>
        )}
        {rating && (
            <SPlacesItemRating>
              <Star variant={rating >= 1 ? "filled" : "empty"}/>
              <Star variant={rating >= 2 ? "filled" : "empty"}/>
              <Star variant={rating >= 3 ? "filled" : "empty"}/>
              <Star variant={rating >= 4 ? "filled" : "empty"}/>
              <Star variant={rating >= 5 ? "filled" : "empty"}/>
            </SPlacesItemRating>
        )}
      </SPlacesItem>
  )
}

export default PlacesTab;
