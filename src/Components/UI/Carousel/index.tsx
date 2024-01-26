import { FC, PropsWithChildren } from 'react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import './styles.css'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper } from 'swiper/react'
import { CarouselBtn } from './CarouselBtn'
import { useCarouselNav } from '@utils/useCarouselNav.ts'
import {SCarousel} from "./styled";

interface ICarousel extends PropsWithChildren<unknown> {
  slidesPerView: number
  space: number
  zoom?: boolean
}

const Carousel: FC<ICarousel> = ({slidesPerView, space, zoom = false, children}) => {

  const [nextEl, nextElRef] = useCarouselNav<HTMLButtonElement>();
  const [prevEl, prevElRef] = useCarouselNav<HTMLButtonElement>();

  return (
      <SCarousel>
        <Swiper
            slidesPerView={slidesPerView}
            spaceBetween={space}
            navigation={{
              prevEl,
              nextEl
            }}
            pagination={{
              dynamicBullets: true
            }}
            speed={500}
            zoom={zoom}
            modules={[Autoplay, Navigation, Pagination]}
            style={{position: "static"}}
        >
          {children}
        </Swiper>
        <CarouselBtn ref={prevElRef} variant='prev'/>
        <CarouselBtn ref={nextElRef} variant='next'/>
      </SCarousel>
  )
}

export default Carousel;