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

const PlacesTab: FC<IPlacesItem> = ({img, title, rating, href}) => {
  const {palette} = useTheme()

  return (
      <SPlacesItem>
        <SPlacesItemImg src={img} alt={title}/>
        <SPlacesItemTitle>
          <Typography variant="h5" color={palette.main.white} textTransform="uppercase">{title}</Typography>
        </SPlacesItemTitle>
        {href && (
            <SPlacesItemLink href={href}>Перейти на сайт</SPlacesItemLink>
        )}
        {rating && (
            <SPlacesItemRating>{rating.toString()}</SPlacesItemRating>
        )}
      </SPlacesItem>
  )
}

export default PlacesTab;
