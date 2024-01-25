import {FC} from "react";
import {IProjects} from "./types.ts";
import {SProjectsList, SProjectsSection} from "./styled.ts";
import ProjectItem from "@Components/Sections/Home/Projects/ProjectItem";

const Projects: FC<IProjects> =  ({items}) => {
  return (
    <SProjectsSection>
      <SProjectsList>
        {items.map((item) => (
            <ProjectItem key={item.date} route={item.route} date={item.date} title={item.title} image={item.image}/>
        ))}
      </SProjectsList>
    </SProjectsSection>
  )
}

export default Projects;
