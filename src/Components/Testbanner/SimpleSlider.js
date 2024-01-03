import React, { Component, useState } from "react";
import Slider from "react-slick";
import img1 from "../../Assets/backgroundimages/8008d4a6cfc9f7c1_org 1.png";
import img2 from "../../Assets/bannerimage/1669977714154women-health-inner-banner1 1.jpg";
import "./simpleslider.scss";

const SimpleSlider = () => {
  const [backgroundImage, setBackgroundImage] = useState(img1, img2);

  const handleImageChange = (image) => {
    setBackgroundImage(image);
  };
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
    cssEase: "linear",
  };
  return (
    <div>
      <div className="simple_slider">
        <Slider {...settings}>
          <div className="bgimage">{/* <img src={img1} alt="" /> */}</div>
          <div>{/* <img src={img1} alt="" /> */}</div>
        </Slider>
      </div>
    </div>
  );
};

export default SimpleSlider;
