import {FC} from "react";
import {SPast, SPastImg} from "./styled";
import Carousel from "@Components/UI/Carousel";
import {SwiperSlide} from "swiper/react";
import Typography from "@Components/UI/Typography";
import {useMediaQuery, useTheme} from "@mui/material";

interface IPast {
  place: string
  length: number
}

const Past: FC<IPast> = ({place, length}) => {
  const {breakpoints} = useTheme()
  const isTablet = useMediaQuery(breakpoints.up("md"))
  const isMobile = useMediaQuery(breakpoints.down("sm"))
  return (
      <SPast>
        <Typography
            textTransform="uppercase"
            variant="h2"
            textAlign="center"
            marginBottom={4}
        >
          Как это было
        </Typography>
        <Carousel slidesPerView={isMobile ? 1 :!isTablet ? 1.5 : 2.5} space={isMobile ? 16 : 32} centeredSlides={!isMobile} className="swiper-past">
          {
            Array.from(
                { length: length },
                (_, i) => (
                    <SwiperSlide key={`past-${i}`}>
                      <SPastImg src={`/src/assets/images/past/${place}/past-${i + 1}.webp`} alt="Фотография как это было"/>
                    </SwiperSlide>
                )
            )
          }
        </Carousel>
      </SPast>
  )
}

export default Past;
