import { forwardRef } from 'react'
import ArrowLeft from "@shared/UI/Icons/ArrowLeft";
import ArrowRight from "@shared/UI/Icons/ArrowRight";
import {SCarouselBtn} from "./styled";
import {ICarouselBtn} from "./types";
export const CarouselBtn = forwardRef<HTMLButtonElement, ICarouselBtn>((
    { variant,
      ...props },
    ref) => (


      <SCarouselBtn disabled={props.disabled} ref={ref} {...props} sx={variant === "next" ? {right: "40%"} : {left: "40%"}}>
        {variant === 'next' ? (
            <ArrowRight/>
        ) : (
            <ArrowLeft/>
        )}
      </SCarouselBtn>
));