import {FC} from "react";
import {IPartners} from "./types";
import {SPartners, SPartnersItem, SPartnersList} from "./styled";
import Link from "@Components/UI/Link";
import Typography from "@Components/UI/Typography";

const Partners: FC<IPartners> = ({items}) => (
    <SPartners>
      <Typography
          variant="h2"
          marginBottom={5}
          textAlign="center"
          textTransform="uppercase"
      >
        Партнёры
      </Typography>
      <SPartnersList>
        {items.map((item) => (
            <SPartnersItem key={item.id}>
              <Link target="_blank" href={item.href}>
                <img src={item.img} alt={item.alt}/>
              </Link>
            </SPartnersItem>
        ))}
    </SPartnersList>
    </SPartners>
)

export default Partners;
