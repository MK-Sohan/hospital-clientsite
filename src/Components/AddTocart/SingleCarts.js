import React, { useState } from "react";
import { toast } from "react-toastify";

const SingleCarts = ({ value, setOrderdelete, refetch }) => {
  // console.log(value);
  const HandleDelete = (id) => {
    // console.log(id);
    fetch(`https://hospital-server-tau.vercel.app/cart/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        refetch();
        toast.warning("Item Deleted");
      });
  };
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const handleAddtocart = (p) => {
    const cartProduct = {
      name: p.name,
      image: p.image,
      price: p.price,
      exp: p.expdate,
      company: p.company,
      about: p.about,
      quantity: quantity,
    };
    console.log(cartProduct);
    fetch(`https://hospital-server-tau.vercel.app/cart/${p._id}`, {
      method: "PUT",
      body: JSON.stringify(cartProduct),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        toast("Item aded to the cart");
      });
  };
  return (
    <div className="mb-6 rounded-lg bg-white  shadow-md">
      <div class="flex items-center space-x-4 justify-end pr-2 pt-2">
        <svg
          onClick={() => HandleDelete(value._id)}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </div>
      <div class="justify-between  sm:flex sm:justify-start p-2">
        <img
          src={value.image}
          alt="product-image"
          class="w-[150px] h-[150px] border-2  rounded-lg object-cover"
        />
        <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
          <div class="mt-5 sm:mt-0">
            <h2 class="text-lg font-bold text-gray-900">Name: {value.name}</h2>
            <h2 class="text-lg font-bold text-gray-900">
              Exp-date : {value.exp}
            </h2>
            <h2 class="text-lg font-bold text-gray-900">
              Company : {value.company}
            </h2>
            <h2 class="text-lg font-bold text-gray-900">
              Price : {Number(value.price) * value.quantity} ৳
            </h2>
          </div>
          <div class="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
            <div className="flex items-center mt-4 gap-x-4">
              <span className="text-sm font-semibold flex items-center gap-x-3">
                Quantity : <p>{value.quantity}</p>{" "}
              </span>
              <div className="quantity-container flex items-center gap-x-3">
                {/* <button
                  className="bg-slate-500 text-white flex items-center justify-center font-bold text-xl rounded-full w-6 h-6"
                  onClick={handleDecrement}
                >
                  -
                </button> */}
                {/* <input
                  className="w-[40px] focus:outline-none border-2 text-center flex justify-center"
                  type="number"
                  name=""
                  id=""
                  value={value.quantity}
                /> */}
                {/* <button
                  className="bg-slate-500 text-white flex items-center justify-center font-bold text-xl rounded-full w-6 h-6"
                  onClick={handleIncrement}
                >
                  +
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCarts;
