import React from "react";

const Callus = () => {
  return (
    <div>
      <div class="w-[90%]  lg:w-full lg:h-[125px] call_us_container rounded-[22px] lg:rounded-lg bg-[#FFC408] lg:bg-[#91C1BB] mb-[30px] mt-[60px] max-w-[1316px] mx-auto">
        <div class="call_us_chield_container text-black font-[400] flex flex-col lg:flex-row items-center gap-y-16 lg:justify-between text-center px-[90px] py-[20px] ">
          <div class="callus">
            <p class="text-2xl">Call Us</p>
            <p class="font-semibold">6789</p>
            <p>Available 24 hours every day</p>
          </div>
          <div class="map   ">
            <p class="text-sm">Map and Directions</p>           
            <button className=" w-full  lg:w-36 border-[1px] mt-3 border-black lg:border-[#FFC408]  py-1 font-[500] text-black">Get Directions</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Callus;
