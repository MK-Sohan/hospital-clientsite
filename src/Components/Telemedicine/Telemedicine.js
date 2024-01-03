import React from "react";
import "./telemedicine.scss";
import image from "../../Assets/heroimage/the-best-telemedicine-services-scaled 1.png";
import icon1 from '../../Assets/icons/Group 8.png'
import icon2 from '../../Assets/icons/Group 9.png'
import { Link } from "react-router-dom";
const Telemedicine = () => {
  return (
    <div className="">


<div className="bg-white lg:block hidden ">
      <div id="telemedicine" class="our_clien_header h-[72px]  mb-[30px] text-center flex items-center justify-center">
        <h1 class="font-sb text-[26px]">TELEMEDICINE</h1>
      </div>

      <div class="book_an_appoinment p-[40px]">
        <div class="appointment_child_container flex gap-x-10 justify-center items-center">
          <div class="details_appointment">
            <h1 class="text-[32px] font-bold text-black">Talk To a Doctor</h1>
            <p class="w-[637px] h-[84px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse,
              eaque voluptatum natus doloremque odit ad, eos optio cum,
              consectetur error et quidem voluptatem dolor autem facere in
              itaque ipsum dolore!
            </p>
            <div></div>
            <div class="flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 50 50"
                width="17px"
                height="17px"
              color="green"
              >
                <path d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 37.039062 10.990234 A 1.0001 1.0001 0 0 0 36.265625 11.322266 L 26.183594 22.244141 A 3 3 0 0 0 25 22 A 3 3 0 0 0 22 25 A 3 3 0 0 0 25 28 A 3 3 0 0 0 25.5 27.958984 L 29.125 34.486328 A 1.0010694 1.0010694 0 1 0 30.875 33.513672 L 27.246094 26.984375 A 3 3 0 0 0 28 25 A 3 3 0 0 0 27.652344 23.599609 L 37.734375 12.677734 A 1.0001 1.0001 0 0 0 37.039062 10.990234 z" />
              </svg>
              <p class="font-sb">24 Hour Service</p>
            </div>
            <div class="flex items-center gap-3">
              <img src={icon2} alt="" />
              Audio Call
            </div>
            <div class="flex items-center gap-3">
              <img src={icon1} alt="" />
              Video Call
            </div>
            <div class="seemore_button flex-col  justify-start pt-[30px]">
              <Link to='/Telemedicinebenefits'>
              <button class="bg-[#026E5F] p-[10px] w-[208px] text-white font-b">
                Get Start
              </button>
              </Link>
            
            </div>
          </div>
          <div class="image_appointment">
            <img src={image} alt="" />
          </div>
        </div>
      </div>
    </div>

{/* ----------------------------------------- mobile view------------ */}
<div className="py-[40px] block lg:hidden book_appointment_mobile_view w-[315px] mx-auto">


<div className="Telemedicine_bg_image ">
 <div className="details flex flex-col items-center justify-center px-3 py-9 ">
 <h1 class="text-[20px] font-bold text-black">
              Book an Appointment
            </h1>
            <div class="flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 50 50"
                width="17px"
                height="17px"
              color="green"
              >
                <path d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 37.039062 10.990234 A 1.0001 1.0001 0 0 0 36.265625 11.322266 L 26.183594 22.244141 A 3 3 0 0 0 25 22 A 3 3 0 0 0 22 25 A 3 3 0 0 0 25 28 A 3 3 0 0 0 25.5 27.958984 L 29.125 34.486328 A 1.0010694 1.0010694 0 1 0 30.875 33.513672 L 27.246094 26.984375 A 3 3 0 0 0 28 25 A 3 3 0 0 0 27.652344 23.599609 L 37.734375 12.677734 A 1.0001 1.0001 0 0 0 37.039062 10.990234 z" />
              </svg>
              <p class="font-sb">24 Hour Service</p>
            </div>
            <div class="flex items-center gap-3">
              <img src={icon2} alt="" />
              Audio Call
            </div>
            <div class="flex items-center gap-3">
              <img src={icon1} alt="" />
              Video Call
            </div>
 </div>
            <div class="seemore_button   w-full mt-9">
          <button   class="bg-[#df30307c] rounded-sm p-[10px] w-full text-white font-b ">
            Book an Appointment
          </button>
        </div>
</div>

</div>

    </div>
  );
};

export default Telemedicine;
