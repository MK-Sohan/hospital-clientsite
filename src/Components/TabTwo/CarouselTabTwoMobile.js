import React from "react";
import { BsArrowRightCircleFill, BsArrowLeftCircleFill } from "react-icons/bs";
import TabTwoMobileCarousel from "./TabTwoMobileCarousel";
import { Link } from "react-router-dom";

const CarouselTabTwoMobile = () => {
  const scrollLeft = () => {
    document.getElementById("content2").scrollLeft -= 200;
  };
  const scrollRight = () => {
    document.getElementById("content2").scrollLeft += 200;
  };

  const scrollLeft2 = () => {
    document.getElementById("content3").scrollLeft -= 200;
  };
  const scrollRight2 = () => {
    document.getElementById("content3").scrollLeft += 200;
  };

  const scrollLeft3 = () => {
    document.getElementById("content4").scrollLeft -= 200;
  };
  const scrollRight3 = () => {
    document.getElementById("content4").scrollLeft += 200;
  };

  return (
    <div className="main_mobile_container pt-10 block lg:hidden">
      <div className="relative  ">
        <div className=" py-1  text-xl font-bold"></div>
        <div className="absolute   top-1 left-3 flex justify-between gap-x-[220px] ">
          <button>PHARMACY</button>
          <button
            onClick={scrollRight}
            className="p-2 m-2 rounded-full bg-white"
          >
            <BsArrowRightCircleFill />
          </button>
        </div>
        <div className="absolute left-3 top-16">
          <input
            type="text"
            placeholder="Search"
            className=" w-[312px] lg:w-full py-[6px] pl-12  text-gray-500 border-[1px] border-[#026E5F] rounded-3xl outline-none bg-gray-50 focus:bg-white focus:border-indigo-600"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-0 bottom-0  w-6 h-6 my-auto text-gray-400 left-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>

        <div
          id="content2"
          className="   flex items-center justify-start overflow-x-auto scroll-smooth  scrollbar-hide"
        >
          <div>
            {/* -----------eita holo tabs---------------- */}
            <TabTwoMobileCarousel />
          </div>
        </div>
      </div>

      {/* ================================================= */}

      {/* <div className="relative block lg:hidden mt-10">
        <div className=" py-1  text-xl font-bold"></div>
        <div className="absolute   top-1 left-3 flex justify-between gap-x-[220px] ">
          <button>Select Alphabet</button>
          <button
            onClick={scrollRight2}
            className="p-2 m-2 rounded-full bg-white"
          >
            <BsArrowRightCircleFill />
          </button>
        </div>
        <div
          id="content3"
          className="   flex items-center justify-start overflow-x-auto scroll-smooth  scrollbar-hide"
        >
          <div>
            <TabTwoMobileCarousel />
          </div>
        </div>
      </div> */}

      {/* ========================================================== */}
      {/* <div className="relative block lg:hidden mt-10 ">
        <div className=" py-1  text-xl font-bold"></div>
        <div className="absolute   top-1 left-3 flex justify-between gap-x-[220px] ">
          <button>Select Alphabet</button>
          <button
            onClick={scrollRight3}
            className="p-2 m-2 rounded-full bg-white"
          >
            <BsArrowRightCircleFill />
          </button>
        </div>
        <div
          id="content4"
          className="   flex items-center justify-start overflow-x-auto scroll-smooth  scrollbar-hide"
        >
          <div>
            <TabTwoMobileCarousel />
          </div>
        </div>
      </div> */}
      <div class="seemore_button   flex justify-center p-[20px]">
        <Link to="/TabTwoPharmecy">
          <button class="bg-[#026E5F]  rounded-sm p-[10px] w-[208px] text-white font-[500] text-[16px] ">
            see all Catagory
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CarouselTabTwoMobile;
