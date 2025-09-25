"use client";
import Image from "next/image";
import { FC } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Navigation,
  EffectFade,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "./swiper-styles.css";
import { swiperImages } from "@/src/constants";

const ImageCarousel: FC = () => {
  return (
    <Swiper
      modules={[Navigation, Autoplay, EffectFade]}
      loop={true}
      effect={"fade"}
      className="mySwiper"
      autoplay={{
        delay: 8000,
        disableOnInteraction: false,
      }}
    >
      {swiperImages.map((image) => (
        <SwiperSlide key={image.alt}>
          <Image src={image.url} alt={image.alt} fill />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageCarousel;
