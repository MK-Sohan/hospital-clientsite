import React, { useEffect, useState } from "react";
import img1 from "../../Assets/tabcardsliderimage/th 2.png";
import { Link } from "react-router-dom";
import SingleCarts from "./SingleCarts";
import OrderDeleteModal from "./OrderDeleteModal";
import { useQuery } from "react-query";
import Loading from "../Loading/Loading";
import app from "../../firebase.init";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { getAuth } from "firebase/auth";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
const auth = getAuth(app);
const AddToCart = () => {
  const [orderdelete, setOrderdelete] = useState(null);
  const [user, loading, error] = useAuthState(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  // console.log(user.email);
  const cartuser = user?.email;
  const {
    data: product,
    refetch,
    isLoading,
  } = useQuery("pcart", () =>
    fetch(
      `https://hospital-server-tau.vercel.app/cartallproducts/${cartuser}`
    ).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  // const subtotal
  // console.log(product);

  const onSubmit = async (data) => {
    const productinfo = {
      name: data.name,
      phone: data.number,
      address: data.address,
      email: user?.email,
      product: product,
    };
    console.log(productinfo);
    fetch("https://hospital-server-tau.vercel.app/allcustomerorders", {
      method: "POST",
      body: JSON.stringify(productinfo),
      headers: {
        "Content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accesstoken")}`,
      },
    })
      .then((response) => response.json())
      .then((json) => {
        toast("Checkout Successfully");
        // console.log(json);
      });
    reset();
  };
  const subTotal = product.reduce((total, item) => {
    const subtotal = parseInt(item.price) * item.quantity;
    return total + subtotal;
  }, 0);
  // console.log(subTotal);

  return (
    <div>
      <div class=" bg-gray-100 pt-20 pb-10">
        <h1 class="mb-10 text-center text-2xl font-bold">Cart Items</h1>
        <div class="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
          <div class="rounded-lg md:w-2/3">
            {product?.map((value) => (
              <SingleCarts
                value={value}
                setOrderdelete={setOrderdelete}
                refetch={refetch}
              ></SingleCarts>
            ))}
          </div>

          <div class="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
            <div class="mb-2 flex justify-between">
              <p class="text-gray-700">Subtotal</p>
              <p class="text-gray-700">${subTotal}</p>
            </div>
            <div class="flex justify-between">
              <p class="text-gray-700">Shipping</p>

              <p class="text-gray-700">{product?.length && "$4.99"}</p>
            </div>
            <hr class="my-4" />
            <div class="flex justify-between">
              <p class="text-lg font-bold">Total</p>
              <div class="">
                <p class="mb-1 text-lg font-bold">
                  $ {product?.length && subTotal + 4.99} Taka
                </p>
                {/* <p class="text-sm text-gray-700">including VAT</p> */}
              </div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <lable className="text-sm font-medium leading-none text-gray-800">
                  Your Name
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
                  Your Email
                </lable>
                <input
                  aria-label="enter email adress"
                  role="input"
                  type="email"
                  value={user?.email}
                  className="bg-gray-200 border rounded focus:outline-none text-xl font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Email is Required",
                    },
                  })}
                />
                <label className="label">
                  {errors?.email?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.email.message}
                    </span>
                  )}
                </label>
              </div>
              <div>
                <lable className="text-sm font-medium leading-none text-gray-800">
                  Your Phone Number
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
              {/* <div>
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
              </div> */}
              <div>
                <lable className="text-sm font-medium leading-none text-gray-800">
                  Delivery Address
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
                  class="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600"
                >
                  Check out
                </button>
              </div>
            </form>
            {/* <button
              // onClick={() => handleAllorders(product)}
              class="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600"
            >
              Check out
            </button> */}
          </div>
        </div>
      </div>
      {/* <OrderDeleteModal orderdelete={product}></OrderDeleteModal> */}
    </div>
  );
};

export default AddToCart;
