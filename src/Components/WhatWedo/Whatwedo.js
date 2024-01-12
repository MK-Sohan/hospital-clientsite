import React from "react";
import s1 from "../../Assets/doctors/s1.jpg";
import s2 from "../../Assets/doctors/s2.jpg";

import s3 from "../../Assets/doctors/s3.jpg";
import s5 from "../../Assets/doctors/young-man-doctor-white-coat-with-stethoscope-holding-different-pills-looking-them-with-serious-face-sitting-table-with-laptop-white-background.jpg";

import s4 from "../../Assets/doctors/team-paramedics-taking-break-ambulance-outdoor-waiting-call.jpg";

import { Link } from "react-router-dom";

const Whatwedo = () => {
  return (
    <div className="pb-[100px] bg-gray-100">
      <div className=" font-mono ">
        <h1 className="textred text-center py-10">WHAT WE DO</h1>
        <h1 className="text-4xl text-center">Our Best Services</h1>
      </div>
      <div className="flex items-start justify-center mt-10 gap-x-10">
        <div className="w-[50%] flex justify-end">
          <img src={s3} alt="" />
        </div>
        <div className="text w-[50%]">
          <h1 className="text-[70px] font-bold opacity-20	">01</h1>
          <h1 className="text-[40px]">Blood Bank</h1>
          <p className="w-[550px]">
            I am text block. Click edit button to change this text. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus
            nec ullamcorpe matti pulvinar dapibus leo.
          </p>
          <div className="text-black mt-[70px] ">
            <Link to="/bloodbank">
              <button className="hover:bg-black hover:text-white hover:ease-in-out red text-white h-[50px] font-mono w-[150px]">
                Explore
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex items-start justify-center mt-10 gap-x-10">
        <div className="text w-[50%] text-end">
          <h1 className="text-[70px] font-bold opacity-20	">02</h1>
          <h1 className="text-[40px]">Experienced Doctors</h1>
          <div className="flex justify-end items-end">
            <p className=" w-[550px]  ">
              I am text block. Click edit button to change this text. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
              luctus nec ullamcorpe matti pulvinar dapibus leo.
            </p>
          </div>
          <div className="text-black mt-[70px] ">
            <Link to="/doctors">
              <button className="hover:bg-black hover:text-white hover:ease-in-out red text-white h-[50px] font-mono w-[150px]">
                Explore
              </button>
            </Link>
          </div>
        </div>
        <div className="w-[50%]">
          <img src={s2} alt="" />
        </div>
      </div>
      <div className="flex items-start justify-center mt-10 gap-x-10">
        <div className="w-[50%] h-[400px] flex justify-end">
          <img src={s4} alt="" />
        </div>
        <div className="text w-[50%]">
          <h1 className="text-[70px] font-bold opacity-20	">03</h1>
          <h1 className="text-[40px]">Ambulance Service</h1>
          <p className="w-[550px]">
            I am text block. Click edit button to change this text. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus
            nec ullamcorpe matti pulvinar dapibus leo.
          </p>
          <div className="text-black mt-[70px] ">
            <Link to="/ambulanceDetails">
              <button className="hover:bg-black hover:text-white hover:ease-in-out red text-white h-[50px] font-mono w-[150px]">
                Explore
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex items-start justify-center mt-10 gap-x-10">
        <div className="text w-[50%] text-end">
          <h1 className="text-[70px] font-bold opacity-20	">04</h1>
          <h1 className="text-[40px]">Buy Medicine Online</h1>
          <div className="flex justify-end items-end">
            <p className=" w-[550px]  ">
              I am text block. Click edit button to change this text. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
              luctus nec ullamcorpe matti pulvinar dapibus leo.
            </p>
          </div>
          <div className="text-black mt-[70px] ">
            <Link to="/TabTwoPharmecy">
              <button className="hover:bg-black hover:text-white hover:ease-in-out red text-white h-[50px] font-mono w-[150px]">
                Explore
              </button>
            </Link>
          </div>
        </div>
        <div className="w-[50%] h-[300px] object-contain">
          <img src={s3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Whatwedo;
