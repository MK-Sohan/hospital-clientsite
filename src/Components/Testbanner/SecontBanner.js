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
              <Link
                to="/doctors"
                class="banner_card w-[15vw] h-auto flex justify-evenly px-[20px] py-[20px] rounded items-center gap-3 bg-red-600   text-white"
              >
                <div class="banner_card_chield_img bg-white h-[80px] w-[80px] rounded-full flex justify-center items-center">
                  <img src={icon1} alt="" />
                </div>
                <div class="banner_card_details w-[70px] text-[1.0999999999999999vw] font-bold">
                  Find <br /> A Best Doctor
                </div>
              </Link>

              <a
                href="#findAmbulence"
                class="banner_card w-[15vw] h-auto flex justify-evenly px-[20px] py-[20px] rounded items-center gap-3 bg-red-600  text-white"
              >
                <div class="banner_card_chield_img bg-white  h-[80px] w-[80px] rounded-full flex justify-center items-center ">
                  <img className=" " src={icon3} alt="" />
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
                <div class="banner_card_chield_img bg-white  h-[80px] w-[80px] rounded-full flex justify-center items-center">
                  <img src={icon4} alt="" />
                </div>
                <div class="banner_card_details w-[70px] text-[1.0999999999999999vw] font-bold">
                  Medicine Ordering Service
                </div>
              </a>

              <a
                href="#packages"
                class="banner_card w-[15vw] h-auto flex justify-evenly px-[20px] py-[20px] rounded items-center gap-3 bg-red-600  text-white"
              >
                <div class="banner_card_chield_img bg-white h-[80px] w-[80px] rounded-full flex justify-center items-center">
                  <img src={icon1} alt="" />
                </div>
                <div class="banner_card_details w-[73px] text-[1.0999999999999999vw] font-bold">
                  See <br />
                  All Package
                </div>
              </a>
            </div>
            <div class="banner_sub_right_side  flex  flex-col gap-3">
              {/* ======================= modal Container start============================== */}

              <button
                onClick={toggleModal}
                class="banner_card w-[15vw] gap-x-5 h-auto flex  px-[20px] py-[20px] rounded items-center gap-3 bg-red-600  text-white"
              >
                <div class="banner_card_chield_img bg-white h-[80px] w-[80px] rounded-full flex justify-center items-center ">
                  <img className=" " src={icon3} alt="" />
                </div>
                <div class="banner_card_details w-[70px] text-[1.0999999999999999vw] font-bold">
                  Online Appointment Service
                </div>
              </button>
              {isOpen && (
                <div className="fixed inset-0 flex  justify-center z-50 overflow-auto">
                  {/* <div className="absolute inset-0 bg-black opacity-50"></div> */}
                  <div className="relative z-10   rounded-md shadow-lg">
                    <button
                      onClick={toggleModal}
                      className="absolute top-3 right-3 z-50 p-1 bg-gray-300 rounded-md"
                    >
                      <svg
                        className="w-4 h-4 text-gray-700"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 6.707a1 1 0 011.414 0L10 8.586l3.293-3.293a1 1 0 011.414 1.414L11.414 10l3.293 3.293a1 1 0 01-1.414 1.414L10 11.414l-3.293 3.293a1 1 0 01-1.414-1.414L8.586 10 5.293 6.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                    <div className="relative z-10 bg-[#242424] p-6 text-white   rounded-md shadow-lg">
                      <h2 className="text-xl font-bold text-center pt-2">
                        Request a Surgery
                      </h2>
                      <div className="">
                        <p className="font-[600] text-[20px] text-white">
                          Patient Information
                        </p>
                        <p className="font-[500] mt-1 text-[20px] text-white">
                          Patient Status
                        </p>
                        <div className="flex items-center gap-x-6">
                          <p className="font-[500] text-[20px] text-white ">
                            {" "}
                            I am a
                          </p>
                          <div className="flex items-center gap-x-3">
                            <input type="radio" name="" id="" />
                            <p className="font-[500]  text-[20px] text-white">
                              New Patient
                            </p>
                          </div>
                          <div className="flex items-center gap-x-3">
                            <input type="radio" name="" id="" />
                            <p className="font-[500] text-[20px] text-white">
                              New Patient
                            </p>
                          </div>
                        </div>
                      </div>
                      <form className="mt-3" onSubmit={handleSubmit}>
                        <div className="input_first_mother_container flex gap-x-3">
                          <div className="input_container_one">
                            <div className="single_container_one w-[300px]">
                              <div>
                                <input
                                  placeholder="Name"
                                  type="text"
                                  id="name"
                                  name="name"
                                  value={formData.name}
                                  onChange={handleChange}
                                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                              </div>

                              <div>
                                <select class="block w-full px-4 py-2 mt-2  bg-white   rounded-md  text-gray-500 focus:outline-none ">
                                  <option>Gender</option>
                                  <option>Male</option>
                                  <option>Female</option>
                                </select>
                              </div>
                              <div>
                                <select class="block w-full px-4 py-2 mt-2  bg-white   rounded-md  text-gray-500 focus:outline-none ">
                                  <option>Marital Status</option>
                                  <option>Single</option>
                                  <option>Married</option>
                                </select>
                              </div>
                              <div className="mt-2">
                                <input
                                  placeholder="Write Your Problem"
                                  type="text"
                                  id="name"
                                  name="name"
                                  value={formData.name}
                                  onChange={handleChange}
                                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="input_container_two">
                            <div className="single_container_one w-[300px]">
                              <div>
                                <select class="block w-full px-4 py-2  bg-white   rounded-md  text-gray-500 focus:outline-none ">
                                  <option>Age</option>
                                  <option>20</option>
                                  <option>30</option>
                                </select>
                              </div>
                              <div className="mt-2">
                                <input
                                  placeholder="Name"
                                  type="text"
                                  id="name"
                                  name="name"
                                  value={formData.name}
                                  onChange={handleChange}
                                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                              </div>
                              <div className="mt-2">
                                <input
                                  placeholder="Name"
                                  type="text"
                                  id="name"
                                  name="name"
                                  value={formData.name}
                                  onChange={handleChange}
                                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                              </div>
                              <div className="mt-2">
                                <input
                                  placeholder="Prescription"
                                  type="file"
                                  id="name"
                                  name="name"
                                  value={formData.name}
                                  onChange={handleChange}
                                  className="w-full px-4 py-2 border  border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="input_container_three">
                            <div className="w-[300px]">
                              <input
                                placeholder="Date of Birth"
                                id="date"
                                type="date"
                                class="block w-full px-4 py-2  text-gray-700 bg-white border  rounded-md focus:outline-none "
                              />
                            </div>

                            <div className="mt-2">
                              <input
                                placeholder="Email"
                                type="text"
                                id="name"
                                name="Email"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                              />
                            </div>
                            <div className="mt-2">
                              <input
                                placeholder="Permanent Address"
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="mb-0 ">
                          <label
                            htmlFor="message"
                            className="block mb-2 font-medium"
                          >
                            Message
                          </label>
                          <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full h-[58px] px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            rows="4"
                          ></textarea>
                        </div>

                        <div className="surgery_information">
                          <p className="font-[600]  text-[20px] text-white">
                            Surgery Information
                          </p>
                          <div className="surgery_input flex gap-x-8 ">
                            <div className="w-[360px]">
                              <select class="block w-full px-4 py-2 mt-0  bg-white   rounded-md  text-gray-500 focus:outline-none ">
                                <option>DEPARTMENT</option>
                                <option>Surgery</option>
                                <option>Medicine</option>
                              </select>
                            </div>
                            <div className="w-[300px]">
                              <input
                                placeholder="Date of Birth"
                                id="date"
                                type="date"
                                class="block w-full px-4 py-2  text-gray-700 bg-white border  rounded-md focus:outline-none "
                              />
                            </div>
                            <div className="w-[300px]">
                              <input
                                placeholder="Date of Birth"
                                id="date"
                                type="time"
                                class="block w-full px-4 py-2  text-gray-700 bg-white border  rounded-md focus:outline-none "
                              />
                            </div>
                          </div>
                        </div>
                        <div className="">
                          <p className="font-[600] mt-1 text-[20px] text-white">
                            Doctor referral letter
                          </p>
                          <div className=" w-[364px]">
                            <input
                              placeholder="Permanent Address"
                              type="text"
                              id="name"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                          </div>
                        </div>
                        <div className="flex justify-center mt-5">
                          <button
                            type="submit"
                            className="px-4 py-2  bg-[#00DC82] text-black w-[318px] h-[53px]  rounded-[33.5px]"
                          >
                            Confirm
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              )}

              {/* ======================= modal Container end============================== */}

              <a
                href="#telemedicine"
                class="banner_card w-full max-w-[15vw] h-auto flex justify-evenly px-[20px] py-[20px] rounded items-center gap-3 bg-red-600  text-white"
              >
                <div class="banner_card_chield_img bg-white h-[80px] w-[80px] rounded-full flex justify-center items-center">
                  <img src={icon6} alt="" />
                </div>
                <div class="banner_card_details w-[70px] text-[1.0999999999999999vw] font-bold">
                  Find A Best Nurse
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
