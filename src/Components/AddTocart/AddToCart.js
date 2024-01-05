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
const auth = getAuth(app);
const AddToCart = () => {
  const [orderdelete, setOrderdelete] = useState(null);
  const [user, loading, error] = useAuthState(auth);
  console.log(user.email);
  const cartuser = user?.email;
  const {
    data: product,
    refetch,
    isLoading,
  } = useQuery("pcart", () =>
    fetch(`http://localhost:5000/cartallproducts/${cartuser}`).then((res) =>
      res.json()
    )
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
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
              <p class="text-gray-700">$129.99</p>
            </div>
            <div class="flex justify-between">
              <p class="text-gray-700">Shipping</p>
              <p class="text-gray-700">$4.99</p>
            </div>
            <hr class="my-4" />
            <div class="flex justify-between">
              <p class="text-lg font-bold">Total</p>
              <div class="">
                <p class="mb-1 text-lg font-bold">$134.98 USD</p>
                <p class="text-sm text-gray-700">including VAT</p>
              </div>
            </div>
            <button class="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">
              Check out
            </button>
          </div>
        </div>
      </div>
      {/* <OrderDeleteModal orderdelete={product}></OrderDeleteModal> */}
    </div>
  );
};

export default AddToCart;
