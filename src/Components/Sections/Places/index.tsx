import {FC, useState} from "react";
import {IPlaces} from "./types";
import {SPlaces, SPlacesChipWrap} from "./styled";
import Typography from "@Components/UI/Typography";
import Chip from "@Components/UI/Chip";
import {CustomTabPanel} from "@Components/UI/TabsCustom/CustomTabPanel.tsx";
import PlacesTab from "@Components/Sections/Places/PlacesTab";
import Carousel from "@Components/UI/Carousel";
import {SwiperSlide} from "swiper/react";
import {motion} from "framer-motion"
import {placesItemAnimation, tabContentAnimation} from "@Components/Sections/Places/animations.ts";

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
          <Chip component="button" active={useTab === "hotels"} onClick={() => setTab("hotels")} label="Отели"/>
          <Chip component="button" active={useTab === "restaurants"} onClick={() => setTab("restaurants")} label="Рестораны" />
          <Chip component="button" active={useTab === "other"} onClick={() => setTab("other")} label="Другое"/>
        </SPlacesChipWrap>
        <CustomTabPanel index="hotels" value={useTab}>
          <motion.div
              variants={tabContentAnimation}
              initial="hidden"
              animate="visible"
          >
            <Carousel slidesPerView={3} space={20} className="swiper-places-hotels">
              {items.map((item) => (
                  item.category === "hotels" && (
                      <SwiperSlide key={item.id}>
                        <motion.div variants={placesItemAnimation}>
                          <PlacesTab
                              id={item.id}
                              category={item.category}
                              title={item.title}
                              img={item.img}
                              href={item.href}
                              rating={item.rating}
                          />
                        </motion.div>
                      </SwiperSlide>
                  )
              ))}
            </Carousel>
          </motion.div>
        </CustomTabPanel>
        <CustomTabPanel index="restaurants" value={useTab}>
          <motion.div
              variants={tabContentAnimation}
              initial="hidden"
              animate="visible"
          >
            <Carousel slidesPerView={3} space={20} className="swiper-places-restaurants">
              {items.map((item) => (
                  item.category === "restaurants" && (
                      <SwiperSlide key={item.id}>
                        <motion.div variants={placesItemAnimation}>
                          <PlacesTab
                              id={item.id}
                              category={item.category}
                              title={item.title}
                              img={item.img}
                              href={item.href}
                              rating={item.rating}
                          />
                        </motion.div>
                      </SwiperSlide>
                  )
              ))}
            </Carousel>
          </motion.div>
        </CustomTabPanel>
        <CustomTabPanel index="other" value={useTab}>
          <motion.div
              variants={tabContentAnimation}
              initial="hidden"
              animate="visible"
          >
            <Carousel slidesPerView={3} space={20} className="swiper-places-other">
              {items.map((item) => (
                  item.category === "other" && (
                      <SwiperSlide key={item.id}>
                        <motion.div variants={placesItemAnimation}>
                          <PlacesTab
                              id={item.id}
                              category={item.category}
                              title={item.title}
                              img={item.img}
                              href={item.href}
                              rating={item.rating}
                          />
                        </motion.div>
                      </SwiperSlide>
                  )
              ))}
            </Carousel>
          </motion.div>
        </CustomTabPanel>
      </SPlaces>
  )
}

export default Places;
