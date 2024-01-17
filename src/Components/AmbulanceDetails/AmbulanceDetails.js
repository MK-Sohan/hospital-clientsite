import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BsClock } from "react-icons/bs";
import { BiTime, BiChevronDown } from "react-icons/bi";
import { AiOutlineClockCircle } from "react-icons/ai";
import { SlCallOut } from "react-icons/sl";
// import { Link } from "react-router-dom";
import img from "../../Assets/heroimage/Ambulance-Services-List-Dhaka-City 1.png";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { tabthreedata } from "../dummydata";
import "./ambulanceDetails.scss";
import AmbulenceMobileCardOne from "./AmbulenceMobileCardOne";
const AmbulanceDetails = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTime, setSelectedTime] = useState(null);
  const [ambulance, setAmbulance] = useState([]);
  const [noneAcambulance, setNoneacAmbulance] = useState([]);

  useEffect(() => {
    fetch("https://hospital-server-tau.vercel.app/allAmbulance")
      .then((res) => res.json())
      .then((data) => setAmbulance(data));
  }, []);
  useEffect(() => {
    fetch("https://hospital-server-tau.vercel.app/noneacAmbulances")
      .then((res) => res.json())
      .then((data) => setNoneacAmbulance(data));
  }, []);
  // console.log(ambulance);
  function makePhoneCall(phoneNumber) {
    window.location.href = `tel:${phoneNumber}`;
  }

  const timeOptions = [
    { label: "9:00 AM", color: "bg-[#CFCFCF]" },
    { label: "10:00 AM", color: "bg-white" },
    { label: "11:00 AM", color: "bg-[#CFCFCF]" },
    { label: "12:00 PM", color: "bg-white" },
    { label: "1:00 PM", color: "bg-[#CFCFCF]" },
    { label: "2:00 PM", color: "bg-white" },
    { label: "3:00 PM", color: "bg-[#CFCFCF]" },
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleTimeSelection = (time) => {
    setSelectedTime(time);
    setIsOpen(false);
  };
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const scrollLeft = () => {
    document.getElementById("ambulence").scrollLeft -= 200;
  };
  const scrollRight = () => {
    document.getElementById("ambulence").scrollLeft += 200;
  };

  const scrollLeft2 = () => {
    document.getElementById("ambulence2").scrollLeft -= 200;
  };
  const scrollRight2 = () => {
    document.getElementById("ambulence2").scrollLeft += 200;
  };

  const scrollLeft3 = () => {
    document.getElementById("ambulence3").scrollLeft -= 200;
  };
  const scrollRight3 = () => {
    document.getElementById("ambulence3").scrollLeft += 200;
  };

  return (
    <div className="ambulance_details_container_wrapper">
      {/* ----------------------- Ambulence Tab Section----------- */}

      <div className="hidden lg:block">
        <div className="containerr pt-[23px] ">
          <div className="bloc-tabs  ">
            <button
              className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(1)}
            >
              AC
            </button>
            <button
              className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(2)}
            >
              Non Ac
            </button>
          </div>

          <div className="content-tabs">
            <div
              className={
                toggleState === 1 ? "content  active-content" : "content"
              }
            >
              {ambulance.map((val) => {
                return (
                  <div className="bg-[#EBEAEA] mt-6 flex lg:max-w-[1200px] lg:mx-auto lg:w-full   p-2 items-center gap-[10px] border-[1px] border-black">
                    <div className="call_emergency_image  lg:w-[460px] lg:h-[345px]">
                      <img
                        className="lg:w-[460px] lg:h-[345px]"
                        src={val.image}
                        alt=""
                      />
                    </div>
                    <div className="call_emergency_details  ml-5">
                      <div className="flex items-center mb-[10px] lg:w-full lg:justify-between">
                        <h1 className="lg:text-[25px] font-[700] break-normal ">
                          Call an Emergency Ambulence
                        </h1>
                        <h1 className="lg:text-[1vw] font-[600] break-normal ">
                          {val.price} ৳
                        </h1>
                      </div>
                      <div className="mr-10 w-[574px]">
                        <h1 className="text-[20px] font-bold  flex gap-x-3 ">
                          Type : <p className="uppercase">{val.type}</p>
                        </h1>
                      </div>
                      <div className="mr-10 w-[574px]">
                        <h1 className="text-[20px] font-bold">Details :</h1>
                        <p>{val.about}</p>
                      </div>
                      <div className="flex items-center gap-[8px] text-[#026E5F]">
                        <AiOutlineClockCircle />
                        <p className="text-[18px] font-[600] leading-[42.66px] text-[#00A662]">
                          24 Hour Service
                        </p>
                      </div>

                      <div className="flex items-center gap-[12px]">
                        <button className="w-[210px] flex items-center justify-center gap-[13px] text-white text-[20px] font-[500] bg-red-600 py-[12px]  rounded-md">
                          <a
                            href="tel:01780605388"
                            style={{ textDecoration: "none", color: "inherit" }}
                            className="flex items-center justify-center gap-x-2"
                          >
                            <SlCallOut />
                            01780605388
                          </a>
                        </button>

                        {/* <Link to="/ambulancebookNowDetails">
                          <button className="outline_button">Book Now</button>
                        </Link> */}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div
              className={
                toggleState === 2 ? "content  active-content" : "content"
              }
            >
              {noneAcambulance.map((val) => {
                return (
                  <div className="bg-[#EBEAEA] mt-6 flex lg:max-w-[1200px] lg:mx-auto lg:w-full   p-2 items-center gap-[10px] border-[1px] border-black">
                    <div className="call_emergency_image  lg:w-[460px] lg:h-[345px]">
                      <img
                        className="lg:w-[460px] lg:h-[345px]"
                        src={val.image}
                        alt=""
                      />
                    </div>
                    <div className="call_emergency_details  ml-5">
                      <div className="flex items-center mb-[10px] lg:w-full lg:justify-between">
                        <h1 className="lg:text-[25px] font-[700] break-normal ">
                          Call an Emergency Ambulence
                        </h1>
                        <h1 className="lg:text-[1vw] font-[600] break-normal ">
                          {val.price} ৳
                        </h1>
                      </div>
                      <div className="mr-10 w-[574px]">
                        <h1 className="text-[20px] font-bold  flex gap-x-3 ">
                          Type : <p className="uppercase">{val.type}</p>
                        </h1>
                      </div>
                      <div className="mr-10 w-[574px]">
                        <h1 className="text-[20px] font-bold">Details :</h1>
                        <p>{val.about}</p>
                      </div>
                      <div className="flex items-center gap-[8px] text-[#026E5F]">
                        <AiOutlineClockCircle />
                        <p className="text-[18px] font-[600] leading-[42.66px] text-[#00A662]">
                          24 Hour Service
                        </p>
                      </div>

                      <div className="flex items-center gap-[12px]">
                        <button
                          className="w-[210px] flex items-center justify-center gap-[13px] text-white text-[20px] font-[500] bg-[#026E5F] py-[12px] rounded-md"
                          onClick={() => makePhoneCall(val.phone)}
                        >
                          {val.phone}
                        </button>

                        {/* <Link to="/ambulancebookNowDetails">
                          <button className="outline_button">Book Now</button>
                        </Link> */}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* ------------------------- tab Mobile section---------------------- */}

      <div className="relative block lg:hidden">
        <div className="text-center py-4  text-xl font-bold">ICU</div>
        <div className="absolute right-0 top-5 ">
          <button
            onClick={scrollLeft}
            className="p-2 m-2 rounded-full bg-white"
          >
            <FiChevronLeft />
          </button>
          <button
            onClick={scrollRight}
            className="p-2 m-2 rounded-full bg-white"
          >
            <FiChevronRight />
          </button>
        </div>
        <div
          id="ambulence"
          className="carousel p-4 flex items-center justify-start overflow-x-auto scroll-smooth  scrollbar-hide"
        >
          <div>
            <AmbulenceMobileCardOne />
          </div>
        </div>
      </div>

      {/* ============================================================ */}
      <div className="relative block lg:hidden mt-10 ">
        <div className="text-center py-4  text-xl font-bold">AC</div>
        <div className="absolute right-0 top-5 ">
          <button
            onClick={scrollLeft2}
            className="p-2 m-2 rounded-full bg-white"
          >
            <FiChevronLeft />
          </button>
          <button
            onClick={scrollRight2}
            className="p-2 m-2 rounded-full bg-white"
          >
            <FiChevronRight />
          </button>
        </div>
        <div
          id="ambulence2"
          className="carousel p-4 flex items-center justify-start overflow-x-auto scroll-smooth  scrollbar-hide"
        >
          <div>
            <AmbulenceMobileCardOne />
          </div>
        </div>
      </div>

      {/* ============================================================ */}
      <div className="relative block lg:hidden mt-10 mb-16">
        <div className="text-center py-4  text-xl font-bold">NON AC</div>
        <div className="absolute right-0 top-5 ">
          <button
            onClick={scrollLeft3}
            className="p-2 m-2 rounded-full bg-white"
          >
            <FiChevronLeft />
          </button>
          <button
            onClick={scrollRight3}
            className="p-2 m-2 rounded-full bg-white"
          >
            <FiChevronRight />
          </button>
        </div>
        <div
          id="ambulence3"
          className="carousel p-4 flex items-center justify-start overflow-x-auto scroll-smooth  scrollbar-hide"
        >
          <div>
            <AmbulenceMobileCardOne />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AmbulanceDetails;
