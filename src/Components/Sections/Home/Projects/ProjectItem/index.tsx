import {FC} from "react";
import {IProjectItem} from "@Components/Sections/Home/Projects/types.ts";
import {SProjectItem, SProjectItemBtn, STextWrap} from "./styled.ts";
import Typography from "@Components/UI/Typography";
import {useTheme} from "@mui/material";
import {useNavigate} from "react-router-dom";

const ProjectItem: FC<IProjectItem> = ({date, title, image, route}) => {

  const {palette} = useTheme()
  const navigate = useNavigate()

  return (
    <SProjectItem image={image}>
      <STextWrap>
        <Typography variant="t2" color={palette.main.background} textAlign="center" textTransform="uppercase">
          {date}
        </Typography>
        <Typography variant="h3" color={palette.main.background} textAlign="center" textTransform="uppercase">
          {title}
        </Typography>
      </STextWrap>
      <SProjectItemBtn disabled={!route} onClick={route ? () => navigate(route) : () => {}} variant="outlined" size="large">
        <Typography variant="t2" color={palette.main.primary}>
          {route ? "Подробнее" : "Скоро"}
        </Typography>
      </SProjectItemBtn>
    </SProjectItem>
  )
}

export default ProjectItem;
