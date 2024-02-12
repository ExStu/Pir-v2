import {FC} from "react";
import {SReviews} from "./styled";
import Typography from "@Components/UI/Typography";
import {IReviews} from "./types";
import Carousel from "@Components/UI/Carousel";
import {SwiperSlide} from "swiper/react";
import ReviewItem from "@Components/Sections/Reviews/ReviewItem";
import {useMediaQuery, useTheme} from "@mui/material";

const Reviews: FC<IReviews> = ({items}) => {
  const {breakpoints} = useTheme()
  const isMobile = useMediaQuery(breakpoints.down("sm"))

  return (
      <SReviews>
        <Typography
            textTransform="uppercase"
            variant="h2"
            textAlign="center"
            marginBottom={4}
        >
          Отзывы
        </Typography>
        <Carousel slidesPerView={isMobile ? 1 : 2} space={isMobile ? 16 : 32} centeredSlides={!isMobile} className="swiper-reviews">
          {items.map((item) => (
              <SwiperSlide key={item.name}>
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
}

export default Reviews;
