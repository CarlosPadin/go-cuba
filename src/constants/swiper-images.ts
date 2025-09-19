import beach from "@/public/swiper slides/beach.jpg";
import cars from "@/public/swiper slides/parked cars.jpg";
import havana from "@/public/swiper slides/havana cars.jpg";
import hotel from "@/public/swiper slides/hotel nacional.jpg";
import malecon from "@/public/swiper slides/malecon.jpg";
import { swiperImg } from "../interfaces";

export const swiperImages: swiperImg[] = [
  {
    url: cars,
    alt: "Parked Cars",
  },
  {
    url: malecon,
    alt: "Malecon",
  },
  {
    url: hotel,
    alt: "Hotel Nacional",
  },
  {
    url: havana,
    alt: "Havana Cars",
  },
  {
    url: beach,
    alt: "Beach",
  },
]