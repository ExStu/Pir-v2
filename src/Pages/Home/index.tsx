import {FC} from "react";
import Container from "@Components/Container";
import Header from "@Components/Header";
import homeNavData from "@const/data/home/nav";
import homeProjects from "@const/data/home/projects";
import HomeHero from "@Components/Sections/Home/Hero";
import Projects from "@Components/Sections/Home/Projects";
import Contacts from "@Components/Sections/Contacts";
import Footer from "@Components/Footer";

const Home: FC = () => {
  return (
    <>
      <Container>
        <Header navItems={homeNavData}/>
        <main>
          <HomeHero/>
          <Projects items={homeProjects}/>
          <Contacts/>
        </main>
      </Container>
      <Footer navItems={homeNavData}/>
    </>

  )
}

export default Home;