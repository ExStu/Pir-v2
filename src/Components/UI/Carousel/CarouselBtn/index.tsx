import { forwardRef } from 'react'
import ArrowLeft from "@shared/UI/Icons/ArrowLeft";
import ArrowRight from "@shared/UI/Icons/ArrowRight";
import {SCarouselBtn} from "./styled";
import {ICarouselBtn} from "./types";
export const CarouselBtn = forwardRef<HTMLButtonElement, ICarouselBtn>((
    { variant,
        modalCustom,
      ...props },
    ref) => (


      <SCarouselBtn
          className="carousel-btn"
          disabled={props.disabled}
          ref={ref}
          {...props}
          sx={variant === "next" ? {right: modalCustom ? "27%" : "40%"} : {left: modalCustom ? "27%" : "40%"}}
      >
        {variant === 'next' ? (
            <ArrowRight/>
        ) : (
            <ArrowLeft/>
        )}
      </SCarouselBtn>
));