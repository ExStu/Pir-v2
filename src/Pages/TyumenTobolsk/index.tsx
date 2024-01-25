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
import Awaits from "@Components/Sections/Awaits";
import Themes from "@Components/Sections/Themes";
import Invites from "@Components/Sections/Invites";
import Program from "@Components/Sections/Program";
import Footer from "@Components/Footer";
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
      </Container>
      <Footer/>
    </>
  )
}

export default TyumenTobolsk;
