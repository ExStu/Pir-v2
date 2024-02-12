// hotels
import hotelMergenBator from "@assets/images/places/hotel-mergenBator.webp"
import hotelBaikalPlaza from "@assets/images/places/hotel-baikalPlaza.webp"
import hotelBaikalRiviera from "@assets/images/places/hotel-baikalRiviera.webp"
import hotelOrda from "@assets/images/places/hotel-orda.webp"
import hotelSagaanMorin from "@assets/images/places/hotel-sagaanMorin.webp"
import hotelTaiga from "@assets/images/places/hotel-taiga.webp"
// restaurants
import restaurantMergen from "@assets/images/places/restaurant-mergen.webp"
import restaurantTengis from "@assets/images/places/restaurant-tengis.webp"
import restaurantOrda from "@assets/images/places/restaurant-orda.webp"
// other
import otherDozan from "@assets/images/places/other-ivolginskiyDozan.webp"
import otherOzeroBaikal from "@assets/images/places/other-ozeroBaikal.webp"

export default [
  // hotels
  {
    id: 1,
    category: "hotels",
    title: "Гостиница «МЭРГЭН БАТОР»",
    href: "https://mergenbator.ru/",
    rating: 5,
    img: hotelMergenBator
  },
  {
    id: 2,
    category: "hotels",
    title: "Гостиница «Байкал Плаза»",
    href: "https://baikalplaza.com/",
    rating: 4,
    img: hotelBaikalPlaza
  },
  {
    id: 3,
    category: "hotels",
    title: "Гостиница «Байкальская Ривьера»",
    href: "https://baikalriviera.ru/",
    rating: 3,
    img: hotelBaikalRiviera
  },
  {
    id: 4,
    category: "hotels",
    title: "Гостиница «Орда»",
    href: "https://orda-hotel.ru/",
    rating: 3,
    img: hotelOrda
  },
  {
    id: 5,
    category: "hotels",
    title: "Гостиница «Сагаан Морин»",
    href: "https://sagaan-morin.ru/",
    rating: 4,
    img: hotelSagaanMorin
  },
  {
    id: 6,
    category: "hotels",
    title: "Апарт-отель «Тайга»",
    img: hotelTaiga
  },
  // restaurants
  {
    id: 7,
    category: "restaurants",
    title: "Ресторан «МЭРГЭН»",
    href: "http://xn--c1arek8dc.xn--p1ai/index.wbp",
    img: restaurantMergen
  },
  {
    id: 8,
    category: "restaurants",
    title: "Ресторан «Тэнгис»",
    href: "https://tengis.ru/",
    img: restaurantTengis
  },
  {
    id: 9,
    category: "restaurants",
    title: "Ресторан «ОРДА»",
    href: "https://orda03.ru/",
    img: restaurantOrda
  },
  // other
  {
    id: 10,
    category: "other",
    title: "Иволгинский дацан",
    href: "https://ivolgdatsan.ru/",
    img: otherDozan
  },
  {
    id: 11,
    category: "other",
    title: "Озеро Байкал, Чивыркуйский залив",
    img: otherOzeroBaikal
  },
]