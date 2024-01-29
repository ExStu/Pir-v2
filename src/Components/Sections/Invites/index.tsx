import {FC, useState} from "react";
import {IInvites, IInvitesItem} from "./types";
import InvitesItem from "@Components/Sections/Invites/InvitesItem";
import Carousel from "@Components/UI/Carousel";
import {SwiperSlide} from "swiper/react";
import {
  SInvites,
  SInvitesModalContent,
  SInvitesModalTabImg,
  SInvitesModalVideoWrap
} from "@Components/Sections/Invites/styled.ts";
import Typography from "@Components/UI/Typography";
import {useTheme} from "@mui/material";
import Modal, {ModalBox} from "@Components/UI/Modal";

const Invites: FC<IInvites> = ({items}) => {

  const {palette} = useTheme()

  const [isOpen, setIsOpen] = useState(false)
  const [useTab, setTab] = useState<IInvitesItem>()

  const handleModal = () => {
    setIsOpen(current => !current)
  }

  const handleSetVideo = (item: IInvitesItem) => {
    setTab(item)
  }

  return (
    <>
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
        <Carousel slidesPerView={3} space={30} className="swiper-invites">
          {items.map((item) => (
              <SwiperSlide key={item.lastName}>
                <InvitesItem
                    firstName={item.firstName}
                    lastName={item.lastName}
                    post={item.post}
                    postDesc={item.postDesc}
                    image={item.image}
                    onOpenModal={handleModal}
                    onSetVideo={() => handleSetVideo(item)}
                />
              </SwiperSlide>
          ))}
        </Carousel>
      </SInvites>
      {isOpen && (
          <Modal open={isOpen} onClose={handleModal}>
            <ModalBox onClose={handleModal}>
              <SInvitesModalContent>
                <SInvitesModalVideoWrap>
                  <video src={useTab?.video} controls/>
                </SInvitesModalVideoWrap>
                <Carousel slidesPerView={3} space={36} modalCustom className="swiper-invites__modal">
                  {items.map((item) => (
                      <SwiperSlide>
                        <SInvitesModalTabImg
                            active={item === useTab}
                            onClick={() => setTab(item)}
                        >
                          <img
                            src={item.image}
                            alt={`Фотография спикера ${item.firstName} ${item.lastName}`}
                          />
                          <Typography
                              variant="t7"
                              color={item == useTab ? palette.main.primary : palette.main.primaryLight}
                          >
                            {item.firstName}<br/>{item.lastName}
                          </Typography>
                        </SInvitesModalTabImg>
                      </SwiperSlide>
                  ))}
                </Carousel>
              </SInvitesModalContent>
            </ModalBox>
          </Modal>
      )}
    </>
  )
}

export default Invites;
