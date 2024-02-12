import {FC} from "react";
import {ISpeakersItem} from "../types.ts";
import {SSpeakersItem, SSpeakersItemImg, SSpeakersPost} from "./styled.ts";
import Typography from "@Components/UI/Typography";

const SpeakersItem: FC<ISpeakersItem> = ({firstName, lastName, post, img}) => {
  return (
      <SSpeakersItem>
        <SSpeakersItemImg src={img} alt={firstName + " " + lastName}/>
        <Typography variant="h3">{firstName}<br/>{lastName}</Typography>
        <SSpeakersPost variant="t5">{post}</SSpeakersPost>
      </SSpeakersItem>
  )
}

export default SpeakersItem;
