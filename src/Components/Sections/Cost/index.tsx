import {FC} from "react";
import {SCost, SCostCard, SCostCardDesc, SCostCardDescList, SCostCardLink} from "./styled";
import Typography from "@Components/UI/Typography";
import {ICost} from "./types";

const Cost: FC<ICost> = ({price, desc, href}) => (
    <SCost>
      <Typography
          textTransform="uppercase"
          variant="h2"
          textAlign="center"
          marginBottom={4}
      >
        Стоимость участия
      </Typography>
      <SCostCard>
        <Typography variant="h2">{price}</Typography>
        <SCostCardDesc>
          <Typography variant="t2">{desc.title}</Typography>
          <SCostCardDescList>
            {desc.list.map((item) => (
                <li key={item.item}>
                  <Typography variant="t3">{item.item}</Typography>
                </li>
            ))}
          </SCostCardDescList>
        </SCostCardDesc>
        <SCostCardLink variant="t2" href={href} target="_blank">Купить билет</SCostCardLink>
      </SCostCard>
    </SCost>
)

export default Cost;
