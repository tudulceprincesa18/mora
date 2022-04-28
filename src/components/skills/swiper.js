import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";


import "swiper/css";
import "swiper/css/pagination";
import "./index.css";
import { Pagination } from "swiper";

export default function Swipers() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="uno"> Html5</SwiperSlide>
        <SwiperSlide className="dos"> Css3 </SwiperSlide>
        <SwiperSlide className="siete"> Javascript</SwiperSlide>
        <SwiperSlide className="tres"> React.js </SwiperSlide>
        <SwiperSlide className="cuatro"> Styled components </SwiperSlide>
        <SwiperSlide className="cinco"> TypeScript </SwiperSlide>
        <SwiperSlide className="seis"> Chakra ui</SwiperSlide>
      </Swiper>
    </>
  );
}