import Modal, { modalClasses } from "@mui/material/Modal";
import mq from "@shared/themes/breakpoints.ts";
import {styled} from "@mui/material/styles";

export const ModalCustom = styled(Modal)(
    ({
       theme: {
         palette,
       }
     }) => mq({
      [`&.${modalClasses.root}`]: {
        backgroundColor: palette.uncategorized.borderWhite,
        overflowY: "auto",
        display: "grid",
        gridTemplateRows: "0px 3fr 0px",
        justifyContent: "center",
      }
    }),
);

export const SModalBox = styled("div")(
    () =>
        mq({
          alignSelf: "center",
          width: "100%",
          height: "fit-content",
          maxWidth: ["100%", "832px"],
          padding: "0 16px",
          margin: "32px 0"
        }),
);

export const SModalContainer = styled("div")(({theme: {palette}}) => mq({
  position: "relative",
  borderRadius: ["12px", "16px"],
  padding: ["16px", "40px"],
  background: palette.main.white,

  "& .carousel-btn": {
    top: "137.5%",
    "& svg": {
      width: "32px",
      height: "32px"
    }
  },

  "& .swiper-pagination-fraction, .swiper-pagination-custom, .swiper-horizontal > .swiper-pagination-bullets, .swiper-pagination-bullets.swiper-pagination-horizontal": {
    bottom: "-40%"
  }

}));

export const SModalCloseBtn = styled("div")(() => mq({
  position: "absolute",
  top: 20,
  right: 20,
}));
