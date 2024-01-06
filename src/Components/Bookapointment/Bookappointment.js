import React, { useState } from "react";
import heroimage from "../../Assets/heroimage/th (5) 1.png";
import { BsFillPersonFill } from "react-icons/bs";
import icon3 from "../../Assets/bannericon/3.png";
import bgimage from "../../Assets/heroimage/bookappointment-2.png";
import "./bookappointment.scss";
import { Link } from "react-router-dom";
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
    console.log(formData);
    // Close the modal
    toggleModal();
  };

  return (
    <div>
      <div class="hidden lg:block book_an_appoinment  p-[40px]">
        <div class="appointment_child_container flex justify-center gap-9 items-center">
          <div class="details_appointment">
            <h1 class="text-[32px] font-bold text-black">
              Book an Appointment
            </h1>
            <p class="w-[637px] h-[84px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse,
              eaque voluptatum natus doloremque odit ad, eos optio cum,
              consectetur error et quidem voluptatem dolor autem facere in
              itaque ipsum dolore!
            </p>
            <div></div>
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
            <div class="seemore_button   flex justify-start mt-9">
              <Link to="/doctors">
                {" "}
                <button class="bg-[#026E5F] rounded-sm p-[10px] w-[208px] text-white font-b ">
                  Find the Best Doctor's
                </button>
              </Link>
            </div>
            {isOpen && (
              <div className="fixed inset-0 flex w-[100%] justify-center z-50 overflow-auto">
                {/* <div className="absolute inset-0 bg-black opacity-50"></div> */}
                <div className="relative z-10   rounded-md shadow-lg">
                  <button
                    onClick={toggleModal}
                    className="absolute top-3 right-3 z-50 p-1 bg-gray-300 rounded-md"
                  >
                    <svg
                      className="w-4 h-4 text-gray-700"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 6.707a1 1 0 011.414 0L10 8.586l3.293-3.293a1 1 0 011.414 1.414L11.414 10l3.293 3.293a1 1 0 01-1.414 1.414L10 11.414l-3.293 3.293a1 1 0 01-1.414-1.414L8.586 10 5.293 6.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                  <div className="relative z-10 bg-[#242424] p-6 text-white   rounded-md shadow-lg">
                    <h2 className="text-xl font-bold text-center pt-2">
                      Request a Surgery
                    </h2>
                    <div className="">
                      <p className="font-[600] text-[1vw] text-white">
                        Patient Information
                      </p>
                      <p className="font-[500] mt-1 text-[1vw] text-white">
                        Patient Status
                      </p>
                      <div className="flex items-center gap-x-6">
                        <p className="font-[500] text-[1vw] text-white ">
                          {" "}
                          I am a
                        </p>
                        <div className="flex items-center gap-x-3">
                          <input type="radio" name="" id="" />
                          <p className="font-[500]  text-[1vw] text-white">
                            New Patient
                          </p>
                        </div>
                        <div className="flex items-center gap-x-3">
                          <input type="radio" name="" id="" />
                          <p className="font-[500] text-[1vw] text-white">
                            New Patient
                          </p>
                        </div>
                      </div>
                    </div>
                    <form className="mt-3" onSubmit={handleSubmit}>
                      <div className="input_first_mother_container flex gap-x-3">
                        <div className="input_container_one">
                          <div className="single_container_one w-[19vw]">
                            <div>
                              <input
                                placeholder="Name"
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                              />
                            </div>

                            <div>
                              <select class="block w-full px-4 py-2 mt-2  bg-white   rounded-md  text-gray-500 focus:outline-none ">
                                <option>Gender</option>
                                <option>Male</option>
                                <option>Female</option>
                              </select>
                            </div>
                            <div>
                              <select class="block w-full px-4 py-2 mt-2  bg-white   rounded-md  text-gray-500 focus:outline-none ">
                                <option>Marital Status</option>
                                <option>Single</option>
                                <option>Married</option>
                              </select>
                            </div>
                            <div className="mt-2">
                              <input
                                placeholder="Write Your Problem"
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="input_container_two">
                          <div className="single_container_one w-[19vw]">
                            <div>
                              <select class="block w-full px-4 py-2  bg-white   rounded-md  text-gray-500 focus:outline-none ">
                                <option>Age</option>
                                <option>20</option>
                                <option>30</option>
                              </select>
                            </div>
                            <div className="mt-2">
                              <input
                                placeholder="Name"
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                              />
                            </div>
                            <div className="mt-2">
                              <input
                                placeholder="Name"
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                              />
                            </div>
                            <div className="mt-2">
                              <input
                                placeholder="Prescription"
                                type="file"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border  border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="input_container_three">
                          <div className="w-[19vw]">
                            <input
                              placeholder="Date of Birth"
                              id="date"
                              type="date"
                              class="block w-full px-4 py-[6px]  text-gray-700 bg-white border  rounded-md focus:outline-none "
                            />
                          </div>

                          <div className="mt-2">
                            <input
                              placeholder="Email"
                              type="text"
                              id="name"
                              name="Email"
                              value={formData.name}
                              onChange={handleChange}
                              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                          </div>
                          <div className="mt-2">
                            <input
                              placeholder="Permanent Address"
                              type="text"
                              id="name"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="mb-0 ">
                        <label
                          htmlFor="message"
                          className="block mb-2 font-medium"
                        >
                          Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          className="w-full h-[58px] px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          rows="4"
                        ></textarea>
                      </div>

                      <div className="surgery_information">
                        <p className="font-[600]  text-[1vw] text-white">
                          Surgery Information
                        </p>
                        <div className="surgery_input flex gap-x-8 ">
                          <div className="w-[360px]">
                            <select class="block w-full px-4 py-2 mt-0  bg-white   rounded-md  text-gray-500 focus:outline-none ">
                              <option>DEPARTMENT</option>
                              <option>Surgery</option>
                              <option>Medicine</option>
                            </select>
                          </div>
                          <div className="w-[19vw]">
                            <input
                              placeholder="Date of Birth"
                              id="date"
                              type="date"
                              class="block w-full px-4 py-2  text-gray-700 bg-white border  rounded-md focus:outline-none "
                            />
                          </div>
                          <div className="w-[19vw]">
                            <input
                              placeholder="Date of Birth"
                              id="date"
                              type="time"
                              class="block w-full px-4 py-2  text-gray-700 bg-white border  rounded-md focus:outline-none "
                            />
                          </div>
                        </div>
                      </div>
                      <div className="">
                        <p className="font-[600] mt-1 text-[1vw] text-white">
                          Doctor referral letter
                        </p>
                        <div className=" w-[364px]">
                          <input
                            placeholder="Permanent Address"
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                        </div>
                      </div>
                      <div className="flex justify-center mt-5">
                        <button
                          type="submit"
                          className="  bg-[#00DC82] text-black w-[15.9vw] h-[2.65vw]  rounded-[33.5px]"
                        >
                          Confirm
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div class="image_appointment">
            <img src={heroimage} alt="" />
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
