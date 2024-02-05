import {FC} from "react";
import {SPast, SPastImg} from "./styled";
import Carousel from "@Components/UI/Carousel";
import {SwiperSlide} from "swiper/react";
import Typography from "@Components/UI/Typography";
// <img src="/src/assets/images/past/kaliningrad/k-past-1.webp" alt="123"/>

const Past: FC = () => (
    <SPast>
      <Typography
          textTransform="uppercase"
          variant="h2"
          textAlign="center"
          marginBottom={4}
      >
        Как это было
      </Typography>
      <Carousel slidesPerView={3} space={32} centeredSlides className="swiper-past">
        {
          Array.from(
              { length: 26 },
              (_, i) => (
                  <SwiperSlide key={`past-${i}`}>
                    <SPastImg src={`/src/assets/images/past/kaliningrad/k-past-${i + 1}.webp`} alt="Фотография как это было"/>
                  </SwiperSlide>
              )
          )
        }
      </Carousel>
    </SPast>
)

export default Past;
