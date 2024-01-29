import {FC} from "react";
import {IInvitesItem} from "../types";
import {
  SInvitesItem,
  SInvitesItemCover,
  SInvitesItemDecor,
  SInvitesItemImgWrap,
  SInvitesItemTop,
  SInvitesPlay
} from "./styled";
import holidaysLogo from "@assets/logos/holidays-logo-primary.svg"
import Typography from "@Components/UI/Typography";
import {useTheme} from "@mui/material";
import Play from "@shared/UI/Icons/Play";

const InvitesItem: FC<IInvitesItem> = (
    {firstName,
      lastName,
      post,
      postDesc,
      onSetVideo,
      image,
      onOpenModal}
) => {

  const {palette} = useTheme()

  const handleOnPlay = () => {
    onOpenModal()
    onSetVideo()
  }

  return (
      <SInvitesItem>
        <SInvitesItemTop>
          <img src={holidaysLogo} alt="Логотип - Полезные Каникулы Отельера"/>
          <SInvitesItemDecor/>
        </SInvitesItemTop>
        <SInvitesItemImgWrap>
          <img className="invites__img" src={image} alt={firstName + " " + lastName}/>
        </SInvitesItemImgWrap>
        <Typography textAlign="center" variant="t4" color={palette.main.primary}>{postDesc}</Typography>
        <SInvitesItemCover>
          <Typography variant="h4" sx={{fontSize: "20px"}}
                      color={palette.main.primary}>{firstName + " " + lastName}</Typography>
          <Typography variant="t5" color={palette.main.primary}>{post}</Typography>
        </SInvitesItemCover>
        <SInvitesPlay className="invites__play-btn" onClick={handleOnPlay}>
          <Play/>
          <Typography variant="t5" color={palette.main.white}>Смотреть видео</Typography>
        </SInvitesPlay>
      </SInvitesItem>
  )
}

export default InvitesItem;
