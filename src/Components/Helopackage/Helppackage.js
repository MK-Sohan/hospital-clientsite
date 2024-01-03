import React from "react";
import cardimage1 from "../../Assets/cardimage/home-doctor-visits 1.png";
import cardimage2 from "../../Assets/cardimage/th (1) 2.png";
import cardimage3 from "../../Assets/cardimage/Children-Healthcare-1920x1080 1 (1).png";
import { Link } from "react-router-dom";
const Helppackage = () => {
  return (
   <div className="">

<div className="hidden lg:block">
      <div id="packages" class="our_clien_header h-[72px] mt-[45px] mb-[30px] text-center flex items-center justify-center">
        <h1 class="font-sb text-[26px]">HELP PACKAGE</h1>
      </div>
      <div class="helppackage_card_container p-[30px] lg:flex lg:flex-row lg:gap-9 lg:justify-center lg:item-center flex flex-col gap-[10px]">
        <div class="max-w-sm bg-white rounded-lg shadowborder-gray-700 shadow-xl">
          <a href="#">
            <img class="rounded-t-lg" src={cardimage1} alt="" />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-l tracking-tight text-gray-900">
                Daily Doctor Home visit package
              </h5>
            </a>
            <a href="#">
              <h5 class="mb-2 text-sm font-bold tracking-tight text-gray-900">
                8000 Taka/monthly
              </h5>
            </a>
            <a href="#">
              <h5 class="mb-2 text-m tracking-tight text-gray-900">
                For 1 adult
              </h5>
            </a>
            <div>
              <li>
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order
              </li>
              <li>
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order
              </li>
            </div>
            <div>
              <Link to='/packageDetail'><button class="border-none shadow-xl bg-blue-100 p-[10px] w-[100%] mt-3 text-[18px] font-m hover:bg-blue-400 hover:ease-in-out duration-300 rounded-lg">
                Details
              </button></Link>
              
            </div>
          </div>
        </div>
        <div class="max-w-sm bg-white rounded-lg shadowborder-gray-700 shadow-xl">
          <a href="#">
            <img class="rounded-t-lg" src={cardimage2} alt="" />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-l tracking-tight text-gray-900">
                Daily Doctor Home visit package
              </h5>
            </a>
            <a href="#">
              <h5 class="mb-2 text-sm font-bold tracking-tight text-gray-900">
                8000 Taka/monthly
              </h5>
            </a>
            <a href="#">
              <h5 class="mb-2 text-m tracking-tight text-gray-900">
                For 1 adult
              </h5>
            </a>
            <div>
              <li>
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order
              </li>
              <li>
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order
              </li>
            </div>
            <div>
            <Link to='/packageDetail'><button class="border-none shadow-xl bg-blue-100 p-[10px] w-[100%] mt-3 text-[18px] font-m hover:bg-blue-400 hover:ease-in-out duration-300 rounded-lg">
                Details
              </button></Link>
            </div>
          </div>
        </div>

        <div class="max-w-sm bg-white rounded-lg shadowborder-gray-700 shadow-xl">
          <a href="#">
            <img class="rounded-t-lg" src={cardimage3} alt="" />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-l tracking-tight text-gray-900">
                Daily Doctor Home visit package
              </h5>
            </a>
            <a href="#">
              <h5 class="mb-2 text-sm font-bold tracking-tight text-gray-900">
                8000 Taka/monthly
              </h5>
            </a>
            <a href="#">
              <h5 class="mb-2 text-m tracking-tight text-gray-900">
                For 1 adult
              </h5>
            </a>
            <div>
              <li>
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order
              </li>
              <li>
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order
              </li>
            </div>
            <div>
            <Link to='/packageDetail'><button class="border-none shadow-xl bg-blue-100 p-[10px] w-[100%] mt-3 text-[18px] font-m hover:bg-blue-400 hover:ease-in-out duration-300 rounded-lg">
                Details
              </button></Link>
            </div>
          </div>
        </div>
      </div>
    
    </div>
    <div class="seemore_button flex justify-center p-[20px]">
      <Link to='/allpackages'>
      
      <button class="bg-[#026E5F] p-[10px] rounded-md w-[208px] text-white font-b">
          See All Package
        </button>
      </Link>
      </div>
   </div>
  );
};

export default Helppackage;
