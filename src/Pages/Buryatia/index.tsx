import {FC, useRef} from "react";

import navData from "@const/data/buryatia/nav"
import heroImg from "@assets/images/buryatia/buryatia-hero.webp"
import heroData from "@const/data/buryatia/hero"
import themesData from "@const/data/buryatia/themes"
import invitesData from "@const/data/buryatia/invites"
import programData from "@const/data/buryatia/program"
import partnersData from "@const/data/buryatia/partners"
import placesData from "@const/data/buryatia/places"
import speakersData from "@const/data/buryatia/speakers"
import reviewsData from "@const/data/buryatia/reviews"
import pastData from "@const/data/buryatia/past"

import Container from "@Components/Container";
import Header from "@Components/Header";
import Hero from "@Components/Sections/Hero";
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
const Buryatia: FC = () => {

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
          <title>Полезные Каникулы Отельера | Республика Бурятия</title>
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

export default Buryatia;
