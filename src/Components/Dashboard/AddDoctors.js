import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const AddDoctors = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    const doctorinfo = {
      name: data.name,
      image: data.image,
      speciality: data.speciality,
      about: data.description,
      email: data.email,
      phone: data.phone,
      sitingtime: data.time,
    };
    console.log(doctorinfo);
    fetch("https://hospital-server-tau.vercel.app/addDoctor", {
      method: "POST",
      body: JSON.stringify(doctorinfo),
      headers: {
        "Content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accesstoken")}`,
      },
    })
      .then((response) => response.json())
      .then((json) => {
        toast("Item aded to the cart");
      });
    reset();
  };
  return (
    <div className="w-full mb-[100px]">
      <div className="h-[100vh] w-full">
        <div className="mb-10 h-full  w-[50%] mx-auto  px-4">
          <div className="flex flex-col items-center justify-center">
            <div className="bg-white shadow rounded lg:w-[100%]  md:w-1/2 w-full p-10 mt-16">
              <p
                tabIndex={0}
                role="heading"
                aria-label="Login to your account"
                className="text-2xl font-extrabold leading-6 mb-7 text-center text-gray-800"
              >
                Add Doctor
              </p>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                  <lable className="text-sm font-medium leading-none text-gray-800">
                    Doctor Name
                  </lable>
                  <input
                    aria-label="enter email adress"
                    role="input"
                    type="text"
                    className="bg-gray-200 border rounded focus:outline-none text-xl font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                    {...register("name", {
                      required: {
                        value: true,
                        message: "Doctor name Required",
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
                    Doctor Image
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
                </div>
                <div>
                  <lable className="text-sm font-medium leading-none text-gray-800">
                    Doctor speciality
                  </lable>
                  <input
                    aria-label="enter email adress"
                    role="input"
                    type="text"
                    className="bg-gray-200 border rounded focus:outline-none text-xl font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                    {...register("speciality", {
                      required: {
                        value: true,
                        message: "Speciality is Required",
                      },
                    })}
                  />
                  <label className="label">
                    {errors.speciality?.type === "required" && (
                      <span className="label-text-alt text-red-500">
                        {errors.speciality.message}
                      </span>
                    )}
                  </label>
                </div>
                <div>
                  <lable className="text-sm font-medium leading-none text-gray-800">
                    Doctor's Email
                  </lable>
                  <input
                    aria-label="enter email adress"
                    role="input"
                    type="text"
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
                    Doctor's Phone No.
                  </lable>
                  <input
                    aria-label="enter email adress"
                    role="input"
                    type="text"
                    className="bg-gray-200 border rounded focus:outline-none text-xl font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                    {...register("phone", {
                      required: {
                        value: true,
                        message: "Phone Number is Required",
                      },
                    })}
                  />
                  <label className="label">
                    {errors.phone?.type === "required" && (
                      <span className="label-text-alt text-red-500">
                        {errors.phone.message}
                      </span>
                    )}
                  </label>
                </div>
                <div>
                  <lable className="text-sm font-medium leading-none text-gray-800">
                    Doctor Siting Time
                  </lable>
                  <input
                    aria-label="enter email adress"
                    role="input"
                    type="text"
                    className="bg-gray-200 border rounded focus:outline-none text-xl font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                    {...register("time", {
                      required: {
                        value: true,
                        message: "Doctor Siting Time is Required",
                      },
                    })}
                  />
                  <label className="label">
                    {errors.time?.type === "required" && (
                      <span className="label-text-alt text-red-500">
                        {errors.time.message}
                      </span>
                    )}
                  </label>
                </div>
                <div>
                  <lable className="text-sm font-medium leading-none text-gray-800">
                    About Doctor's
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

                <div className="mt-8">
                  <button
                    role="button"
                    aria-label="create my account"
                    className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-sm font-semibold leading-none text-white focus:outline-none bg-green-600 border rounded hover:bg-green-400 hover:text-gray-700 py-4 w-full font-bold text-xl"
                  >
                    ADD DOCTOR
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

export default AddDoctors;
