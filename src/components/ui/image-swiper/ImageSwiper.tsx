"use client";
import { FC } from "react";
import Image from "next/image";

import { Box } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./swiper-styles.css";
import { ICarImage } from "@/src/interfaces";
import { useResponsive } from "@/src/hooks";

const ImageSwiper: FC<{ images: ICarImage }> = ({
  images,
}) => {
  const { isMobile, isTablet } = useResponsive();

  return (
    <Box
      height={400}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Swiper
        slidesPerView={isMobile ? 1 : isTablet ? 2 : 3}
        spaceBetween={5}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {[images.mainImage, ...images.images].map(
          (image, index) => (
            <SwiperSlide key={index + image}>
              <Image
                src={image}
                alt={index + image}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />
            </SwiperSlide>
          )
        )}
      </Swiper>
    </Box>
  );
};

export default ImageSwiper;
