import React, { useState } from "react";
import { checkbox } from "../checkboxdummydata";
import { checkboxtwo } from "../checkboxdummydata";
import { testcarddata } from "../testcarddummydata";
import TestComponent from "../SelectTest/TestComponent";
import SearchBar from "../Share/SearchBar";
import HandleClick from "./HandleClick";
import Tabtwo from "../TabTwo/Tabtwo";
import "./tabtwoPharmecy.scss";
import { tabonedata } from "../dummydata";
import { tabtwodata } from "../dummydata";
import { Link } from "react-router-dom";
import img1 from "../../Assets/tabcardsliderimage/1.png";
import img2 from "../../Assets/tabcardsliderimage/2.png";
import img3 from "../../Assets/tabcardsliderimage/3.png";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import Carousel from "../MobileSlider/Carousel";
import CarouselTabTwoMobile from "../TabTwo/CarouselTabTwoMobile";

const TabTwoPharmecy = () => {
  const tittle1 = "Select Alphabet";
  const tittle2 = "Select Group type";
  const tittle3 = "Select Medicine type";
  const tittle4 = "Select Pharmaceutical type";
  const checkboxes = [
    { id: 1, name: "Checkbox 1" },
    { id: 2, name: "Checkbox 2" },
    { id: 3, name: "Checkbox 3" },
    // Add more checkboxes as needed
  ];
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="">
      <div className="tabtwoPharmecy_main_container hidden lg:block">
        <div className="select_test_main_container flex justify-center mt-5 mb-5 gap-x-2 ">
          <div className="select_test_leftside">
            <div className="py-5">
              <SearchBar />
            </div>
            <HandleClick />
            <div className=" w-[366px] border-2 mb-[13px] rounded-md">
              <div className="tittle px-4  text-black text-[20px] font-[700] py-3 border-b-2">
                Department
              </div>

              <div className="h-[609px] px-4   overflow-y-auto ">
                {checkbox.map((val) => {
                  return (
                    <div className="pt-3">
                      <label className="flex items-center space-x-2 w-[198px]">
                        <input
                          type="checkbox"
                          className="form-checkbox text-indigo-500 h-[15px] w-[18px]"
                          checkboxes={checkboxes}
                        />
                        <span className="text-black text-[20px] font-[400]">
                          {val.name}
                        </span>
                      </label>
                    </div>
                  );
                })}
              </div>
            </div>
            {/* ------------------------------------------------------------------ */}
            <div className=" w-[366px] border-2 rounded-md">
              <div className="tittle px-4  text-black text-[20px] font-[700] py-3 border-b-2">
                Diagnostic Centre
              </div>

              <div className="h-[318px] px-4 ">
                {checkboxtwo.map((val) => {
                  return (
                    <div className="pt-3">
                      <label className="flex items-center space-x-2 w-[198px]">
                        <input
                          type="checkbox"
                          className="form-checkbox text-indigo-500 h-[15px] w-[18px]"
                          checkboxes={checkboxes}
                        />
                        <span className="text-black text-[20px] font-[400]">
                          {val.name}
                        </span>
                      </label>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* ------------------------------------------ */}
            <div className=" w-[366px] border-2 rounded-md mt-3">
              <div className="tittle px-4  text-black text-[20px] font-[700] py-3 border-b-2">
                Diagnostic Centre
              </div>

              <div className="h-[318px] px-4 ">
                {checkboxtwo.map((val) => {
                  return (
                    <div className="pt-3">
                      <label className="flex items-center space-x-2 w-[198px]">
                        <input
                          type="checkbox"
                          className="form-checkbox text-indigo-500 h-[15px] w-[18px]"
                          checkboxes={checkboxes}
                        />
                        <span className="text-black text-[20px] font-[400]">
                          {val.name}
                        </span>
                      </label>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* ------------------------- right side--------------------------------------------- */}

          <div className="drugs_details_rightside">
            <div className="tabs_main_container" id="tabOne">
              <h1 className=" text-black font-[500] w-[182px] h-[36px] text-[24px] font-sans text-center mx-auto leading-[31px] pt-[30px] ">
                DIAGNOSTIC
              </h1>
              <div className="w-[90%] mx-auto">
                <div className="containerr pt-[49px]">
                  <div className="bloc-tabs">
                    <button
                      className={
                        toggleState === 1 ? "tabs active-tabs" : "tabs"
                      }
                      onClick={() => toggleTab(1)}
                    >
                      cancer
                    </button>
                    <button
                      className={
                        toggleState === 2 ? "tabs active-tabs" : "tabs"
                      }
                      onClick={() => toggleTab(2)}
                    >
                      diabetes
                    </button>
                    <button
                      className={
                        toggleState === 3 ? "tabs active-tabs" : "tabs"
                      }
                      onClick={() => toggleTab(3)}
                    >
                      dementia
                    </button>
                    <button
                      className={
                        toggleState === 4 ? "tabs active-tabs" : "tabs"
                      }
                      onClick={() => toggleTab(4)}
                    >
                      covid 19
                    </button>
                    <button
                      className={
                        toggleState === 5 ? "tabs active-tabs" : "tabs"
                      }
                      onClick={() => toggleTab(5)}
                    >
                      autism
                    </button>
                    <button
                      className={
                        toggleState === 6 ? "tabs active-tabs" : "tabs"
                      }
                      onClick={() => toggleTab(6)}
                    >
                      breast cancer
                    </button>
                    <button
                      className={
                        toggleState === 7 ? "tabs active-tabs" : "tabs"
                      }
                      onClick={() => toggleTab(7)}
                    >
                      diseases
                    </button>
                    <button
                      className={
                        toggleState === 8 ? "tabs active-tabs" : "tabs"
                      }
                      onClick={() => toggleTab(8)}
                    >
                      Endoscopy
                    </button>
                    <button
                      className={
                        toggleState === 9 ? "tabs active-tabs" : "tabs"
                      }
                      onClick={() => toggleTab(9)}
                    >
                      Laboratory Tests
                    </button>
                    <button
                      className={
                        toggleState === 10 ? "tabs active-tabs" : "tabs"
                      }
                      onClick={() => toggleTab(10)}
                    >
                      CT Scans
                    </button>
                  </div>

                  <div className="content-tabs ">
                    <div
                      className={
                        toggleState === 1
                          ? "content  active-content"
                          : "content"
                      }
                    >
                      <div className="tab_content_images">
                        {tabonedata.map((value) => {
                          return (
                            <div className="relative flex flex-col items-center font-[400] text-[16px] text-black">
                              <img className="w-[186px] " src={img1} alt="" />
                              <div className="absolute bottom-0 right-7 top-20 opacity-0 hover:opacity-100 transition duration-300">
                                <Link to="/drugDetails">
                                  <button className="rounded-3xl w-[104px] h-[31px] text-white font-[500] text-[10px] flex justify-center items-center bg-[#026E5F] ">
                                    Buy Now
                                  </button>
                                </Link>
                              </div>
                              <p>Napa Extra 500mg </p>

                              <p>10 Tablets</p>
                              <p>20 Tk</p>

                              <div className="absolute bottom-0 right-[25%] top-[190px] transition duration-300">
                                <Link to="/drugDetails">
                                  <button className="rounded-3xl w-[91px] h-[21px] text-[10px] flex justify-center items-center bg-[#FFC408] hover:bg-[#dbbe61]">
                                    Details
                                  </button>
                                </Link>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    <div
                      className={
                        toggleState === 2
                          ? "content  active-content"
                          : "content"
                      }
                    >
                      <div className="tab_content_images">
                        {tabonedata.map((value) => {
                          return (
                            <div className="relative flex flex-col items-center font-[400] text-[16px] text-black">
                              <img className="w-[186px] " src={img2} alt="" />
                              <div className="absolute bottom-0 right-7 top-20 opacity-0 hover:opacity-100 transition duration-300">
                                <Link to="/drugDetails">
                                  <button className="rounded-3xl w-[104px] h-[31px] text-white font-[500] text-[10px] flex justify-center items-center bg-[#026E5F] ">
                                    Buy Now
                                  </button>
                                </Link>
                              </div>
                              <p>Napa Extra 500mg </p>

                              <p>10 Tablets</p>
                              <p>20 Tk</p>

                              <div className="absolute bottom-0 right-2 top-[190px] transition duration-300">
                                <Link to="/drugDetails">
                                  <button className="rounded-3xl w-[91px] h-[21px] text-[10px] flex justify-center items-center bg-[#FFC408] hover:bg-[#dbbe61]">
                                    Details
                                  </button>
                                </Link>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    <div
                      className={
                        toggleState === 3
                          ? "content  active-content"
                          : "content"
                      }
                    >
                      <div className="tab_content_images">
                        {tabonedata.map((value) => {
                          return (
                            <div className="relative flex flex-col items-center font-[400] text-[16px] text-black">
                              <img className="w-[186px] " src={img3} alt="" />
                              <div className="absolute bottom-0 right-7 top-20 opacity-0 hover:opacity-100 transition duration-300">
                                <Link to="/drugDetails">
                                  <button className="rounded-3xl w-[104px] h-[31px] text-white font-[500] text-[10px] flex justify-center items-center bg-[#026E5F] ">
                                    Buy Now
                                  </button>
                                </Link>
                              </div>
                              <p>Napa Extra 500mg </p>

                              <p>10 Tablets</p>
                              <p>20 Tk</p>

                              <div className="absolute bottom-0 right-2 top-[190px] transition duration-300">
                                <Link to="/drugDetails">
                                  <button className="rounded-3xl w-[91px] h-[21px] text-[10px] flex justify-center items-center bg-[#FFC408] hover:bg-[#dbbe61]">
                                    Details
                                  </button>
                                </Link>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                  <div class="seemore_button   flex gap-x-2 justify-end p-[20px]">
                    <button className="bg-[#D9D9D9] p-3 text-[22px] font-[900] hover:bg-slate-400">
                      <AiOutlineLeft />
                    </button>
                    {/* <div className='h-1 w-10 bgba'></div> */}
                    <button className="bg-[#D9D9D9] p-3 text-[22px] font-[900] hover:bg-slate-400">
                      <AiOutlineRight />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CarouselTabTwoMobile />

      <div className=""></div>

      <div className=""></div>
    </div>
  );
};

export default TabTwoPharmecy;
