import React, { useEffect, useState } from "react";
import "./tabtwoPharmecy.scss";
import { Link } from "react-router-dom";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import CarouselTabTwoMobile from "../TabTwo/CarouselTabTwoMobile";
import SingleMedicine from "./SingleMedicine";
const TabTwoPharmecy = () => {
  const [medicine, setMedicine] = useState([]);
  const [search, setSesrch] = useState("");
  console.log(search);
  useEffect(() => {
    fetch("https://hospital-server-tau.vercel.app/allmedicine")
      .then((res) => res.json())
      .then((data) => setMedicine(data));
  }, []);
  return (
    <div className="">
      <div className="tabtwoPharmecy_main_container hidden lg:block">
        <div className="select_test_main_container   gap-x-2 ">
          {/* ------------------------- right side--------------------------------------------- */}

          <div className="drugs_details_rightside w-[70%] mx-auto">
            <div className="tabs_main_container">
              <h1 className=" textred font-[500] w-[182px] h-[36px] text-[24px] font-sans text-center mx-auto leading-[31px] pt-[30px] ">
                BUY MEDICINE
              </h1>
              <div className="search-bar">
                <input
                  onChange={(e) => setSesrch(e.target.value)}
                  className="border-2 h-[50px] w-[300px] focus:outline-none px-2 rounded-lg text-xl"
                  type="search"
                  name=""
                  id=""
                  placeholder="Search by Name"
                />
              </div>

              <div className="">
                <div className="containerr pt-[49px]">
                  <div className=" grid grid-cols-5 gap-y-10 justify-items-center">
                    {medicine
                      .filter((val) => val.name.toLowerCase().includes(search))
                      .map((value) => {
                        return (
                          <SingleMedicine
                            value={value}
                            key={value._id}
                          ></SingleMedicine>
                        );
                      })}
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
