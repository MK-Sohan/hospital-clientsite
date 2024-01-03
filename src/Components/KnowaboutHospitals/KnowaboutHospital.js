import React from "react";
import "./knowabouthospital.scss";
import videologo from "../../Assets/free-video-icon-818-thumb 2.png";

const KnowaboutHospital = () => {
  return (
    <div>
      <div class="know_about_nevia_hospital_maincontainer bg-[#f5f4ef] ">
        <div class="abouthospital_header pt-[30px]">
          <h1 class="text-2xl text-gray text-center font-bold">
            KNOW ABOUT NAVIEA HOSPITALS LTD
          </h1>
          <div class="underline h-[1px] w-[222px] bg-[#026E5F] m-auto mb-[50px] mt-[10px]"></div>
        </div>
        <div class="video_card_section flex flex-col items-center lg:flex-row gap-[15px]   lg:justify-center lg:gap-[75px]  ">
          <div class="video_one">
            <div class="video_image">
              <p>
                <img src={videologo} alt="" />
              </p>
            </div>
          </div>
          <div class="video_two">
            <div class="video_imagetwo">
              <p>
                <img src={videologo} alt="" />
              </p>
            </div>
          </div>
        </div>
        <div class=" flex justify-center p-[20px]">
          <button class="bg-[#026E5F]  rounded-sm p-[10px] w-[208px] text-white font-b ">
            See More
          </button>
        </div>
      </div>
    </div>
  );
};

export default KnowaboutHospital;
