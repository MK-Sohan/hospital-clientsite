import React from "react";
import { alldata } from "../dummydata";
import img from "../../Assets/Roomrantimage/0517_design_UofC-Health-Patient-Rm-HB4-1050 1.png";
import { Link } from "react-router-dom";
const AllroomPrices = () => {
  return (
    <div className="py-10">
      <p className="text-center mb-3 lg:mt-[70px] text-[32px] text-[#026E5F] font-[400]">
        Room Rate
      </p>
      <div className="flex justify-center flex-col items-center  ">
        <div>
          <p className=" pl-2 lg:pl-0 py-4 text-[24px] text-[#026E5F] font-[400]">
            Room Rate
          </p>
          <div className="flex flex-col lg:flex-row gap-5">
            <div className="lg:mx-0  mx-2 border-[1px] rounded-[10px] border-[#9D9D9D]">
              <div className="rounded-[10px] px-[32px]  h-[77px] flex justify-between items-center bg-[#FFC408]">
                <p className="text-black text-[24px] font-[400]">Room Type</p>
                <p className="text-black text-[24px] font-[400]">Charge</p>
              </div>
              <div className="lg:w-[659px] mx-auto w-[313px] lg:h-full h-[426px] overflow-y-auto">
                {alldata.map((val, index) => {
                  const colors = ["bg-white", "bg-[#F5F5F5]"];
                  const colorIndex = index % (colors.length * 1);
                  const color =
                    colorIndex % 1 === 0 ? colors[colorIndex / 1] : "";

                  return (
                    <div
                      key={index}
                      className={`rounded-[5px] px-[32px]  h-[49px] justify-between flex ${color}`}
                    >
                      <p className="py-[12px] text-[16px] font-[500]">
                        {val.name}
                      </p>
                      <p className="py-[12px] text-[16px] font-[500]">
                        {val.balance}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className=" flex flex-col  gap-12  justify-between">
              <div>
                <img className="    " src={img} alt="" />
                <p className="text-center">VIP or Deluxe Suite</p>
              </div>
              <div>
                <img className="" src={img} alt="" />
                <p className="text-center">VIP or Deluxe Suite</p>
              </div>
              <div>
                <img className="" src={img} alt="" />
                <p className="text-center">VIP or Deluxe Suite</p>
              </div>
              <div>
                <img className="" src={img} alt="" />
                <p className="text-center">VIP or Deluxe Suite</p>
              </div>
              <div>
                <img className="" src={img} alt="" />
                <p className="text-center">VIP or Deluxe Suite</p>
              </div>
              <div>
                <img className="" src={img} alt="" />
                <p className="text-center">VIP or Deluxe Suite</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="seemore_button   flex justify-center lg:justify-end p-[20px] mt-[44px] mr-12">
        <Link to='/allCabin'>
        <button class="bg-[#026E5F] rounded-md p-[10px] w-[208px] text-white font-b ">
            View More
          </button>
        </Link>
        
        </div>
    </div>
  );
};

export default AllroomPrices;
