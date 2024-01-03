import React from "react";
import img from "../../Assets/heroimage/Ambulance-Services-List-Dhaka-City 1.png";
import { Link } from "react-router-dom";

const AmbulanceBooknowDetails = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-x-7 py-16">
      <div className=" shadow-3xl left_side lg:w-[542px] mb-5 lg:mb-0 h-[157px] border-[1.5px] border-t-0 border-[#6C6C6C] rounded-[5px] ">
        <div className="h-[59px] bg-[#CCCCCC] text-center rounded-[5px] flex items-center justify-center">
          <h1 className=" text-black text-[20px] font-[500]">
            Ambulance Details
          </h1>
        </div>
        <div className="flex items-center justify-between px-3 py-3">
          <img className="h-[75px] w-[99px]" src={img} alt="" />
          <div className="details">
            <p>Address : Mohakhali, dhaka</p>
            <p>Date : 3/19/2023 at 9:00am- 10:00am</p>
            <p>Rent : 3000 Taka</p>
          </div>
        </div>
      </div>
      <div className="lg:w-[963px] w-[98%] px-3 right_side border-[1px] border-[#ABABAB] p-4 shadow-xl">
        <p className="  w-full text-[20px] text-black font-[600]  ">
          Payment Details
        </p>
        <div className="costs flex items-center justify-between">
          <div className="">
            <div className="">Cost :</div>
            <div className="">Discount:</div>
            <div className="">Advance Payment :</div>
          </div>
          <div className="">
            <div className="">300</div>
            <div className="">0</div>
            <div className="">0</div>
          </div>
        </div>
        <div className="input_field flex items-center py-4">
          <input
            className="p-2 focus:outline-none border-[1px] border-[#ABABAB] w-full h-[35px] lg:w-[32.300000000000004vw]"
            type="text"
            name=""
            id=""
          />
          <button className="bg-[#FFE07D] w-[100px]  h-[35px] lg:w-[180px]">
            Apply
          </button>
        </div>
        <div className="costs flex items-center justify-between font-[700] text-black text-[22px]">
          <div className="">Total</div>
          <div className=""> 3000 tk</div>
        </div>
        <Link to="/checkout">
          <button className="bg-[#00A662] text-white h-[56px] text-[22px] w-full mt-6">
            Check out
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AmbulanceBooknowDetails;
