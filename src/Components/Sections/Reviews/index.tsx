import {FC} from "react";
import {SReviews} from "./styled";
import Typography from "@Components/UI/Typography";
import {IReviews} from "./types";
import Carousel from "@Components/UI/Carousel";
import {SwiperSlide} from "swiper/react";
import ReviewItem from "@Components/Sections/Reviews/ReviewItem";

const Reviews: FC<IReviews> = ({items}) => (
    <SReviews>
      <Typography
          textTransform="uppercase"
          variant="h2"
          textAlign="center"
          marginBottom={4}
      >
        Отзывы
      </Typography>
      <Carousel slidesPerView={1} space={32} className="swiper-reviews">
        {items.map((item) => (
            <SwiperSlide>
              <ReviewItem
                  name={item.name}
                  post={item.post}
                  review={item.review}
                  link={item.link}
              />
            </SwiperSlide>
        ))}
      </Carousel>
    </SReviews>
)

export default Reviews;
