import {FC} from "react";
import {
  SContactBlock,
  SContactItem, SContactItemWrap, SContactLinkWrap,
  SContactSection,
  SContactTitle,
  SContactWrap
} from "@Components/Sections/Contacts/styled";
import {useTheme} from "@mui/material";
import Typography from "@Components/UI/Typography";
import phoneIcon from "@assets/icons/phone-primary.svg"
import mailIcon from "@assets/icons/mail-primary.svg"
import Link from "@Components/UI/Link";

const Contacts: FC = () => {
  const {palette} = useTheme()
  return (
    <SContactSection>
      <SContactTitle
          variant="h2"
          color={palette.main.primary}
          textAlign="center"
          textTransform="uppercase"
      >
        Контакты
      </SContactTitle>
      <SContactWrap>
        <SContactBlock>
          <Typography variant="t2" color={palette.main.secondary}>
            По вопросам программы и участия
          </Typography>
          <SContactItemWrap>
            <SContactItem>
              <Typography variant="t1" color={palette.main.primary}>Дубовик Ольга</Typography>
              <SContactLinkWrap>
                <img src={phoneIcon} alt="Иконка телефона"/>
                <Link href="tel:+74956379440">
                  <Typography variant="t3" color={palette.main.primary}>+7 (495) 637-94-40 (#342)</Typography>
                </Link>
              </SContactLinkWrap>
              <SContactLinkWrap>
                <img src={mailIcon} alt="Иконка почты"/>
                <Link href="mailto:d.olga@pir.ru">
                  <Typography variant="t3" color={palette.main.primary}>d.olga@pir.ru</Typography>
                </Link>
              </SContactLinkWrap>
            </SContactItem>
            <SContactItem>
              <Typography variant="t1" color={palette.main.primary}>Муханова Яна</Typography>
              <SContactLinkWrap>
                <img src={phoneIcon} alt="Иконка телефона"/>
                <Link href="tel:+74956379440">
                  <Typography variant="t3" color={palette.main.primary}>+7 (495) 637-94-40 (#354)</Typography>
                </Link>
              </SContactLinkWrap>
              <SContactLinkWrap>
                <img src={mailIcon} alt="Иконка почты"/>
                <Link href="mailto:m.yana@pir.ru">
                  <Typography variant="t3" color={palette.main.primary}>m.yana@pir.ru</Typography>
                </Link>
              </SContactLinkWrap>
            </SContactItem>
          </SContactItemWrap>
        </SContactBlock>
        <SContactBlock>
          <Typography variant="t2" color={palette.main.secondary}>
            По вопросам партнерства
          </Typography>
          <SContactItemWrap>
            <SContactItem>
              <Typography variant="t1" color={palette.main.primary}>Снежкова Ольга</Typography>
              <SContactLinkWrap>
                <img src={phoneIcon} alt="Иконка телефона"/>
                <Link href="tel:+74956379440">
                  <Typography variant="t3" color={palette.main.primary}>+7 (495) 637-94-40 (#139)</Typography>
                </Link>
              </SContactLinkWrap>
              <SContactLinkWrap>
                <img src={mailIcon} alt="Иконка почты"/>
                <Link href="mailto:snezhkova@pir.ru">
                  <Typography variant="t3" color={palette.main.primary}>snezhkova@pir.ru</Typography>
                </Link>
              </SContactLinkWrap>
            </SContactItem>
          </SContactItemWrap>
        </SContactBlock>
      </SContactWrap>
    </SContactSection>
  )
}

export default Contacts;
