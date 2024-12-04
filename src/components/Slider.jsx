import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import sliderImg1 from "../assets/slider/sliderImg (1).jpg";
import sliderImg2 from "../assets/slider/sliderImg (2).jpg";
import sliderImg3 from "../assets/slider/sliderImg (3).jpg";
import sliderImg4 from "../assets/slider/sliderImg (4).jpg";
import sliderImg5 from "../assets/slider/sliderImg (5).jpg";
import sliderImg6 from "../assets/slider/sliderImg (7).jpg";
import sliderImg7 from "../assets/slider/sliderImg (9).jpg";

const Slider = () => {
  return (
    <div className="w-11/12 mx-auto px-8 my-4">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper rounded-lg h-[450px] overflow-hidden"
      >
        <SwiperSlide>
          <img
            src={sliderImg1}
            alt="Beautiful Slide Image"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={sliderImg2}
            alt="Beautiful Slide Image"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={sliderImg3}
            alt="Beautiful Slide Image"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={sliderImg4}
            alt="Beautiful Slide Image"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={sliderImg5}
            alt="Beautiful Slide Image"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={sliderImg6}
            alt="Beautiful Slide Image"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={sliderImg7}
            alt="Beautiful Slide Image"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
