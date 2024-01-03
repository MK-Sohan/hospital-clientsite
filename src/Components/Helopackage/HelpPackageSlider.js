import React from 'react';
import { BsArrowRightCircleFill, BsArrowLeftCircleFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
import cardimage1 from "../../Assets/cardimage/home-doctor-visits 1.png";
import cardimage2 from "../../Assets/cardimage/th (1) 2.png";
import cardimage3 from "../../Assets/cardimage/Children-Healthcare-1920x1080 1 (1).png";
import Card from '../MobileSlider/HelpPackageCard';
import HelpPackageCard from '../MobileSlider/HelpPackageCard';
const HelpPackageSlider = () => {

    const scrollLeft = () => {
        document.getElementById("contentpackage").scrollLeft -= 200;
      };
      const scrollRight = () => {
        document.getElementById("contentpackage").scrollLeft += 200;
      };

    return (
        <div className="relative block lg:hidden">
        <div className="text-center py-4  text-xl font-bold">HELP PACKAGE</div>
        <div className="absolute right-0 top-5 ">
          <button onClick={scrollLeft} className="p-2 m-2 rounded-full bg-white">
            <BsArrowLeftCircleFill/>
          </button>
          <button onClick={scrollRight} className="p-2 m-2 rounded-full bg-white">
            <BsArrowRightCircleFill/>
          </button>
        </div>
        <div
          id="contentpackage"
          className="carousel p-4 flex items-center justify-start overflow-x-auto scroll-smooth  scrollbar-hide"
        >
          <div>
            <HelpPackageCard/>
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

export default HelpPackageSlider;