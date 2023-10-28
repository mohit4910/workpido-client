import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Box, Image } from "@chakra-ui/react";
import { Navigation, Pagination } from "swiper/modules";

export default function ImageSlider({ images = [], height }) {
  return (
    <>
      <Swiper
        // navigation={true}
        pagination={{
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 2500,
          //   disableOnInteraction: false,
        }}
        modules={[
          Pagination,
          // Navigation
        ]}
        className="mySwiper"
      >
        {images?.map((imageUrl, key) => (
          <SwiperSlide key={key}>
            <Slide imageUrl={imageUrl} height={height} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

const Slide = ({ imageUrl, height }) => {
  return (
    <Image
      src={imageUrl}
      alt="Example"
      w={"full"}
      maxH={height || "40"}
      objectFit={"cover"}
      objectPosition={'top'}
    />
  );
};
