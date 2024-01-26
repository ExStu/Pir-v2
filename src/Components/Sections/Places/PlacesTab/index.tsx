import {FC} from "react";
import {IPlacesItem} from "../types";
import {
  SPlacesItem, SPlacesItemImg,
  SPlacesItemLink,
  SPlacesItemRating,
  SPlacesItemTitle
} from "@Components/Sections/Places/PlacesTab/styled.ts";
import Typography from "@Components/UI/Typography";
import {useTheme} from "@mui/material";
import Star from "@shared/UI/Icons/Star";
import {SNavItemLinkWrap} from "@shared/UI/NavItemLinkWrap/styled.ts";

const PlacesTab: FC<IPlacesItem> = ({img, title, rating, href}) => {
  const {palette} = useTheme()

  return (
      <SPlacesItem>
        <SPlacesItemImg src={img} alt={title}/>
        <SPlacesItemTitle>
          <Typography variant="h5" color={palette.main.white} textTransform="uppercase">{title}</Typography>
        </SPlacesItemTitle>
        {href && (
            <SNavItemLinkWrap color={palette.main.secondary}>
              <SPlacesItemLink color={palette.main.secondary} variant="t2" href={href} target="_blank">
                Перейти на сайт
              </SPlacesItemLink>
            </SNavItemLinkWrap>
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
