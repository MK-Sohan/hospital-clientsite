import MobileTabOne from "../Tabs/MobileTabOne";
import Tabs from "../Tabs/Tabs";
import Card from "./HelpPackageCard";
import { BsArrowRightCircleFill, BsArrowLeftCircleFill } from "react-icons/bs";

function Carousel() {
  const scrollLeft = () => {
    document.getElementById("content").scrollLeft -= 200;
  };
  const scrollRight = () => {
    document.getElementById("content").scrollLeft += 200;
  };

  return (
    <div className="relative block lg:hidden ">
      <div className=" py-1  text-xl font-bold"></div>
      <div className="absolute   top-5 left-3 flex justify-between gap-x-52 ">
        
      <button>DIAGNOSTIC</button>
        <button onClick={scrollRight} className="p-2 m-2 rounded-full bg-white">
          <BsArrowRightCircleFill/>
        </button>
      </div>
      <div
        id="content"
        className="   flex items-center justify-start overflow-x-auto scroll-smooth scrollbar-hide"
      >
        <div>
        <MobileTabOne/>
        {/* <Card/> */}
        </div>
      </div>
    </div>
  );
}

export default Carousel;
