import React, { useState } from "react";
import img1 from "../../Assets/heroimage/Ambulance-Services-List-Dhaka-City 1.png";
import img from "../../Assets/heroimage/Ambulance-Services-List-Dhaka-City 1.png";
import icon from "../../Assets/icons/Group 9.png";
import payImage1 from "../../Assets/PaymentImage/bkash 1.png";
import payImage2 from "../../Assets/PaymentImage/dutch-bangla-rocket-logo-B4D1CC458D-seeklogo 1.png";

import payImage3 from "../../Assets/PaymentImage/download (2) 1.png";

import payImage4 from "../../Assets/PaymentImage/upay 1.png";

import { AiOutlineClockCircle } from "react-icons/ai";
import { SlCallOut } from "react-icons/sl";
import { Link } from "react-router-dom";
import "./checkoutTab.scss";
const Checkout = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <div className="checkout_parent_container_wrapper py-10 px-2 lg:px-0">
      <div className=" flex flex-col lg:flex-row items-center lg:items-start justify-center gap-x-8 ">
        <div className="lg:hidden mb-6 block shadow-3xl left_side  border-[1.5px] border-t-0 border-[#6C6C6C] rounded-[5px] ">
          <div className="h-[59px] bg-[#CCCCCC] text-center rounded-[5px] flex items-center justify-center">
            <h1 className=" text-black text-[20px] font-[500]">
              Ambulance Details
            </h1>
          </div>
          <div className="flex items-center justify-between px-3 py-3">
            <img className="h-[75px] w-[99px]" src={img1} alt="" />
            <div className="details">
              <p>Address : Mohakhali, dhaka</p>
              <p>Date : 3/19/2023 at 9:00am- 10:00am</p>
              <p>Rent : 3000 Taka</p>
            </div>
          </div>
        </div>
        <div class="form_section w-[98%]  lg:max-w-[963px]">
          <form class="bg-white shadow-md w-full rounded border-[1px] border-[#6C6C6C] px-8 pt-6 pb-8 mb-4">
            <p className=" w-full text-[20px] text-black font-[600]  ">
              Personal Details
            </p>

            <div class="mb-4">
              <label
                class="block text-gray-700  text-sm font-bold mb-2"
                for="name"
              >
                Name
              </label>
              <input
                class="lg:w-[34vw] w-full border border-gray-300 p-2 rounded"
                id="name"
                type="text"
                placeholder="Enter your name"
              />
            </div>
            <div class="mb-4">
              <label
                class="block text-gray-700  text-sm font-bold mb-2"
                for="name"
              >
                Phone Number
              </label>
              <input
                class="lg:w-[34vw] w-full border border-gray-300 p-2 rounded"
                id="name"
                type="text"
                placeholder="Enter your Phone Number"
              />
            </div>
            <div class="mb-4">
              <label
                class="block text-gray-700  text-sm font-bold mb-2"
                for="name"
              >
                Address
              </label>
              <input
                class="lg:w-[34vw] w-full border border-gray-300 p-2 rounded"
                id="name"
                type="text"
                placeholder="Enter your Address"
              />
            </div>
            <div class="mb-4">
              <label
                class="block text-gray-700  text-sm font-bold mb-2"
                for="name"
              >
                Street No
              </label>
              <input
                class="lg:w-[34vw] w-full border border-gray-300 p-2 rounded"
                id="name"
                type="text"
                placeholder="Enter your Street No"
              />
            </div>
            <div class="mb-4">
              <label
                class="block text-gray-700  text-sm font-bold mb-2"
                for="name"
              >
                House No
              </label>
              <input
                class="lg:w-[34vw] w-full border border-gray-300 p-2 rounded"
                id="name"
                type="text"
                placeholder="Enter your  House No"
              />
            </div>

            <div class="flex justify-end">
              <button class="bg-[#00A662] text-white py-2 px-4 rounded-md lg:w-[168px] shadow-md hover:bg-[#67edb5] hover:text-black transition-all">
                Confirm
              </button>
            </div>
          </form>
          <div className="hidden lg:block containerr border-[1px] border-[#B4B4B4] border-t-0  lg:w-[550px] mt-[53px]">
            <div className="bloc-tabs  ">
              <button
                className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(1)}
              >
                Mobile Banking
              </button>
              <button
                className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(2)}
              >
                Internet Banking
              </button>
              <button
                className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(3)}
              >
                Cash On Service
              </button>
            </div>

            <div className="content-tabs">
              <div
                className={
                  toggleState === 1 ? "content  active-content" : "content"
                }
              >
                <div>
                  <div className="pament_images flex gap-x-3 px-3  w-[500px]">
                    <img src={payImage1} alt="" />
                    <img src={payImage2} alt="" />
                    <img src={payImage3} alt="" />
                    <img src={payImage4} alt="" />
                  </div>
                  <div className=" w-[550px] h-[1px] my-6 bg-[#B4B4B4]"></div>
                  <div class="flex justify-end px-3">
                    <button class="bg-[#00A662] text-white py-2 px-4 rounded-md w-[168px] shadow-md hover:bg-[#67edb5] hover:text-black transition-all">
                      Confirm
                    </button>
                  </div>
                </div>
              </div>

              <div
                className={
                  toggleState === 2 ? "content  active-content" : "content"
                }
              >
                <div>
                  <div className="pament_images flex gap-x-3 px-3  w-[500px]">
                    <img src={payImage1} alt="" />
                    <img src={payImage2} alt="" />
                    <img src={payImage3} alt="" />
                    <img src={payImage4} alt="" />
                  </div>
                  <div className=" w-[550px] h-[1px] my-6 bg-black"></div>
                  <div class="flex justify-end px-3">
                    <button class="bg-[#00A662] text-white py-2 px-4 rounded-md w-[168px] shadow-md hover:bg-[#67edb5] hover:text-black transition-all">
                      Confirm
                    </button>
                  </div>
                </div>
              </div>

              <div
                className={
                  toggleState === 3 ? "content  active-content" : "content"
                }
              >
                <div>
                  <div className="pament_images flex gap-x-3 px-3  w-[500px]">
                    <img src={payImage1} alt="" />
                    <img src={payImage2} alt="" />
                    <img src={payImage3} alt="" />
                    <img src={payImage4} alt="" />
                  </div>
                  <div className=" w-[550px] h-[1px] my-6 bg-black"></div>
                  <div class="flex justify-end px-3">
                    <button class="bg-[#00A662] text-white py-2 px-4 rounded-md w-[168px] shadow-md hover:bg-[#67edb5] hover:text-black transition-all">
                      Confirm
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ================================================================= */}
        <div className="right_side shadow-xl lg:w-[542px] lg:h-[157px] ">
          <div className="hidden lg:block shadow-3xl left_side  border-[1.5px] border-t-0 border-[#6C6C6C] rounded-[5px] ">
            <div className="h-[59px] bg-[#CCCCCC] text-center rounded-[5px] flex items-center justify-center">
              <h1 className=" text-black text-[20px] font-[500]">
                Ambulance Details
              </h1>
            </div>
            <div className="flex items-center justify-between px-3 py-3">
              <img className="h-[75px] w-[99px]" src={img1} alt="" />
              <div className="details">
                <p>Address : Mohakhali, dhaka</p>
                <p>Date : 3/19/2023 at 9:00am- 10:00am</p>
                <p>Rent : 3000 Taka</p>
              </div>
            </div>
          </div>

          {/* ============================  mobile view tab================================= */}
          <div className="mt-6 block lg:hidden containerr border-[1px] border-[#B4B4B4] border-t-0  lg:w-[550px] lg:mt-[53px]">
            <div className="bloc-tabs  ">
              <button
                className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(1)}
              >
                Mobile Banking
              </button>
              <button
                className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(2)}
              >
                Internet Banking
              </button>
              <button
                className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(3)}
              >
                Cash On Service
              </button>
            </div>

            <div className="content-tabs">
              <div
                className={
                  toggleState === 1 ? "content  active-content" : "content"
                }
              >
                <div>
                  <div className="pament_images flex flex-wrap lg:justify-start justify-center gap-y-3 lg:gap-y-0 gap-x-3 px-3  lg:w-[500px]">
                    <img src={payImage1} alt="" />
                    <img src={payImage2} alt="" />
                    <img src={payImage3} alt="" />
                    <img src={payImage4} alt="" />
                  </div>
                  <div className=" lg:w-[550px] h-[1px] my-6 bg-[#B4B4B4]"></div>
                  <div class="flex justify-end px-3">
                    <button class="bg-[#00A662] text-white py-2 px-4 rounded-md w-[168px] shadow-md hover:bg-[#67edb5] hover:text-black transition-all">
                      Confirm
                    </button>
                  </div>
                </div>
              </div>

              <div
                className={
                  toggleState === 2 ? "content  active-content" : "content"
                }
              >
                <div>
                  <div className="pament_images flex gap-x-3 px-3  lg:w-[500px]">
                    <img src={payImage1} alt="" />
                    <img src={payImage2} alt="" />
                    <img src={payImage3} alt="" />
                    <img src={payImage4} alt="" />
                  </div>
                  <div className=" lg:w-[550px] h-[1px] my-6 bg-black"></div>
                  <div class="flex justify-end px-3">
                    <button class="bg-[#00A662] text-white py-2 px-4 rounded-md w-[168px] shadow-md hover:bg-[#67edb5] hover:text-black transition-all">
                      Confirm
                    </button>
                  </div>
                </div>
              </div>

              <div
                className={
                  toggleState === 3 ? "content  active-content" : "content"
                }
              >
                <div>
                  <div className="pament_images flex gap-x-3 px-3  w-[500px]">
                    <img src={payImage1} alt="" />
                    <img src={payImage2} alt="" />
                    <img src={payImage3} alt="" />
                    <img src={payImage4} alt="" />
                  </div>
                  <div className=" lg:w-[550px] h-[1px] my-6 bg-black"></div>
                  <div class="flex justify-end px-3">
                    <button class="bg-[#00A662] text-white py-2 px-4 rounded-md w-[168px] shadow-md hover:bg-[#67edb5] hover:text-black transition-all">
                      Confirm
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ----------------------------------------tab start --------------*/}
    </div>
  );
};

export default Checkout;
