import {FC} from "react";
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
import Awaits from "@Components/Sections/Awaits";
import Themes from "@Components/Sections/Themes";
import Invites from "@Components/Sections/Invites";
import Program from "@Components/Sections/Program";
import Footer from "@Components/Footer";
import Cost from "@Components/Sections/Cost";
import Partners from "@Components/Sections/Partners";
import Contacts from "@Components/Sections/Contacts";
import Places from "@Components/Sections/Places";
// import {useTheme} from "@mui/material";

const TyumenTobolsk: FC = () => {

  // const {palette} = useTheme()
  // TODO:
  // hero hover

  return (
    <>
      <SHeroImgWrap>
        <SHeroImg src={heroImg}/>
      </SHeroImgWrap>
      <Container>
        <Header navItems={navData} invert/>
        <Hero
          titles={
            {place: heroData.place, date: heroData.date}
          }
          onClick={heroData.onClick}
        />
        <Awaits items={awaitsData}/>
        <Themes items={themesData}/>
        <Invites items={invitesData}/>
        <Program items={programData}/>
        <Places items={placesData}/>
        {/* speakers here */}
        <Cost price={costData.price} desc={costData.desc} href={costData.href}/>
        <Partners items={partnersData}/>
        <Contacts/>
      </Container>
      <Footer/>
    </>
  )
}

export default TyumenTobolsk;