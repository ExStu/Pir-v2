import {FC} from "react";
import {ISpeakersItem} from "../types.ts";
import {SSpeakersItem, SSpeakersItemImg} from "./styled.ts";
import Typography from "@Components/UI/Typography";

const SpeakersItem: FC<ISpeakersItem> = ({firstName, lastName, post, img}) => {
  return (
      <SSpeakersItem>
        <SSpeakersItemImg src={img} alt={firstName + " " + lastName}/>
        <Typography variant="h3">{firstName}<br/>{lastName}</Typography>
        <Typography variant="t5">{post}</Typography>
      </SSpeakersItem>
  )
}

export default SpeakersItem;
