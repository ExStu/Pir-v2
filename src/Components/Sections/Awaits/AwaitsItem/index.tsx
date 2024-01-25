import {FC} from "react";
import {SAwaitsItemImg, SAwaitsItemWrap} from "@Components/Sections/Awaits/AwaitsItem/styled.ts";
import {IAwaitsItem} from "@Components/Sections/Awaits/types.ts";
import Typography from "@Components/UI/Typography";
import {useTheme} from "@mui/material";

const AwaitsItem: FC<IAwaitsItem> = ({img, desc}) => {
  const {palette} = useTheme()

  return (
      <SAwaitsItemWrap>
        <SAwaitsItemImg>
          <img src={img} alt="Фотография, что будет"/>
        </SAwaitsItemImg>
        <Typography variant="t1" color={palette.main.primary}>{desc}</Typography>
      </SAwaitsItemWrap>
  )
}

export default AwaitsItem;
