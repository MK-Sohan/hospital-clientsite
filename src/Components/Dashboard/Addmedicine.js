import React from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const Addmedicine = () => {
  // const [editmediId] = useParams();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    const productinfo = {
      name: data.name,
      image: data.image,
      price: data.price,
      about: data.description,
      expdate: data.expiry,
      company: data.company,
    };
    console.log(productinfo);
    fetch("https://hospital-server-tau.vercel.app/addmedicine", {
      method: "POST",
      body: JSON.stringify(productinfo),
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
              Add Medicine
            </p>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <lable className="text-sm font-medium leading-none text-gray-800">
                  Medicine Name
                </lable>
                <input
                  aria-label="enter email adress"
                  role="input"
                  type="text"
                  className="bg-gray-200 border rounded focus:outline-none text-xl font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                  {...register("name", {
                    required: {
                      value: true,
                      message: "Medicine name Required",
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
                  Medicine Image
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
                  Medicine Price
                </lable>
                <input
                  aria-label="enter email adress"
                  role="input"
                  type="text"
                  className="bg-gray-200 border rounded focus:outline-none text-xl font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                  {...register("price", {
                    required: {
                      value: true,
                      message: "Price is Required",
                    },
                  })}
                />
                <label className="label">
                  {errors.price?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.price.message}
                    </span>
                  )}
                </label>
              </div>
              <div>
                <lable className="text-sm font-medium leading-none text-gray-800">
                  Company
                </lable>
                <input
                  aria-label="enter email adress"
                  role="input"
                  type="text"
                  className="bg-gray-200 border rounded focus:outline-none text-xl font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                  {...register("company", {
                    required: {
                      value: true,
                      message: "Company Name is Required",
                    },
                  })}
                />
                <label className="label">
                  {errors.company?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.company.message}
                    </span>
                  )}
                </label>
              </div>
              <div>
                <lable className="text-sm font-medium leading-none text-gray-800">
                  Expiry Date
                </lable>
                <input
                  aria-label="enter email adress"
                  role="input"
                  type="text"
                  className="bg-gray-200 border rounded focus:outline-none text-xl font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                  {...register("expiry", {
                    required: {
                      value: true,
                      message: "Expiry Date is Required",
                    },
                  })}
                />
                <label className="label">
                  {errors.expiry?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.expiry.message}
                    </span>
                  )}
                </label>
              </div>
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

              <div className="mt-8">
                <button
                  role="button"
                  aria-label="create my account"
                  className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-sm font-semibold leading-none text-white focus:outline-none bg-green-600 border rounded hover:bg-green-400 hover:text-gray-700 py-4 w-full font-bold text-xl"
                >
                  ADD PRODUCT
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Addmedicine;
