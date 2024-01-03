import Card from "./Card";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

function Carousel() {
  const scrollLeft = () => {
    document.getElementById("content").scrollLeft -= 200;
  };
  const scrollRight = () => {
    document.getElementById("content").scrollLeft += 200;
  };

  return (
    <div className="relative">
      <div className="text-center py-4  text-xl font-bold">Carousel</div>
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
          <Card></Card>
        </div>
        
      </div>
    </div>
  );
}

export default Carousel;
