import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "./style.css";
import { Navigation, Pagination, Autoplay, FreeMode, Keyboard } from "swiper";
import "swiper/css/navigation";
import sliderIcon1 from "../../Assets/icons/hospitaldetailicons/1.png";
import sliderIcon2 from "../../Assets/icons/hospitaldetailicons/2.png";
import sliderIcon3 from "../../Assets/icons/hospitaldetailicons/3.png";
import sliderIcon4 from "../../Assets/icons/hospitaldetailicons/4.png";

export default function SimpleSlider() {
  const sliderContent = [
    { img: sliderIcon1, length: 80, title: "Doctor’s" },
    { img: sliderIcon2, length: 120, title: "Consultation Rooms" },
    { img: sliderIcon3, length: 500, title: "In Patients Bed" },
    { img: sliderIcon4, length: 2500, title: "Staff" },
    { img: sliderIcon2, length: 2500, title: "Staff" },
    { img: sliderIcon1, length: 2500, title: "Staff" },
    { img: sliderIcon3, length: 2500, title: "Staff" },
    { img: sliderIcon4, length: 2500, title: "Staff" },
  ];
  return (
    <div className=" simple_slider_main_container py-5 lg:py-0">
      <Swiper
        cssMode={true}
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        freeMode={true}
        // loop={true}
        navigation={true}
        // pagination={{
        //   clickable: true,
        // }}
        // modules={[Navigation, FreeMode, Pagination]}
        modules={[Navigation, Autoplay, FreeMode, Keyboard]}
        className="mySwiper"
      >
        {sliderContent.map((s) => (
          <SwiperSlide className=" backImage border-[1px] border-slate-300 rounded-sm  ">
            <div className="slider_content   py-8 ">
              {/* slider img */}
              <div className="slider_icons  ">
                <img
                  className=" lg:h-[40px]  mx-auto"
                  src={s.img}
                  loading="lazy"
                  alt="loading"
                />
              </div>
              <div className="text-white w-full">
                <p>{s.length}</p>
                <p>{s.title}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
