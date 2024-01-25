import {FC} from "react";
import {IAwaits} from "@Components/Sections/Awaits/types.ts";
import {SAwaits, SAwaitsList} from "@Components/Sections/Awaits/styled.ts";
import Typography from "@Components/UI/Typography";
import {useTheme} from "@mui/material";
import AwaitsItem from "@Components/Sections/Awaits/AwaitsItem";

const Awaits: FC<IAwaits> = ({items}) => {

  const {palette} = useTheme()

  return (
      <SAwaits>
        <Typography
            variant="h2"
            color={palette.main.primary}
            textAlign="center"
            textTransform="uppercase"
        >
          Что нас ждет:
        </Typography>
        <SAwaitsList>
          {items.map((item) => (
              <AwaitsItem key={item.desc} img={item.img} desc={item.desc}/>
          ))}
        </SAwaitsList>
        <Typography variant="t1" color={palette.main.primary} textAlign="center">
          А главное — непрерывный нетворкинг и обмен опытом с коллегами из разных
          регионов. Ведь все отельеры решают похожие задачи, и каждый руководитель —
          эксперт индустрии гостеприимства!
        </Typography>
      </SAwaits>
  )
}

export default Awaits;
