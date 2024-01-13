import React, { useState } from "react";
import heroimage from "../../Assets/heroimage/th (5) 1.png";
import { BsFillPersonFill } from "react-icons/bs";
import icon3 from "../../Assets/bannericon/3.png";
import img1 from "../../Assets/doctors/info-6.jpg";
import bgimage from "../../Assets/heroimage/bookappointment-2.png";
import "./bookappointment.scss";
import { Link } from "react-router-dom";
import { FaClock } from "react-icons/fa";
const Bookappointment = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    // console.log(formData);
    // Close the modal
    toggleModal();
  };

  return (
    <div id="doctorappointment">
      <div class="hidden lg:block book_an_appoinment  mt-[0px]">
        <div class=" flex justify-start items-center w-[100%]">
          <div class="h-[535px] w-[50%]">
            <img src={img1} alt="" />
          </div>
          <div class="details_appointment bg-red-600  p-5 w-[50%] h-[535px]">
            <h1 class="text-[32px] font-bold text-white">
              Book an Appointment
            </h1>
            <p class="w-[637px] text-white  ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse,
              eaque voluptatum natus doloremque odit ad, eos optio cum,
              consectetur error et quidem voluptatem dolor autem facere in
              itaque ipsum dolore!
            </p>
            <div></div>
            <div class="flex items-center gap-3 text-white mt-4">
              <FaClock />
              <p class="font-sb text-white">Save your time</p>
            </div>
            <div class="flex items-center gap-3 text-white">
              <BsFillPersonFill></BsFillPersonFill>
              Find a Best Doctor’s
            </div>
            <div class="seemore_button   flex justify-start mt-9">
              <Link to="/doctors">
                {" "}
                <button class="bg-white rounded-sm p-[10px] w-[208px] text-gray-700 font-b ">
                  Find the Best Doctor's
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ---------------------------Mobile view start---------------- */}

      <div className="block lg:hidden book_appointment_mobile_view w-[315px] mx-auto py-[40px]">
        <div className="book_appointment_bg_image ">
          <div className="details flex flex-col items-center justify-center px-3 py-9 ">
            <h1 class="text-[20px] font-bold text-black">
              Book an Appointment
            </h1>
            <div class="flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 50 50"
                width="17px"
                height="17px"
              >
                <path d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 37.039062 10.990234 A 1.0001 1.0001 0 0 0 36.265625 11.322266 L 26.183594 22.244141 A 3 3 0 0 0 25 22 A 3 3 0 0 0 22 25 A 3 3 0 0 0 25 28 A 3 3 0 0 0 25.5 27.958984 L 29.125 34.486328 A 1.0010694 1.0010694 0 1 0 30.875 33.513672 L 27.246094 26.984375 A 3 3 0 0 0 28 25 A 3 3 0 0 0 27.652344 23.599609 L 37.734375 12.677734 A 1.0001 1.0001 0 0 0 37.039062 10.990234 z" />
              </svg>
              <p class="font-sb">Save your time</p>
            </div>
            <div class="flex items-center gap-3">
              <BsFillPersonFill></BsFillPersonFill>
              Find a Best Doctor’s
            </div>
          </div>
          <div class="seemore_button   w-full mt-9">
            <button
              onClick={toggleModal}
              class="bg-[#df30307c] rounded-sm p-[10px] w-full text-white font-b "
            >
              Book an Appointment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bookappointment;
