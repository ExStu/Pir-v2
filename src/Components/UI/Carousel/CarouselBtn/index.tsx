import { forwardRef } from 'react'
import ArrowLeft from "@shared/UI/Icons/ArrowLeft";
import ArrowRight from "@shared/UI/Icons/ArrowRight";
import {SCarouselBtn} from "./styled";
import {ICarouselBtn} from "./types";
import {useMediaQuery, useTheme} from "@mui/material";
export const CarouselBtn = forwardRef<HTMLButtonElement, ICarouselBtn>((
    { variant,
        modalCustom,
      ...props },
    ref) => {

  const {breakpoints} = useTheme()
  const isTablet = useMediaQuery(breakpoints.up("md"))
  const isMobile = useMediaQuery(breakpoints.down("sm"))

  return (


      <SCarouselBtn
          className="carousel-btn"
          disabled={props.disabled}
          ref={ref}
          {...props}
          sx={variant === "next" ? {right: modalCustom ? "27%" : isMobile ? 0 : isTablet ? "40%" : "34%"} : {left: modalCustom ? "27%" : isMobile ? 0 : isTablet ? "40%" : "34%"}}
      >
        {variant === 'next' ? (
            <ArrowRight/>
        ) : (
            <ArrowLeft/>
        )}
      </SCarouselBtn>
  )
});