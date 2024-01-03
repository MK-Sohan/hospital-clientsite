import React from "react";
import "./allpackages.scss";
import cardimage1 from "../../Assets/cardimage/home-doctor-visits 1.png";
import arrow from "../../Assets/icons/icons8-arrow-31.png";

import { packages } from "../dummydata";
import { Link } from "react-router-dom";
import SeeallPackagesSliders from "./SeeallPackagesSliders";
const SeeallPackages = () => {
  const scrollLeft = () => {
    document.getElementById("contentpackage").scrollLeft -= 200;
  };
  const scrollRight = () => {
    document.getElementById("contentpackage").scrollLeft += 200;
  };
  const tittle = "Help Package";
  const tittle2 = "Special Package";
  const tittle3 = "CHILD PACKAGE";

  return (
    <div>
      <div className="allpackages_container_wrapper mb-16">
        <div className="packages_banner ">
          <p className="lg:text-[64px] text-[32px] text-center text-black font-[500] lg:ml-[317px]">
            See All Package
          </p>
        </div>

        <div className="packages_container hidden lg:block">
          {/* --------------------------------- help package desktop ---------------------------- */}
          <div className="help_package_section ">
            <h1 className="text-[24px] text-black font-[500] text-center mt-[50px] mb-[26px]">
              HELP PACKAGE
            </h1>
            <div className=" flex justify-center items-center gap-x-[50px]">
              {packages.map((val) => {
                return (
                  <div class="max-w-sm bg-white rounded-lg  shadowborder-gray-700 shadow-xl">
                    <div>
                      <img class="rounded-t-lg" src={cardimage1} alt="" />
                    </div>
                    <div class="p-5">
                      <div>
                        <h5 class="mb-2 text-l tracking-tight text-gray-900">
                          Daily Doctor Home visit package
                        </h5>
                      </div>
                      <div>
                        <h5 class="mb-2 text-sm font-bold tracking-tight text-gray-900">
                          8000 Taka/monthly
                        </h5>
                      </div>
                      <div>
                        <h5 class="mb-2 text-m tracking-tight text-gray-900">
                          For 1 adult
                        </h5>
                      </div>
                      <div>
                        <li>
                          Here are the biggest enterprise technology
                          acquisitions of 2021 so far, in reverse chronological
                          order
                        </li>
                        <li>
                          Here are the biggest enterprise technology
                          acquisitions of 2021 so far, in reverse chronological
                          order
                        </li>
                      </div>
                      <div>
                        <Link to="/packageDetail">
                          <button class="border-none shadow-xl bg-blue-100 p-[10px] w-[100%] mt-3 text-[18px] font-m hover:bg-blue-400 hover:ease-in-out duration-300 rounded-lg">
                            Details
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="flex justify-end max-w-7xl mx-auto py-4 cursor-pointer pr-3">
              <img src={arrow} alt="" />
            </div>
          </div>

          {/* ------------------------------------------------- 2nd-------------------------- */}

          <div className="special_package_section">
            <div className="help_package_section">
              <h1 className="text-[24px] text-black font-[500] text-center mt-[50px] mb-[26px]">
                SPECIAL PACKAGE
              </h1>
              <div className=" flex justify-center items-center gap-x-[50px]">
                {packages.map((val) => {
                  return (
                    <div class="max-w-sm bg-white rounded-lg  shadowborder-gray-700 shadow-xl">
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
                          <p className="text-[10px] text-black font-[400]">
                            Using online appointment scheduling systems offers
                            wide-ranging benefits for both patients and
                            healthcare providers. It enables practices to update
                            and improve their practice’s services and allows
                            them to devote more time to offering quality patient
                            care. Online scheduling offers patients consistency
                            and predictability
                          </p>
                        </div>
                        <p className="text-[16px] text-black font-[400]">
                          Male : 10,000tk, Female : 12,000tk, Child : 5000tk
                        </p>
                        <div>
                          <Link to="/packageDetail">
                            <button class="border-none shadow-xl bg-blue-100 p-[10px] w-[100%] mt-3 text-[18px] font-m hover:bg-blue-400 hover:ease-in-out duration-300 rounded-lg">
                              Details
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="flex justify-end max-w-7xl mx-auto py-4 cursor-pointer pr-3">
                <img src={arrow} alt="" />
              </div>
            </div>
          </div>

          {/* -------------------------------------- 3rd -------------------------------- */}
          <div className="child_package_section">
            <div className="help_package_section">
              <h1 className="text-[24px] text-black font-[500] text-center mt-[50px] mb-[26px]">
                CHILD PACKAGE
              </h1>
              <div className=" flex justify-center items-center gap-x-[50px]">
                {packages.map((val) => {
                  return (
                    <div class="max-w-sm bg-white rounded-lg  shadowborder-gray-700 shadow-xl">
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
                          <p className="text-[10px] text-black font-[400]">
                            Using online appointment scheduling systems offers
                            wide-ranging benefits for both patients and
                            healthcare providers. It enables practices to update
                            and improve their practice’s services and allows
                            them to devote more time to offering quality patient
                            care. Online scheduling offers patients consistency
                            and predictability
                          </p>
                        </div>
                        <p className="text-[16px] text-black font-[400]">
                          Male : 10,000tk, Female : 12,000tk, Child : 5000tk
                        </p>
                        <div>
                          <Link to="/packageDetail">
                            <button class="border-none shadow-xl bg-blue-100 p-[10px] w-[100%] mt-3 text-[18px] font-m hover:bg-blue-400 hover:ease-in-out duration-300 rounded-lg">
                              Details
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="flex justify-end max-w-7xl mx-auto py-4 cursor-pointer pr-3">
                <img src={arrow} alt="" />
              </div>
            </div>
          </div>
          <div class="seemore_button   flex justify-center p-[20px] mt-[44px]">
            <button class="bg-[#026E5F] rounded-md p-[10px] w-[208px] text-white font-b ">
              See More
            </button>
          </div>
        </div>

        {/* -------------------- mobile View-------------------------------- */}
        <div className="mobile_view_packages block lg:hidden">
          <div className="">
            <SeeallPackagesSliders
              packages={packages}
              tittle={tittle}
              tittle2={tittle2}
            />
          </div>

          {/* <div className="">
<SeeallPackagesSliders packages={packages} tittle={tittle2}/>
</div>
<div className="">
<SeeallPackagesSliders packages={packages} tittle={tittle3}/>
</div> */}
        </div>
      </div>
    </div>
  );
};

export default SeeallPackages;
