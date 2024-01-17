import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import CarouselTabTwoMobile from "../TabTwo/CarouselTabTwoMobile";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Singlemanagemedicine from "./Singlemanagemedicine";
import { useQuery } from "react-query";

const ManageMedicines = () => {
  // const [medicine, setMedicine] = useState([]);
  const [search, setSesrch] = useState("");
  console.log(search);
  // useEffect(() => {
  //   fetch("https://hospital-server-tau.vercel.app/allmedicine")
  //     .then((res) => res.json())
  //     .then((data) => setMedicine(data));
  // }, []);
  const {
    data: medicine,
    isLoading,
    refetch,
  } = useQuery("user", () =>
    fetch("https://hospital-server-tau.vercel.app/allmedicine", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accesstoken")}`,
      },
    }).then((res) => res.json())
  );
  return (
    <div>
      {" "}
      <div className="">
        <div className="tabtwoPharmecy_main_container hidden lg:block">
          <div className="select_test_main_container   gap-x-2 ">
            {/* ------------------------- right side--------------------------------------------- */}

            <div className="drugs_details_rightside w-[100%] mx-auto">
              <div className="tabs_main_container">
                <h1 className=" text-black font-[500] w-[182px] h-[36px] text-[24px] font-sans text-center mx-auto leading-[31px] pt-[30px] ">
                  BUY MEDICINE
                </h1>
                <div className="search-bar">
                  <input
                    onChange={(e) => setSesrch(e.target.value)}
                    className="border-2 h-[50px] w-[300px] focus:outline-none px-2 rounded-lg text-xl"
                    type="search"
                    name=""
                    id=""
                    placeholder="Search by Name"
                  />
                </div>

                <div className="">
                  <div className="containerr pt-[49px]">
                    <div className=" grid md:grid-cols-4 grid-cols-1 lg:grid-cols-6 gap-y-10 lg:gap-x-24 justify-items-start">
                      {medicine?.filter((val) =>val?.name?.toLowerCase().includes(search)).map((value) => {
                          return (
                            <Singlemanagemedicine
                              value={value}
                              key={value._id}
                              refetch={refetch}
                            ></Singlemanagemedicine>
                          );
                        })}
                    </div>

                    <div class="seemore_button   flex gap-x-2 justify-end p-[20px]">
                      <button className="bg-[#D9D9D9] p-3 text-[22px] font-[900] hover:bg-slate-400">
                        <AiOutlineLeft />
                      </button>
                      {/* <div className='h-1 w-10 bgba'></div> */}
                      <button className="bg-[#D9D9D9] p-3 text-[22px] font-[900] hover:bg-slate-400">
                        <AiOutlineRight />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <CarouselTabTwoMobile />

        <div className=""></div>

        <div className=""></div>
      </div>
    </div>
  );
};

export default ManageMedicines;
