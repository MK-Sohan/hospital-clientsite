import React, { useEffect, useState } from "react";
import "./doctor.scss";
import image1 from "../../Assets/doctorsimage/1.png";
import image2 from "../../Assets/doctorsimage/2.png";

import image3 from "../../Assets/doctorsimage/3.png";
import { Link, useNavigate } from "react-router-dom";

const Doctors = () => {
  const [allDoctors, setAllDoctors] = useState([]);
  const [sesrch, setSesrch] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/alldoctors")
      .then((res) => res.json())
      .then((data) => setAllDoctors(data));
  }, []);
  // console.log(allDoctors);
  const handleDetail = (id) => {
    navigate("/doctordetail/" + id);
  };
  return (
    <div className="doctors_main_container flex flex-col lg:flex-row gap-[10px] justify-center  ">
      <div className="flex flex-col ">
        <div className="bg-[#FFF0F0] flex flex-col justify-center items-center  rounded">
          <div class=" py-1 lg:py-[22px]">
            <p className="w-[134px] p-[5px] font-[500] text-[20px]">NAME</p>

            <input
              onChange={(e) => setSesrch(e.target.value)}
              type="text"
              placeholder=""
              className="input border-[1px] border-black w-[313px]  lg:w-[488px] rounded-sm"
            />
          </div>
        </div>
        <div className=" flex  justify-end px-6 pt-2">
          <button className="btn bg-[#00A662] w-[127px]   text-white flex justify-center font-[500] text-[16px] hover:text-black">
            Search
          </button>
        </div>
      </div>

      {/* ------------------------------------------------------------------------------------ */}
      <div className="flex flex-col">
        {allDoctors
          .filter((val) => val.name.toLowerCase().includes(sesrch))
          ?.map((doctor) => (
            <div className="doctors_card_maindiv mt-[26px] flex justify-center flex-col items-center">
              <div className="doctors_single_card py-[6px] w-[98%]  shadow-2xl flex flex-col items-center lg:flex-row bg-[#FFF0F0] ">
                <div className="doctors_card_imagediv rounded-full overflow-hidden lg:rounded-none  flex justify-center lg:pt-2 w-[176px] h-[176px] lg:w-[213px] lg:h-[244px] bg-[#B4B4B4]">
                  <Link to="/doctordetail">
                    <img
                      className="lg:w-[174px] lg:h-[232px] rounded-full lg:rounded-none "
                      src={doctor.image}
                      alt=""
                    />
                  </Link>
                </div>
                <div className="doctors_card_details w-[318px]  lg:w-[450px] pl-[21px]">
                  <div className="name_and_review  flex flex-col items-center lg:flex-row justify-between ">
                    <p className="text-[#026E5F] font-[600] text-[20px]">
                      {doctor.name}
                    </p>

                    <div className="">
                      <div className="rating ">
                        <input
                          name="rating-2"
                          className="mask mask-star-2 bg-orange-400"
                          checked
                        />
                        <input
                          name="rating-2"
                          className="mask mask-star-2 bg-orange-400"
                          checked
                        />
                        <input
                          name="rating-2"
                          className="mask mask-star-2 bg-orange-400"
                          checked
                        />
                        <input
                          name="rating-2"
                          className="mask mask-star-2 bg-orange-400"
                          checked
                        />
                        <input
                          name="rating-2"
                          className="mask mask-star-2 bg-orange-400"
                          checked
                        />
                      </div>
                    </div>
                  </div>

                  <div className="text-start text-[16px]">
                    <p className="pt-[8px]"> Speciality - {doctor.specialty}</p>
                  </div>

                  <div className="text-start text-[16px]">
                    <p className="pt-[8px]"> Email - {doctor.email}</p>
                  </div>
                  <div className="text-start text-[16px]">
                    <p className="pt-[8px]"> Phone - {doctor.phone}</p>
                  </div>
                  <div className="text-start text-[16px]">
                    <p className="pt-[8px]">
                      {" "}
                      About - {doctor.about?.slice(0, 70)}...
                    </p>
                  </div>
                  <div className="block lg:hidden">
                    <div
                      className="flex flex-col items-center gap-y-2 py-2
w-full"
                    >
                      <Link to="/appointmentDoctor" className="w-[100%]">
                        <button className="btn btn-accent w-[100%]">
                          Get Appointment
                        </button>
                      </Link>
                      {/* <Link
                        to={`/doctordetail/${doctor._id}`}
                        className="w-[100%]"
                      >
                        {console.log(doctor._id)}
                        <button className="btn btn-accent w-[100%]">
                          Doctor’s Profiles
                        </button>
                      </Link> */}

                      <button
                        onClick={() => handleDetail(doctor._id)}
                        className="btn btn-accent w-[100%]"
                      >
                        Doctor’s Profiles
                      </button>

                      {/* <Link
                        to={`/doctordetail/${doctor._id || "defaultId"}`}
                        className="w-[100%]"
                      >
                        <button className="btn btn-accent w-[100%]">
                          Doctor’s Profiles
                        </button>
                      </Link> */}
                    </div>
                  </div>
                  <div className="hidden lg:block">
                    <div className="flex  lg:gap-[5px] lg:mt-[85px]">
                      <Link to="/appointmentDoctor" className="">
                        <button className="btn bg-[#91C1BB] rounded-3xl lg:px-5 text-[12px] lg:text-[16px]  font-[400]">
                          Get Appointment
                        </button>
                      </Link>

                      <button
                        onClick={() => handleDetail(doctor._id)}
                        className="btn bg-[#91C1BB] rounded-3xl px-5  text-[16px] font-[400]"
                      >
                        Doctor’s Profiles
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Doctors;
