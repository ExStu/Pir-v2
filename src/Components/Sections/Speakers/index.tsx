import {forwardRef} from "react";
import {ISpeakers} from "./types";
import {SSpeakers} from "./styled";
import Typography from "@Components/UI/Typography";
import Carousel from "@Components/UI/Carousel";
import {SwiperSlide} from "swiper/react";
import SpeakersItem from "@Components/Sections/Speakers/SpeakersItem";

const Speakers = forwardRef<HTMLElement, ISpeakers>(({items }, ref) => {
  return (
      <SSpeakers id="speakers" ref={ref}>
        <Typography
            variant="h2"
            marginBottom={5}
            textAlign="center"
            textTransform="uppercase"
        >
          Спикеры
        </Typography>
        <Carousel slidesPerView={4} space={32} className="swiper-speakers">
          {items.map((item) => (
              <SwiperSlide key={item.id}>
                <SpeakersItem
                    id={item.id}
                    firstName={item.firstName}
                    lastName={item.lastName}
                    post={item.post}
                    img={item.img}
                />
              </SwiperSlide>
          ))}
        </Carousel>
      </SSpeakers>
  )
});

export default Speakers;
