import React, { useEffect, useState } from "react";
import image from "../../Assets/doctordetailimage/png-woman-doctor--602 1.png";
import image1 from "../../Assets/doctorsimage/1.png";

import "./doctordetails.scss";
import { Link, useNavigate, useParams } from "react-router-dom";
const Doctordetails = () => {
  const navigate = useNavigate();
  const { doctorId } = useParams();
  console.log(doctorId);
  const [docdetail, setDocdetail] = useState({});
  useEffect(() => {
    if (doctorId) {
      fetch(`https://hospital-server-tau.vercel.app/alldoctors/${doctorId}`)
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          setDocdetail(data);
        });
    }
  }, [doctorId]);
  console.log(docdetail);
  const handleDoctorappointmentform = (id) => {
    navigate("/appointmentform/" + id);
  };
  return (
    <div className="">
      <div className=" desktop_view hidden lg:block">
        <div className="  doctor_detail_main_container bg-white flex  items-center flex-col">
          <div className="doctor_detail_banner w-full bg-[#FFEAEA] flex items-center justify-center h-[424px]">
            <div className="doctor_detail_banner_content text-center w-[629px] flex flex-col items-center">
              <h1 className="font-[400] text-[24px] text-[#026E5F]">
                {docdetail.name}
              </h1>
              <p className="font-[400] text-[24px] text-black">
                Speciality - {docdetail.speciality}
              </p>
              <p className="font-[400] text-[16px] text-black">
                Phone: {docdetail.phone}
              </p>
              <p className="font-[400] text-[16px] text-black">
                Email: {docdetail.email}
              </p>
              <p className="font-[400] text-[16px] text-black">
                Doctor Siting Time: {docdetail.sitingtime}
              </p>
              {/* <div className="rating mt-[10px]">
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
              </div> */}
              <div className="">
                {" "}
                <button
                  onClick={() => handleDoctorappointmentform(docdetail._id)}
                  className="bg-[#91C1BB] w-[197px] h-[43px] rounded-3xl mt-[19px]"
                >
                  Get Appointment
                </button>
              </div>
            </div>
            <div className="doctor_detail_banner_image">
              <img src={docdetail.image} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className=" mb-[106px] ml-[100px]  border-3">
        <p className="font-[700] text-[26px] text-black py-4 text-start">
          ABOUT:
        </p>
        {docdetail.about}
      </div>
      {/*---------------------------- mobile view-------------------- */}
      <div className="block lg:hidden">
        <div className="doctors_single_card py-[26px] w-[98%]  shadow-3xl  flex flex-col items-center lg:flex-row bg-[#FFF0F0] ">
          <div className="doctors_card_imagediv rounded-full overflow-hidden lg:rounded-none  flex justify-center lg:pt-2 w-[176px] h-[176px] lg:w-[213px] lg:h-[244px] bg-[#B4B4B4]">
            <Link to="/doctordetail">
              <img
                className="lg:w-[174px] lg:h-[232px] rounded-full lg:rounded-none "
                src={image1}
                alt=""
              />
            </Link>
          </div>
          <div
            className="flex flex-col items-center gap-y-2 py-2
w-full"
          >
            <Link to="/appointmentDoctor" className="w-[95%]">
              <button className="btn btn-accent w-[100%] bg-[#91C1BB] rounded-[21px]">
                Get Appointment
              </button>
            </Link>
          </div>
          <div className="doctors_card_details w-[100%]  lg:w-[450px] pl-[21px]">
            <div className="name_and_review  flex flex-col items-center lg:flex-row justify-between ">
              <p className="text-[#026E5F] font-[600] text-[20px]">
                {" "}
                DR. Aisha Tanjina
              </p>

              <div className="">
                <div className="rating ">
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    checked
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    checked
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    checked
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    checked
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    checked
                  />
                </div>
              </div>
            </div>

            <div className="text-center text-[16px]">
              <p className="pt-[8px]">
                {" "}
                Speciality - Associate Consultant, Pediatric CardiologyDegree -
                MBBS, DCH, FCPS (Pediatrics), Trained in Noninvasive Pediatric
                Cardiology (NICVD)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctordetails;
