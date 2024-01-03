import React from "react";
import img from "../../Assets/roomrentimages/25304609 2.png";
import { Link } from "react-router-dom";
const Roomrent = () => {
  return (
    <div>
      <h1 className=" text-[#026E5F] font-[500] w-[182px] h-[36px] text-[36px] font-sans text-center mx-auto leading-[36px] mb-10 lg:mb-0 mt-[70px]">
        Room Rate
      </h1>
      {/* ------------------card start-------------------- */}
      <div className="grid grid-cols-1 gap-y-[40px] lg:grid-cols-2 lg:gap-y-[100px] lg:mb-[213px] items-center justify-center lg:w-[80%] lg:mx-auto lg:mt-[77px]">
        <div className="flex flex-col  items-center">
          <Link to='/roomdetail'><img src={img} alt="" /></Link>
          <p className="  font-[400] w-[182px] h-[36px] text-[20px] font-sans ">
            VIP or Deluxe Suite
          </p>
        </div>

        <div className="flex flex-col  items-center">
          <img src={img} alt="" />
          <p className="  font-[400] w-[182px] h-[36px] text-[20px] font-sans ">
            VIP or Deluxe Suite
          </p>
        </div>
        <div className="flex flex-col  items-center">
          <img src={img} alt="" />
          <p className="  font-[400] w-[182px] h-[36px] text-[20px] font-sans ">
            VIP or Deluxe Suite
          </p>
        </div>
        <div className="flex flex-col  items-center">
          <img src={img} alt="" />
          <p className="  font-[400] w-[182px] h-[36px] text-[20px] font-sans ">
            VIP or Deluxe Suite
          </p>
        </div>
        <div className="flex flex-col  items-center">
          <img src={img} alt="" />
          <p className="  font-[400] w-[182px] h-[36px] text-[20px] font-sans ">
            VIP or Deluxe Suite
          </p>
        </div>
        <div className="flex flex-col  items-center">
          <img src={img} alt="" />
          <p className="  font-[400] w-[182px] h-[36px] text-[20px] font-sans ">
            VIP or Deluxe Suite
          </p>
        </div>
        <div className="flex flex-col  items-center">
          <img src={img} alt="" />
          <p className="  font-[400] w-[182px] h-[36px] text-[20px] font-sans ">
            VIP or Deluxe Suite
          </p>
        </div>
        <div className="flex flex-col  items-center">
          <img src={img} alt="" />
          <p className="  font-[400] w-[182px] h-[36px] text-[20px] font-sans ">
            VIP or Deluxe Suite
          </p>
        </div>
        <div className="flex flex-col  items-center">
          <img src={img} alt="" />
          <p className="  font-[400] w-[182px] h-[36px] text-[20px] font-sans ">
            VIP or Deluxe Suite
          </p>
        </div>
        <div className="flex flex-col  items-center">
          <img src={img} alt="" />
          <p className="  font-[400] w-[182px] h-[36px] text-[20px] font-sans ">
            VIP or Deluxe Suite
          </p>
        </div>
      </div>
    </div>
  );
};

export default Roomrent;
