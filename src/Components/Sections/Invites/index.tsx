import {FC} from "react";
import {IInvites} from "./types";
import InvitesItem from "@Components/Sections/Invites/InvitesItem";
import Carousel from "@Components/UI/Carousel";
import {SwiperSlide} from "swiper/react";
import {SInvites} from "@Components/Sections/Invites/styled.ts";
import Typography from "@Components/UI/Typography";
import {useTheme} from "@mui/material";

const Invites: FC<IInvites> = ({items}) => {

  const {palette} = useTheme()

  // const [isOpen, setIsOpen] = useState(false)

  // const handleModal = () => {
  //   setIsOpen(current => !current)
  // }

  return (
    <SInvites>
      <Typography
          marginBottom={5}
          variant="h2"
          color={palette.main.primary}
          textAlign="center"
          textTransform="uppercase"
      >
        Приглашения от экспертов
      </Typography>
      <Carousel slidesPerView={3} space={30}>
        {items.map((item) => (
            <SwiperSlide key={item.lastName}>
              <InvitesItem
                  firstName={item.firstName}
                  lastName={item.lastName}
                  post={item.post}
                  postDesc={item.postDesc}
                  image={item.image}
              />
            </SwiperSlide>
        ))}
      </Carousel>
    </SInvites>
  )
}

export default Invites;
