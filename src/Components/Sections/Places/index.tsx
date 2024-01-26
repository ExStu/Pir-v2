import {FC, useState} from "react";
import {IPlaces} from "./types";
import {SPlaces, SPlacesChipWrap} from "./styled";
import Typography from "@Components/UI/Typography";
import Chip from "@Components/UI/Chip";
import {CustomTabPanel} from "@Components/UI/TabsCustom/CustomTabPanel.tsx";
import Carousel from "@Components/UI/Carousel";
import {SwiperSlide} from "swiper/react";

const Places: FC<IPlaces> = ({items}) => {

  const [useTab, setTab] = useState("hotels")

  return (
      <SPlaces>
        <Typography
            textTransform="uppercase"
            variant="h2"
            textAlign="center"
            marginBottom={4}
        >
          Что посещаем
        </Typography>
        <SPlacesChipWrap>
          <Chip isActive={useTab === "hotels"} onClick={() => setTab("hotels")} label="Отели"/>
          <Chip isActive={useTab === "restaurants"} onClick={() => setTab("restaurants")} label="Рестораны" />
          <Chip isActive={useTab === "other"} onClick={() => setTab("other")} label="Другое"/>
        </SPlacesChipWrap>
        <CustomTabPanel index="hotels" value={useTab}>
          {items.map((item) => (
              item.category === "hotels" && (
                  <Carousel slidesPerView={3} space={20}>
                    <SwiperSlide key={item.id}>
                      <img src={item.img} alt={item.title}/>
                      {item.title}
                      {item.rating}
                      {item.href}
                    </SwiperSlide>
                  </Carousel>
              )
          ))}
        </CustomTabPanel>
        <CustomTabPanel index="restaurants" value={useTab}>
          {items.map((item) => (
              item.category === "restaurants" && (
                  <Carousel slidesPerView={3} space={20}>
                    <SwiperSlide style={{display: "flex", flexDirection: "column"}} key={item.id}>
                      <img src={item.img} alt={item.title}/>
                      {item.title}
                      {item.rating}
                      {item.href}
                    </SwiperSlide>
                  </Carousel>
              )
          ))}
        </CustomTabPanel>
        <CustomTabPanel index="other" value={useTab}>
          {items.map((item) => (
              item.category === "other" && (
                  <Carousel slidesPerView={3} space={20}>
                    <SwiperSlide key={item.id}>
                      <img src={item.img} alt={item.title}/>
                      {item.title}
                      {item.rating}
                      {item.href}
                    </SwiperSlide>
                  </Carousel>
              )
          ))}
        </CustomTabPanel>
      </SPlaces>
  )
}

export default Places;
