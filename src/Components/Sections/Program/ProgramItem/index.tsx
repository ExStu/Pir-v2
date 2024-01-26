import {FC} from "react";
import {IProgramItem} from "../types";
import {SProgramItem, SProgramItemTime} from "@Components/Sections/Program/ProgramItem/styled.ts";
import Typography from "@Components/UI/Typography";

const ProgramItem: FC<IProgramItem> = ({time, program}) => (
    <SProgramItem>
      <SProgramItemTime>
        <Typography variant="t2">{time}</Typography>
      </SProgramItemTime>
      <Typography variant="t3">{program}</Typography>
    </SProgramItem>
)

export default ProgramItem;