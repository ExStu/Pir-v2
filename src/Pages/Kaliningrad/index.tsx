import {FC, useRef} from "react";

import navData from "@const/data/kaliningrad/nav"
import heroImg from "@assets/images/kaliningrad/kaliningrad-hero.webp"
import heroData from "@const/data/kaliningrad/hero"
import themesData from "@const/data/kaliningrad/themes"
import invitesData from "@const/data/kaliningrad/invites"
import programData from "@const/data/kaliningrad/program"
import partnersData from "@const/data/kaliningrad/partners"
import placesData from "@const/data/kaliningrad/places"
import speakersData from "@const/data/kaliningrad/speakers"
import reviewsData from "@const/data/kaliningrad/reviews"
import pastData from "@const/data/kaliningrad/past"

import Hero from "@Components/Sections/Hero";
import Container from "@Components/Container";
import Header from "@Components/Header";
import Themes from "@Components/Sections/Themes";
import Invites from "@Components/Sections/Invites";
import Program from "@Components/Sections/Program";
import Footer from "@Components/Footer";
import Partners from "@Components/Sections/Partners";
import Contacts from "@Components/Sections/Contacts";
import Places from "@Components/Sections/Places";
import Speakers from "@Components/Sections/Speakers";
import Past from "@Components/Sections/Past";
import Reviews from "@Components/Sections/Reviews";
import { Helmet } from "react-helmet";
import HeroImg from "@shared/UI/HeroImg";
const Kaliningrad: FC = () => {

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
          <title>Полезные Каникулы Отельера | Калининград</title>
        </Helmet>
        <HeroImg img={heroImg}/>
        <Header navItems={navData} invert scrollFn={handleScrollToRef}/>
        <main>
          <Container>
            <Hero
                titles={
                  {place: heroData.place, date: heroData.date}
                }
            />
            <Themes items={themesData}/>
            <Invites items={invitesData}/>
            <Program items={programData} ref={programRef}/>
            <Places items={placesData}/>
            <Speakers items={speakersData} ref={speakersRef}/>
            <Partners items={partnersData}/>
          </Container>
          <Past list={pastData}/>
          <Reviews items={reviewsData}/>
          <Container>
            <Contacts/>
          </Container>
        </main>
        <Footer navItems={navData} scrollFn={handleScrollToRef}/>
      </>
  )
}

export default Kaliningrad;
