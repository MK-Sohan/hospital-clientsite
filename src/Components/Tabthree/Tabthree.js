import React, { useState } from "react";
import "./tabthree.scss";
import img from "../../Assets/heroimage/Ambulance-Services-List-Dhaka-City 1.png";
import icon from "../../Assets/icons/Group 9.png";
import { AiOutlineClockCircle } from "react-icons/ai";
import { SlCallOut } from "react-icons/sl";
import { Link } from "react-router-dom";
import img1 from "../../Assets/doctors/ambulance.png";
const Tabthree = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <div>
      <div className="bg-gray-100 py-10">
        <div className="  tabthree_main_container" id="findAmbulence">
          <div className="title text-center text-[30px] font-bold py-3">
            <h1>Book an Ambulance</h1>
          </div>

          <div className="containerr pt-[23px]">
            <div className="flex flex-col-reverse items-center lg:flex-row lg:justify-center lg:items-center lg:gap-[210px]">
              <div className="call_emergency_image  border-dashed border-2 w-[530px]  rounded-full flex justify-center items-center h-[530px]">
                <img
                  className="animate-bounce w-[219px] lg:w-[466px]"
                  src={img1}
                  alt=""
                />
              </div>
              <div className="call_emergency_details lg:text-start text-center">
                <h1 className="text-[22px] lg:text-[32px] font-[400] lg:w-[450px]    break-normal mb-[10px]">
                  Call an Emergency Ambulence
                </h1>
                <div className="">
                  <li>These include the vehicle cab and chassis</li>
                  <li>Warning lights and sirens</li>
                  <li>Radios</li>
                  <li>Most electrical system components</li>
                  <li>The heating and air conditioning components</li>
                  <li>The oxygen system components</li>
                  <li>
                    arious body trim pieces like windows, latches, handles, and
                    hinges.
                  </li>
                </div>
                <div className="hidden  lg:flex items-center gap-[8px] text-[#026E5F]">
                  <AiOutlineClockCircle />
                  <p className="text-[18px] font-[600] leading-[42.66px] text-[#00A662]">
                    24 Hour Service
                  </p>
                </div>

                <div className="mt-5 lg:mt-0 mt- flex flex-col items-center lg:flex-row justify-start lg:items-start gap-[12px] py-5">
                  <Link to="/ambulanceDetails">
                    <button className=" w-[314px] lg:w-[210px] flex items-center justify-center gap-[13px] text-white text-[20px] font-[500] red py-[12px]  rounded-md ">
                      See All Ambulance
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ---------------------------Mobile View------------ */}

      <div className="block lg:hidden"></div>
    </div>
  );
};

export default Tabthree;
