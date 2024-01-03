import React from 'react';
import { Link } from 'react-router-dom';
import { BsClock } from "react-icons/bs";
import { BiTime, BiChevronDown } from "react-icons/bi";
import { AiOutlineClockCircle } from 'react-icons/ai';
import { SlCallOut } from 'react-icons/sl';
// import { Link } from "react-router-dom";
import img from "../../Assets/heroimage/Ambulance-Services-List-Dhaka-City 1.png";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import {tabthreedata} from '../dummydata'
const AmbulenceMobileCardOne = () => {
    return (
        <div className="block lg:hidden">

<div div className="flex gap-x-3 ">
    {
      tabthreedata.map((val=>{
        return(
<div className="card bg-white w-[285px]   rounded-lg border-[1px] border-gray-300">
        <div className="top">
          <img
            className="w-[285px] h-[213px] object-cover  p-2"
            src={img}
            alt="img"
          />
        </div>
        <div className="bottom flex flex-col justify-start items-start ">
       <div className="pl-3">

       <div className="title text-[16px] font-[400]  my-1">
          Emergency Ambulence
          </div>
          <div className="category text-[26px] font-[600]  my-1">
          3000 tk

          </div>

          <div className="flex items-center gap-[8px] text-[#026E5F]">
            <AiOutlineClockCircle/>
          <p className="text-[18px] font-[600] leading-[42.66px] text-[#00A662]">24 Hour Service</p>

          </div>
       </div>
          <div className=" pt-4  w-[90%] mx-auto">
            <button className="flex items-center justify-center gap-x-2 w-full border bg-[#026E5F] px-3 py-1 text-[20px] h-[41px] rounded-md text-white ">
            <SlCallOut/>
            01709786464
            </button>
            <div className="border-[1px] border-black mt-3 rounded-md">
            <button className="w-full h-[41px]   px-3 py-1 text-[16px]">
            Book Now
            </button>
            </div>
          </div>
        </div>
      </div>
        )
      }))
    }
      
    </div>

   </div>
    );
};

export default AmbulenceMobileCardOne;