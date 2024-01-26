import {FC} from "react";
import {SwiperSlide} from "swiper/swiper-react";
import Carousel from "@Components/UI/Carousel";
import {IPlacesItem} from "../../types.ts";

const Hotels: FC<IPlacesItem> = ({img, title, rating, href}) => (
    <Carousel slidesPerView={3} space={20}>
      <SwiperSlide>
        <img src={img} alt={title}/>
        {title}
        {rating}
        {href}
      </SwiperSlide>
    </Carousel>
)

export default Hotels;
