import {FC} from "react";
import {IPartners} from "./types";
import {SPartners, SPartnersItem, SPartnersList} from "./styled";
import Link from "@Components/UI/Link";

const Partners: FC<IPartners> = ({items}) => (
    <SPartners>
      <SPartnersList>
        {items.map((item) => (
            <SPartnersItem key={item.id}>
              <Link href={item.href}>
                <img src={item.img} alt={item.alt}/>
              </Link>
            </SPartnersItem>
        ))}
    </SPartnersList>
    </SPartners>
)

export default Partners;
