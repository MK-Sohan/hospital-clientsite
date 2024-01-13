import React, { useState, useEffect } from "react";
import bannerimg from "../../Assets/bannerimage/1.jpg";
import bannerimg2 from "../../Assets/bannerimage/3.jpg";
import bannerimg3 from "../../Assets/bannerimage/4.jpg";
import bannerimg4 from "../../Assets/bannerimage/6.jpg";
import bannerimgmobile from "../../Assets/bannerimage/2.jpg";
import "./secondBanner.scss";
import icon1 from "../../Assets/bannericon/1.png";
import icon2 from "../../Assets/bannericon/2.png";
import icon3 from "../../Assets/bannericon/3.png";
import icon4 from "../../Assets/bannericon/4.png";
import icon5 from "../../Assets/bannericon/5.png";
import icon6 from "../../Assets/bannericon/6.png";
import Dropdown from "../Banner/Dropdown";
import { Link } from "react-router-dom";
import "./secondBanner.scss";
const SecontBanner = () => {
  const [currentIndex, setCurrentIndex] = useState(0); // State to track current image index
  const images = [bannerimg, bannerimg2, bannerimg3, bannerimg4]; // Array of background images
  const mobileimages = [
    bannerimgmobile,
    bannerimgmobile,
    bannerimgmobile,
    bannerimgmobile,
  ]; // Array of background images

  // Function to update the current image index
  const updateIndex = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    // Automatically change the image every 3 seconds
    const interval = setInterval(updateIndex, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
    // Close the modal
    toggleModal();
  };

  return (
    <div className="Secound_banner_container_wrapper h-[70vh]">
      <div className="hidden h-[100%] lg:block relative secondbanner_container py-5">
        {/* Sliding background image */}
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              className="w-full h-full object-cover"
              src={image}
              alt="Background"
            />
          </div>
        ))}

        {/* Left section with text */}
        <div className="relative flex w-full justify-evenly items-center pt-[100px]">
          <div className="lg:text-left">
            <div class="banner_left_side ">
              <h1 class=" text-start text-2xl lg:text-2xl lg:w-[100%] font-bold lg:mb-[30px] text-white">
                We Provide The Best Hospital Service. Why Trust Us?
              </h1>
              {/* ------------------------------dropdown------------------------------------- */}

              <Dropdown />

              {/* ----------------------------------dropdown end -------------------- */}
            </div>
          </div>

          {/* -----------------banner right side-------------- */}
          <div class="banner_right_side flex flex-col items-center   gap-4 lg:flex-row  ">
            <div class="banner_sub_left_side  flex flex-col gap-3">
              <a
                href="#doctorappointment"
                class="banner_card w-[15vw] h-auto flex justify-evenly px-[20px] py-[20px] rounded items-center gap-3 bg-red-600   text-white"
              >
                <div class="hover:animate-spin banner_card_chield_img bg-white h-[80px] w-[80px] rounded-full flex justify-center items-center">
                  <img src={icon1} alt="" />
                </div>
                <div class="banner_card_details w-[70px] text-[1.0999999999999999vw] font-bold">
                  Find <br /> A Best Doctor
                </div>
              </a>

              <a
                href="#findAmbulence"
                class=" banner_card w-[15vw] h-auto flex justify-evenly px-[20px] py-[20px] rounded items-center gap-3 bg-red-600  text-white"
              >
                <div class="hover:animate-spin banner_card_chield_img bg-white  h-[80px] w-[80px] rounded-full flex justify-center items-center ">
                  <img className=" " src={icon5} alt="" />
                </div>
                <div class="banner_card_details w-[106px] text-[1.0999999999999999vw] font-bold">
                  24 Hour Ambulance Service
                </div>
              </a>
            </div>
            <div class="banner_sub_middle_side  flex  flex-col gap-3">
              <a
                href="#tabTwo"
                class="banner_card w-[15vw] h-auto flex justify-evenly px-[20px] py-[20px] rounded items-center gap-3 bg-red-600  text-white"
              >
                <div class=" hover:animate-spin banner_card_chield_img bg-white  h-[80px] w-[80px] rounded-full flex justify-center items-center">
                  <img src={icon4} alt="" />
                </div>
                <div class="banner_card_details w-[70px] text-[1.0999999999999999vw] font-bold">
                  Medicine Ordering Service
                </div>
              </a>

              <a
                href="#bloodbank"
                class="banner_card w-[15vw] h-[140px] flex justify-evenly px-[20px] py-[20px] rounded items-center gap-3 bg-red-600  text-white"
              >
                <div class=" hover:animate-spin banner_card_chield_img bg-white h-[80px] w-[80px] rounded-full flex justify-center items-center">
                  <img className="" src={icon2} alt="" />
                </div>
                <div class="banner_card_details w-[73px] text-[1.0999999999999999vw] font-bold">
                  Blood Bank
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ---------------------------mobile Responsive------------- */}

      <div className="block lg:hidden">
        <div className="mobile_Banner_section">
          {mobileimages.map((image, index) => (
            <div
              key={index}
              className={`absolute w-full transition-opacity duration-1000 ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                className="w-full  object-contain"
                src={image}
                alt="Background"
              />
            </div>
          ))}

          <div className="relative flex w-full justify-center py-5  ">
            <div className="lg:text-left">
              <div class="banner_left_side ">
                <h1 class="mt-[2px] text-start text-[16px] lg:text-2xl lg:w-[460px] font-bold lg:mb-[30px]">
                  We Provide The Best Hospital Service. <br /> Why Trust Us?
                </h1>
                {/* ------------------------------dropdown------------------------------------- */}

                <Dropdown />

                {/* ----------------------------------dropdown end -------------------- */}
              </div>
            </div>
          </div>
        </div>

        <div className="Mobile_card_section flex flex-col items-center justify-center mt-7">
          <div className="  w-[309px] h-[56px] rounded-[30px] bg-[#91C1BB] flex justify-center items-center">
            Find A Best Doctor
          </div>
          <div className=" mt-2 w-[309px] h-[56px] rounded-[30px] bg-white border-[1px] border-[#91C1BB] flex justify-center items-center">
            Online Appointment Service
          </div>
          <div className=" mt-2 w-[309px] h-[56px] rounded-[30px] bg-[#91C1BB] flex justify-center items-center">
            Best Diagnostic Service
          </div>
          <div className=" mt-2 w-[309px] h-[56px] rounded-[30px] bg-white border-[1px] border-[#91C1BB] flex justify-center items-center">
            24 Hour Telemedicine Service
          </div>
          <div className=" mt-2 w-[309px] h-[56px] rounded-[30px] bg-[#91C1BB] flex justify-center items-center">
            Book For A Surgery
          </div>

          <div className=" mt-2 w-[309px] h-[56px] rounded-[30px] bg-white border-[1px] border-[#91C1BB] flex justify-center items-center">
            24 Hour Ambulance Service
          </div>
          <div className=" mt-2 w-[309px] h-[56px] rounded-[30px] bg-[#91C1BB] flex justify-center items-center">
            Medicine Ordering Service
          </div>
          <div className=" mt-2 w-[309px] h-[56px] rounded-[30px] bg-white border-[1px] border-[#91C1BB] flex justify-center items-center">
            See All Package
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecontBanner;
