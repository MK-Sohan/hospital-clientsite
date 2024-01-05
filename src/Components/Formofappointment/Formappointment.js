import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const Formappointment = () => {
  const navigate = useNavigate();
  const { doctorId } = useParams();
  console.log(doctorId);
  const [docdetail, setDocdetail] = useState({});
  useEffect(() => {
    if (doctorId) {
      fetch(`http://localhost:5000/alldoctors/${doctorId}`)
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          setDocdetail(data);
        });
    }
  }, [doctorId]);
  console.log(docdetail);
  return (
    <div className="mb-20 px-2 lg:px-0">
      <div className="form_header_section flex justify-center items-center ">
        <div className="doctor_detail_banner_content text-center w-[629px]  flex flex-col items-center py-[25px]">
          <h1 className="font-[400] text-[24px] text-[#026E5F]">
            {docdetail.name}
          </h1>
          <p className="font-[400] text-[24px] text-black">
            Speciality - {docdetail.speciality}
          </p>
          <p className="font-[400] text-[16px] text-black">
            5 year of Experience
          </p>
          <div className="rating mt-[10px]">
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
      <div className="h-[1px] w-full bg-black my-5"></div>
      {/* <div className="text-center">
        <p className="font-[500] text-[24px] text-[#6C6C6C] ">
          Date : 3/19/2023
        </p>
        <p className="font-[500] text-[24px] text-[#6C6C6C] ">
          Time : 09:00am- 10:00am
        </p>
      </div> */}

      <div className="form_container">
        {/* --------------------------------------- input continer-------------------------- */}
        <div className="input_container">
          <section class="max-w-4xl p-16 mx-auto bg-[#94bfb9e6] text-black rounded-md shadow-md  mt-20 ">
            <div className="">
              <p className="font-[600] text-[20px] text-black">
                Patient Information
              </p>
              <p className="font-[500] mt-4 text-[20px] text-black">
                Patient Status
              </p>
              <div className="flex flex-col lg:flex-row lg:items-center gap-x-6">
                <p className="font-[500] text-[20px] text-black "> I am a</p>
                <div className="flex items-center gap-x-3">
                  <input type="radio" name="" id="" />
                  <p className="font-[500]  text-[20px] text-black">
                    New Patient
                  </p>
                </div>
                <div className="flex items-center gap-x-3">
                  <input type="radio" name="" id="" />
                  <p className="font-[500] text-[20px] text-black">
                    New Patient
                  </p>
                </div>
              </div>
            </div>
            <form>
              <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2 ">
                <div>
                  <input
                    placeholder="Name"
                    id="username"
                    type="text"
                    class="block w-full px-4 py-2 mt-2
                 text-gray-700 bg-white   rounded-md      focus:outline-none "
                  />
                </div>

                <div>
                  <div>
                    <select class="block w-full px-4 py-2 mt-2  bg-white   rounded-md  text-gray-500 focus:outline-none ">
                      <option>Age</option>
                      <option>20</option>
                      <option>30</option>
                    </select>
                  </div>
                </div>

                <div>
                  <div>
                    <input
                      placeholder="Date of Birth"
                      id="date"
                      type="date"
                      class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border  rounded-md focus:outline-none "
                    />
                  </div>
                </div>

                <div>
                  <select class="block w-full px-4 py-2 mt-2  bg-white   rounded-md  text-gray-500 focus:outline-none ">
                    <option>Gender</option>
                    <option>Male</option>
                    <option>Female</option>
                  </select>
                </div>
                <div>
                  <input
                    placeholder="Phone Number"
                    id="username"
                    type="text"
                    class="block w-full px-4 py-2 mt-2
                 text-gray-700 bg-white   rounded-md      focus:outline-none "
                  />
                </div>
                <div>
                  <input
                    placeholder="Email"
                    id="username"
                    type="email"
                    class="block w-full px-4 py-2 mt-2
                 text-gray-700 bg-white   rounded-md      focus:outline-none "
                  />
                </div>
                {/* <div>
            <input placeholder='Write Your Problem' id="username" type="text" class="block w-full px-4 py-2 mt-2
                 text-gray-700 bg-white   rounded-md      focus:outline-none "/>
            </div> */}

                <div>
                  <textarea
                    placeholder="write your message"
                    id="textarea"
                    type="textarea"
                    class="h-[138px] block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none"
                  ></textarea>
                </div>
                <div>
                  <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                    <div class="space-y-1 text-center">
                      <svg
                        class="mx-auto h-12 w-12 text-black"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 48 48"
                        aria-hidden="true"
                      >
                        <path
                          d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <div class="flex text-sm text-gray-600">
                        <label
                          for="file-upload"
                          class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                        >
                          <span class="">Upload a file</span>
                          <input
                            id="file-upload"
                            name="file-upload"
                            type="file"
                            class="sr-only"
                          />
                        </label>
                        <p class="pl-1 text-black">or drag and drop</p>
                      </div>
                      <p class="text-xs text-black">PNG, JPG, GIF up to 10MB</p>
                    </div>
                  </div>
                </div>
              </div>
            </form>

            <div className="flex flex-col items-center mt-[33px] mb-[50px]">
              <p className="font-[500]  text-[20px] text-black">
                Have you ever applied to our facility before?
              </p>
              <div className="flex items-center gap-x-6">
                <div className="flex items-center gap-x-3">
                  <input type="radio" name="" id="" />
                  <p className="font-[500]  text-[20px] text-black">Yes</p>
                </div>
                <div className="flex items-center gap-x-3">
                  <input type="radio" name="" id="" />
                  <p className="font-[500] text-[20px] text-black">No</p>
                </div>
              </div>
              <div className="">
                <Link to="/OTTP">
                  <button className="bg-[#00A662] px-5 py-2 lg:py-0 lg:px-0 lg:w-[27.950000000000003vw] text-white lg:text-[1.2vw] font-[500] lg:h-[3.35vw] rounded-[40px] hover:bg-[#83d6b4] hover:text-gray-700 transition mt-[19px]">
                    Get Appointment
                  </button>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Formappointment;
