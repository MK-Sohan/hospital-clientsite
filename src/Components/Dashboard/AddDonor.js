import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const AddDonor = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    const donorInfo = {
      name: data.name,
      image: data.image,
      app: data.app,
      about: data.description,
      email: data.email,
      phone: data.phone,
      telegram: data.telegram,
      facebook: data.facebook,
      group: data.group,
    };
    console.log(donorInfo);
    fetch("https://hospital-server-tau.vercel.app/addbloodDonor", {
      method: "POST",
      body: JSON.stringify(donorInfo),
      headers: {
        "Content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accesstoken")}`,
      },
    })
      .then((response) => response.json())
      .then((json) => {
        toast("Donor Added Successfully");
      });
    reset();
  };
  const bloodgroups = [
    {
      group: "A+",
      donors: ["A+", "AB+"],
      receivers: ["A+", "A-", "O+", "O-"],
    },
    {
      group: "A-",
      donors: ["A+", "A-", "AB+", "AB-"],
      receivers: ["A-", "O-"],
    },
    {
      group: "B+",
      donors: ["B+", "AB+"],
      receivers: ["B+", "B-", "O+", "O-"],
    },
    {
      group: "B-",
      donors: ["B+", "B-", "AB+", "AB-"],
      receivers: ["B-", "O-"],
    },
    {
      group: "AB+",
      donors: ["AB+"],
      receivers: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
    },
    {
      group: "AB-",
      donors: ["AB+", "AB-"],
      receivers: ["A-", "B-", "AB-", "O-"],
    },
    {
      group: "O+",
      donors: ["A+", "B+", "AB+", "O+"],
      receivers: ["O+", "O-"],
    },
    {
      group: "O-",
      donors: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
      receivers: ["O-"],
    },
  ];

  return (
    <div className="  w-full pb-[100px]">
      <div className="w-full ">
        <div className="mb-10 h-full  w-[50%] mx-auto  px-4">
          <div className="flex flex-col items-center justify-center">
            <div className="bg-white shadow rounded lg:w-[100%]  md:w-1/2 w-full p-10 mt-16">
              <p
                tabIndex={0}
                role="heading"
                aria-label="Login to your account"
                className="text-2xl font-extrabold leading-6 mb-7 text-center text-gray-800"
              >
                Add Blood Donor
              </p>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                  <lable className="text-sm font-medium leading-none text-gray-800">
                    Donor Name
                  </lable>
                  <select
                    aria-label="enter email adress"
                    type="text"
                    className="bg-gray-200 text-black border rounded focus:outline-none text-xl font-medium leading-none  py-3 w-full pl-3 mt-2"
                    {...register("group")}
                  >
                    {bloodgroups?.map((val) => (
                      <option className="text-black " value={val.group}>
                        {val.group}
                      </option>
                    ))}
                  </select>

                  <label className="label">
                    {errors.group?.type === "required" && (
                      <span className="label-text-alt text-red-500">
                        {errors.group.message}
                      </span>
                    )}
                  </label>
                </div>
                <div>
                  <lable className="text-sm font-medium leading-none text-gray-800">
                    Donor Name
                  </lable>
                  <input
                    aria-label="enter email adress"
                    role="input"
                    type="text"
                    className="bg-gray-200 border rounded focus:outline-none text-xl font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                    {...register("name", {
                      required: {
                        value: true,
                        message: "Donor name Required",
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
                    Donor Image
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
                    Donor Email
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
                    Donor What's app No
                  </lable>
                  <input
                    aria-label="enter email adress"
                    role="input"
                    type="text"
                    className="bg-gray-200 border rounded focus:outline-none text-xl font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                    {...register("app", {
                      required: {
                        value: true,
                        message: "Whatsapp is Required",
                      },
                    })}
                  />
                  <label className="label">
                    {errors.app?.type === "required" && (
                      <span className="label-text-alt text-red-500">
                        {errors.app.message}
                      </span>
                    )}
                  </label>
                </div>
                <div>
                  <lable className="text-sm font-medium leading-none text-gray-800">
                    Donor Telegram ID
                  </lable>
                  <input
                    aria-label="enter email adress"
                    role="input"
                    type="text"
                    className="bg-gray-200 border rounded focus:outline-none text-xl font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                    {...register("telegram", {
                      required: {
                        value: true,
                        message: "Telegram is Required",
                      },
                    })}
                  />
                  <label className="label">
                    {errors.telegram?.type === "required" && (
                      <span className="label-text-alt text-red-500">
                        {errors.telegram.message}
                      </span>
                    )}
                  </label>
                </div>
                <div>
                  <lable className="text-sm font-medium leading-none text-gray-800">
                    Donor Phone No.
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
                    Donor Facobook Link
                  </lable>
                  <input
                    aria-label="enter email adress"
                    role="input"
                    type="text"
                    className="bg-gray-200 border rounded focus:outline-none text-xl font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                    {...register("facebook", {
                      required: {
                        value: true,
                        message: "Facebook Link is Required",
                      },
                    })}
                  />
                  <label className="label">
                    {errors.facebook?.type === "required" && (
                      <span className="label-text-alt text-red-500">
                        {errors.facebook.message}
                      </span>
                    )}
                  </label>
                </div>
                <div>
                  <lable className="text-sm font-medium leading-none text-gray-800">
                    About Donor
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

export default AddDonor;
