import {FC, useRef} from "react";
import Container from "@Components/Container";
import Header from "@Components/Header";
import navData from "@const/data/tyumenTobolsk/nav"
import {SHeroImg, SHeroImgWrap} from "./styled";
import heroImg from "@assets/images/tyumenTobolsk/tumen-hero.webp"
import Hero from "@Components/Sections/Hero";
import heroData from "@const/data/tyumenTobolsk/hero"
import awaitsData from "@const/data/tyumenTobolsk/awaits"
import themesData from "@const/data/tyumenTobolsk/themes"
import invitesData from "@const/data/tyumenTobolsk/invites"
import programData from "@const/data/tyumenTobolsk/program"
import costData from "@const/data/tyumenTobolsk/cost"
import partnersData from "@const/data/tyumenTobolsk/partners"
import placesData from "@const/data/tyumenTobolsk/places"
import speakersData from "@const/data/tyumenTobolsk/speakers"
import reviewsData from "@const/data/kaliningrad/reviews"
import Awaits from "@Components/Sections/Awaits";
import Themes from "@Components/Sections/Themes";
import Invites from "@Components/Sections/Invites";
import Program from "@Components/Sections/Program";
import Footer from "@Components/Footer";
import Cost from "@Components/Sections/Cost";
import Partners from "@Components/Sections/Partners";
import Contacts from "@Components/Sections/Contacts";
import Places from "@Components/Sections/Places";
import Speakers from "@Components/Sections/Speakers";
import Past from "@Components/Sections/Past";
import Reviews from "@Components/Sections/Reviews";
// import {useTheme} from "@mui/material";
import { Helmet } from "react-helmet";
const TyumenTobolsk: FC = () => {

  // TODO:
  // hero hover

  const programRef = useRef<HTMLElement>(null)
  const speakersRef = useRef<HTMLElement>(null)
  const allRefs = [programRef, speakersRef]

  const handleScrollToRef = (href: string) => {
    for(const ref of allRefs) {
      if(ref.current?.id === href.slice(1)){
        ref.current?.scrollIntoView({
          behavior: "smooth"
        })
      }
    }
  }

  return (
    <>
      <Helmet>
        <title>Полезные Каникулы Отельера | Байкал</title>
      </Helmet>
      <SHeroImgWrap>
        <SHeroImg src={heroImg} alt="Фотография Тюмени" className="baikal-hero__img"/>
      </SHeroImgWrap>
      <Container>
        <Header navItems={navData} invert scrollFn={handleScrollToRef}/>
        <Hero
          titles={
            {place: heroData.place, date: heroData.date}
          }
          onClick={heroData.onClick}
        />
        <Awaits items={awaitsData}/>
        <Themes items={themesData}/>
        <Invites items={invitesData}/>
        <Program items={programData} ref={programRef}/>
        <Places items={placesData}/>
        <Speakers items={speakersData} ref={speakersRef}/>
        <Cost price={costData.price} desc={costData.desc} href={costData.href}/>
        <Partners items={partnersData}/>
      </Container>
      <Past/>
      <Reviews items={reviewsData}/>
      <Container>
        <Contacts/>
      </Container>
      <Footer navItems={navData} scrollFn={handleScrollToRef}/>
    </>
  )
}

export default TyumenTobolsk;
