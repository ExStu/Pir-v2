import {FC} from "react";
import {IProjects} from "./types.ts";
import {SProjectsList, SProjectsSection} from "./styled.ts";
import ProjectItem from "@Components/Sections/Home/Projects/ProjectItem";
import {SContactTitle} from "@Components/Sections/Contacts/styled.ts";
import {useTheme} from "@mui/material";

const Projects: FC<IProjects> =  ({items}) => {
  const {palette} = useTheme()
  return (
    <SProjectsSection>
      <SContactTitle
          variant="h2"
          color={palette.main.primary}
          textAlign="center"
          textTransform="uppercase"
      >
        Наши проекты
      </SContactTitle>
      <SProjectsList>
        {items.map((item) => (
            <ProjectItem key={item.date} route={item.route} date={item.date} title={item.title} image={item.image}/>
        ))}
      </SProjectsList>
    </SProjectsSection>
  )
}

export default Projects;
