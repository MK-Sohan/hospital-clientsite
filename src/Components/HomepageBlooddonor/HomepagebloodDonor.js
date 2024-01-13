import React from "react";
import img1 from "../../Assets/doctors/help1.png";
import img2 from "../../Assets/doctors/help2.png";
import { Link } from "react-router-dom";

const HomepagebloodDonor = () => {
  return (
    <div id="bloodbank">
      <div className="flex items-start justify-center mt-[100px] mb-[100px]">
        <div className="w-[50%]  flex  justify-center">
          <div className="relative">
            <img src={img1} alt="" />
            <img
              className="absolute top-[170px] left-[300px]"
              src={img2}
              alt=""
            />
          </div>
        </div>
        <div className="w-[40%] font-mono">
          <h1 className="textred font-[600]">HELP THE PEOPLE IN NEED</h1>
          <h1 className="text-5xl mt-7 font-semibold tracking-widest leading-[70px]">
            Welcome to Blood <br /> Donors Organization
          </h1>
          <p className="mt-7 w-[600px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod
            tempor incididunt ut labore et dolore magna aliqua. suspendisse the
            gravida. Risus commodo viverra maecenas
          </p>
          <div className="text-black mt-[100px] ">
            <Link to="/bloodbank">
              <button className="hover:bg-black hover:text-white hover:ease-in-out red text-white h-[50px] font-mono w-[150px]">
                Explore
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomepagebloodDonor;
