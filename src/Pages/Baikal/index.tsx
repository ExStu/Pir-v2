import {FC, useRef} from "react";

import navData from "@const/data/baikal/nav"
import heroImg from "@assets/images/baikal/baikal-hero.webp"
import heroData from "@const/data/baikal/hero"
import awaitsData from "@const/data/baikal/awaits"
import themesData from "@const/data/baikal/themes"
import programData from "@const/data/baikal/program"
import costData from "@const/data/baikal/cost"
import partnersData from "@const/data/baikal/partners"
import placesData from "@const/data/baikal/places"
import speakersData from "@const/data/baikal/speakers"

import Hero from "@Components/Sections/Hero";
import Container from "@Components/Container";
import Header from "@Components/Header";
import Awaits from "@Components/Sections/Awaits";
import Themes from "@Components/Sections/Themes";
import Program from "@Components/Sections/Program";
import Footer from "@Components/Footer";
import Cost from "@Components/Sections/Cost";
import Partners from "@Components/Sections/Partners";
import Contacts from "@Components/Sections/Contacts";
import Places from "@Components/Sections/Places";
import Speakers from "@Components/Sections/Speakers";
import { Helmet } from "react-helmet";
import HeroImg from "@shared/UI/HeroImg";
const Baikal: FC = () => {

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
        <HeroImg img={heroImg}/>
        <Header navItems={navData} invert scrollFn={handleScrollToRef}/>
        <main>
          <Container>
            <Hero
                titles={
                  {place: heroData.place, date: heroData.date}
                }
                onClick={heroData.onClick}
            />
            <Awaits items={awaitsData}/>
            <Themes items={themesData}/>
            <Program items={programData} ref={programRef}/>
            <Places items={placesData}/>
            <Speakers items={speakersData} ref={speakersRef}/>
            <Cost price={costData.price} desc={costData.desc} href={costData.href}/>
            <Partners items={partnersData}/>
          </Container>
          <Container>
            <Contacts/>
          </Container>
        </main>
        <Footer navItems={navData} scrollFn={handleScrollToRef}/>
      </>
  )
}

export default Baikal;
