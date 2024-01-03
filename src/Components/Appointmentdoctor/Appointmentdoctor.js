import React, { useEffect, useState } from "react";
import "./appointment.scss";
// import { BiChevronDown }  from "react-icons/bi";
import { BsClock } from "react-icons/bs";
import { BiTime, BiChevronDown } from "react-icons/bi";
import { Link } from "react-router-dom";

const Appointmentdoctor = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTime, setSelectedTime] = useState(null);

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
  return (
    <div className="doctor_appointment_container  flex flex-col  items-center">
      <div className="doctor_detail_banner w-full border-b-[1px] flex items-center justify-center ">
        <div className="doctor_detail_banner_content text-center w-[629px] flex flex-col items-center">
          <h1 className="font-[400] text-[24px] text-[#026E5F]">
            DR. Aisha Tanjina
          </h1>
          <p className="font-[400] text-[24px] text-black">
            Speciality - Associate Consultant, Pediatric CardiologyDegree -
            MBBS, DCH, FCPS (Pediatrics), Trained in Noninvasive Pediatric
            Cardiology (NICVD)
          </p>
          <p className="font-[400] text-[16px] text-black">
            5 year of Experience
          </p>
          <div className="rating mt-[10px]">
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              checked
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
          </div>
        </div>
      </div>

      {/* ------------------------ */}
     
<div className="  mb-9">
<div className="py-6 gap-x-5 flex flex-col lg:flex-row items-center lg:justify-center lg:items-start">
{/* -------------------------------------date section=----------- */}
<div className=" ">
  <p className="py-3 font-[500]" >Choose an appointment Date</p>
                 <input placeholder='Date of Birth' id="date" type="date" class="block  px-4 py-2  text-gray-700 w-[313px] lg:w-[559px] h-[71px] bg-[#e3e3e3] border  rounded-md focus:outline-none "/>
           
            </div>

{/* ---------------------------------- time section -------------- */}
<div className=" h-[600px]   mt-9 lg:mt-0">
  <p className="py-3 font-[500]">Choose an appointment Time</p>
        <div className="absolute  lg:left-[50%] z-50 flex items-center pt-6 pl-5 text-black text-[30px]">
          <BiTime className="text-gray-400" />
        </div>
        <div className="relative ">
          <button
            type="button"
            className="flex  w-[313px] lg:w-[559px] h-[71px] items-center   pl-32 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none   bg-[#e3e3e3]"
            onClick={toggleDropdown}
          >
            {/* {selectedTime ? (
              <span className={`mr-2 ${selectedTime.color}`}>&#9679;</span>
            ) : (
              <span className="mr-2 text-gray-400">&#9679;</span>
            )} */}
            <span className="text-[20px] text-black">{selectedTime ? selectedTime.label : "Select Time"}</span>
          </button>
          {isOpen && (
            <div className="absolute mt-1 w-[313px] lg:w-[300px] bg-white rounded-md shadow-lg">
              {timeOptions.map((option, index) => (
                <button
                  key={index}
                  type="button"
                  className={`block w-full lg:w-[559px] h-[71px]  py-2 px-9  text-[22px] ${option.color} `}
                  onClick={() => handleTimeSelection(option)}
                >
                  {option.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

</div>
<div className="flex justify-end mt-5">
  <Link to='/appointmentform'>
  <button className="rounded-[5px] btn btn-primary w-[166px] bg-[#00A662] border-none hover:bg-[#2fb57d] text-black">Next</button>
  </Link>

</div>
</div>


    </div>
  );
};

export default Appointmentdoctor;
