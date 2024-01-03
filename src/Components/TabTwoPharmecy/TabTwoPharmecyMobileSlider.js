import React, { useState } from 'react';
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { Link } from 'react-router-dom';

const TabTwoPharmecyMobileSlider = ({medicard,tittle}) => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
      setToggleState(index);
    };
    const scrollLeft = () => {
        document.getElementById("content").scrollLeft -= 200;
      };
      const scrollRight = () => {
        document.getElementById("content").scrollLeft += 200;
      };

    return (
        <div className="relative">
      <div className="text-center py-4  text-xl font-bold">{tittle}</div>
      <div className="absolute right-0 top-5 ">
        <button onClick={scrollLeft} className="p-2 m-2 rounded-full bg-white">
          <FiChevronLeft />
        </button>
        <button onClick={scrollRight} className="p-2 m-2 rounded-full bg-white">
          <FiChevronRight />
        </button>
      </div>
      <div
        id="content"
        className="carousel p-4 flex items-center justify-start overflow-x-auto scroll-smooth  scrollbar-hide"
      >
        <div>
       {
        medicard.map((val=>{
            return(
                <Link to='/TabTwoPharmecy'>
                <div className="relative flex  flex-col items-center font-[400] text-[16px] text-black">
                <img className=" w-[186px]" src={val.picture} alt="" />
              <p>Napa Extra 500mg </p>
            
              <p>10 Tablets</p>
              <p>20 Tk</p>
              <button className='absolute top-[68%] bg-[#FFC408] rounded-[23px] text-[10px] py-1 px-2 font-[500]'>Add to Cart</button>
              </div>
              </Link>
            )
        }))
       }
        </div>
        
      </div>
    </div>
    );
};

export default TabTwoPharmecyMobileSlider;