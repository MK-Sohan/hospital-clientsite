import React from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { Link } from "react-router-dom";

const SeeallPackagesSliders = ({ packages, tittle, tittle2 }) => {
  // console.log(packages)
  // const {tittle}=tittle
  const scrollLeft = () => {
    document.getElementById("content").scrollLeft -= 200;
  };
  const scrollRight = () => {
    document.getElementById("content").scrollLeft += 200;
  };

  const scrollLeft2 = () => {
    document.getElementById("content2").scrollLeft -= 200;
  };
  const scrollRight2 = () => {
    document.getElementById("content2").scrollLeft += 200;
  };
  const scrollLef3 = () => {
    document.getElementById("content3").scrollLeft -= 200;
  };
  const scrollRight3 = () => {
    document.getElementById("content3").scrollLeft += 200;
  };

  return (
    <div>
      <div className="relative">
        <div className="text-center py-4  text-xl font-bold">{tittle}</div>
        <div className="absolute right-0 top-5 ">
          <button
            onClick={scrollLeft}
            className="p-2 m-2 rounded-full bg-white"
          >
            <FiChevronLeft />
          </button>
          <button
            onClick={scrollRight}
            className="p-2 m-2 rounded-full bg-white"
          >
            <FiChevronRight />
          </button>
        </div>
        <div
          id="content"
          className="carousel p-4 flex items-center justify-start overflow-x-auto scroll-smooth  scrollbar-hide"
        >
          <div>
            <div className="block lg:hidden">
              <div div className="flex gap-x-3 ">
                {packages.map((val) => {
                  return (
                    <div className="card bg-white w-[200px]   rounded-lg border-[1px] border-gray-300">
                      <div className="top">
                        <img
                          className="w-[200px] h-[200px] object-cover  p-2"
                          src={val.image}
                          alt="img"
                        />
                      </div>
                      <div className="bottom flex flex-col justify-center items-center ">
                        <div className="title font-semibold text-xs my-1">
                          Daily Doctor Home visit package
                        </div>
                        <div className="category text-xs font-light my-1">
                          8000 Taka/monthly
                        </div>

                        <div className="pricing flex items-center">
                          {" "}
                          <div className="ml-2 text-xs ">For 1 adult</div>
                        </div>
                        <Link to="/packageDetail" className="w-full">
                          <div className="flex pt-4  w-full">
                            <button className="w-full border bg-slate-400 px-3 py-1 text-xs   ">
                              Details
                            </button>
                          </div>
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        {/* --------------------------------------------------------------------------- */}
      </div>

      {/* ============================================= */}
      <div className="relative">
        <div className="text-center py-4  text-xl font-bold">{tittle2}</div>
        <div className="absolute right-0 top-5 ">
          <button
            onClick={scrollLeft2}
            className="p-2 m-2 rounded-full bg-white"
          >
            <FiChevronLeft />
          </button>
          <button
            onClick={scrollRight2}
            className="p-2 m-2 rounded-full bg-white"
          >
            <FiChevronRight />
          </button>
        </div>
        <div
          id="content2"
          className="carousel p-4 flex items-center justify-start overflow-x-auto scroll-smooth  scrollbar-hide"
        >
          <div>
            <div className="block lg:hidden">
              <div div className="flex gap-x-3 ">
                {packages.map((val) => {
                  return (
                    <div className="card bg-white w-[200px]   rounded-lg border-[1px] border-gray-300">
                      <div className="top">
                        <img
                          className="w-[200px] h-[200px] object-cover  p-2"
                          src={val.image}
                          alt="img"
                        />
                      </div>
                      <div className="bottom flex flex-col justify-center items-center ">
                        <div className="title font-semibold text-xs my-1">
                          Daily Doctor Home visit package
                        </div>
                        <div className="category text-xs font-light my-1">
                          8000 Taka/monthly
                        </div>

                        <div className="pricing flex items-center">
                          {" "}
                          <div className="ml-2 text-xs ">For 1 adult</div>
                        </div>
                        <Link to="/packageDetail" className="w-full">
                          <div className="flex pt-4  w-full">
                            <button className="w-full border bg-slate-400 px-3 py-1 text-xs   ">
                              Details
                            </button>
                          </div>
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        {/* --------------------------------------------------------------------------- */}
      </div>

      {/* ================================================== */}

      <div className="relative">
        <div className="text-center py-4  text-xl font-bold">{tittle2}</div>
        <div className="absolute right-0 top-5 ">
          <button
            onClick={scrollLef3}
            className="p-2 m-2 rounded-full bg-white"
          >
            <FiChevronLeft />
          </button>
          <button
            onClick={scrollRight3}
            className="p-2 m-2 rounded-full bg-white"
          >
            <FiChevronRight />
          </button>
        </div>
        <div
          id="content3"
          className="carousel p-4 flex items-center justify-start overflow-x-auto scroll-smooth  scrollbar-hide"
        >
          <div>
            <div className="block lg:hidden">
              <div div className="flex gap-x-3 ">
                {packages.map((val) => {
                  return (
                    <div className="card bg-white w-[200px]   rounded-lg border-[1px] border-gray-300">
                      <div className="top">
                        <img
                          className="w-[200px] h-[200px] object-cover  p-2"
                          src={val.image}
                          alt="img"
                        />
                      </div>
                      <div className="bottom flex flex-col justify-center items-center ">
                        <div className="title font-semibold text-xs my-1">
                          Daily Doctor Home visit package
                        </div>
                        <div className="category text-xs font-light my-1">
                          8000 Taka/monthly
                        </div>

                        <div className="pricing flex items-center">
                          {" "}
                          <div className="ml-2 text-xs ">For 1 adult</div>
                        </div>
                        <Link to="/packageDetail" className="w-full">
                          <div className="flex pt-4  w-full">
                            <button className="w-full border bg-slate-400 px-3 py-1 text-xs   ">
                              Details
                            </button>
                          </div>
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        {/* --------------------------------------------------------------------------- */}
      </div>
    </div>
  );
};

export default SeeallPackagesSliders;
