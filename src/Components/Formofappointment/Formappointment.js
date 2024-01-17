import { getAuth } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import app from "../../firebase.init";
const auth = getAuth(app);
const Formappointment = () => {
  const navigate = useNavigate();
  const { doctorId } = useParams();
  const [patientType, setPatientType] = useState(null);
  const handleRadioChange = (selectedType) => {
    setPatientType(selectedType);
  };
  const [user, loading, error] = useAuthState(auth);
  // console.log(user);
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
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const email = user?.email;
  const onSubmit = async (data) => {
    const productinfo = {
      name: data.name,
      phone: data.number,
      address: data.address,
      description: data.description,
      email: email,
      docdetail: docdetail,
    };
    fetch("https://hospital-server-tau.vercel.app/addappointment", {
      method: "POST",
      body: JSON.stringify(productinfo),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        toast("Appointment Added Successfully");
        // console.log(json);
      });
    reset();
  };
  console.log(docdetail);
  return (
    <div className="mb-20 px-2 lg:px-0">
      <div className="form_header_section flex justify-center items-center ">
        <div className="flex items-center justify-center pt-6">
          <div className="doctor_detail_banner_content text-center w-[629px]  flex flex-col items-center py-[25px]">
            <h1 className="font-[400] text-[28px] text-[#026E5F]">
              {docdetail.name}
            </h1>
            <p className="font-[400] text-[26px] text-black">
              Speciality : {docdetail.speciality}
            </p>
            <p className="font-[400] text-[26px] text-black">
              Siting Time : {docdetail.sitingtime}
            </p>
            {/* <div className="rating mt-[10px]">
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
          </div> */}
          </div>
          <img className="h-[200px] w-[200px]" src={docdetail.image} alt="" />
        </div>
      </div>
      <div className="h-[1px] w-full bg-black my-5"></div>

      <div className="form_container">
        {/* --------------------------------------- input continer-------------------------- */}
        <div className="mb-10 h-full  w-full  px-4">
          <div className="flex flex-col items-center justify-center">
            <div className="bg-white shadow rounded lg:w-1/3  md:w-1/2 w-full p-10 mt-16">
              <p
                tabIndex={0}
                role="heading"
                aria-label="Login to your account"
                className="text-2xl font-extrabold leading-6 mb-7 text-center text-gray-800"
              >
                Fillup the form
              </p>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                  <lable className="text-sm font-medium leading-none text-gray-800">
                    Patient Name
                  </lable>
                  <input
                    aria-label="enter email adress"
                    role="input"
                    type="text"
                    className="bg-gray-200 border rounded focus:outline-none text-xl font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                    {...register("name", {
                      required: {
                        value: true,
                        message: "Product name Required",
                      },
                    })}
                  />
                  <label className="label">
                    {errors.name?.type === "required" && (
                      <span className="label-text-alt text-red-500">
                        {errors.name.message}
                      </span>
                    )}
                  </label>
                </div>
                <div>
                  <lable className="text-sm font-medium leading-none text-gray-800">
                    Patient Email
                  </lable>
                  <input
                    aria-label="enter email adress"
                    role="input"
                    type="email"
                    value={email}
                    className="bg-gray-200 border rounded focus:outline-none text-xl font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                    {...register("email", {
                      required: {
                        value: true,
                        message: "Email is Required",
                      },
                    })}
                  />
                  <label className="label">
                    {errors.email?.type === "required" && (
                      <span className="label-text-alt text-red-500">
                        {errors.email.message}
                      </span>
                    )}
                  </label>
                </div>
                <div>
                  <lable className="text-sm font-medium leading-none text-gray-800">
                    Patient Phone Number
                  </lable>
                  <input
                    aria-label="enter email adress"
                    role="input"
                    type="text"
                    className="bg-gray-200 border rounded focus:outline-none text-xl font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                    {...register("number", {
                      required: {
                        value: true,
                        message: "Phone number is Required",
                      },
                    })}
                  />
                  <label className="label">
                    {errors.number?.type === "required" && (
                      <span className="label-text-alt text-red-500">
                        {errors.number.message}
                      </span>
                    )}
                  </label>
                </div>
                {/* <div>
                  <lable className="text-sm font-medium leading-none text-gray-800">
                    Product Image <br />
                    <span className="text-green-600">
                      {" "}
                      please add a image link
                    </span>
                  </lable>
                  <input
                    aria-label="enter email adress"
                    role="input"
                    type="text"
                    className="bg-gray-200 border rounded focus:outline-none text-xl font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                    {...register("image", {
                      required: {
                        value: true,
                        message: "Image is Required",
                      },
                    })}
                  />
                  <label className="label">
                    {errors.image?.type === "required" && (
                      <span className="label-text-alt text-red-500">
                        {errors.image.message}
                      </span>
                    )}
                  </label>
                </div> */}
                <div>
                  <lable className="text-sm font-medium leading-none text-gray-800">
                    Description
                  </lable>

                  <textarea
                    aria-label="enter email adress"
                    role="input"
                    type="text"
                    className="bg-gray-200 border rounded focus:outline-none text-xl font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                    {...register("description", {
                      required: {
                        value: true,
                        message: "Description is Required",
                      },
                    })}
                  />
                  <label className="label">
                    {errors.description?.type === "required" && (
                      <span className="label-text-alt text-red-500">
                        {errors.description.message}
                      </span>
                    )}
                  </label>
                </div>
                <div>
                  <lable className="text-sm font-medium leading-none text-gray-800">
                    Patient Address
                  </lable>
                  <input
                    aria-label="enter email adress"
                    role="input"
                    type="text"
                    className="bg-gray-200 border rounded focus:outline-none text-xl font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                    {...register("address", {
                      required: {
                        value: true,
                        message: "Address is Required",
                      },
                    })}
                  />
                  <label className="label">
                    {errors.address?.type === "required" && (
                      <span className="label-text-alt text-red-500">
                        {errors.address.message}
                      </span>
                    )}
                  </label>
                </div>

                <div className="mt-8">
                  <button
                    role="button"
                    aria-label="create my account"
                    className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-sm font-semibold leading-none text-white focus:outline-none bg-green-600 border rounded hover:bg-green-400 hover:text-gray-700 py-4 w-full font-bold text-xl"
                  >
                    GET APPOINTMENT
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Formappointment;
