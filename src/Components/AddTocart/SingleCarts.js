import React from "react";
import { toast } from "react-toastify";

const SingleCarts = ({ value, setOrderdelete, refetch }) => {
  console.log(value);
  const HandleDelete = (id) => {
    console.log(id);
    fetch(`http://localhost:5000/cart/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        refetch();
        toast.warning("Item Deleted");
      });
  };

  return (
    <div>
      <div class="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
        <img
          src={value.image}
          alt="product-image"
          class="w-[100px] h-[100px] rounded-lg object-contain"
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
          </div>
          <div class="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
            <div class="flex items-center border-gray-100">
              <span class="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50">
                {" "}
                -{" "}
              </span>
              <input
                class="h-8 w-8 border bg-white text-center text-xs outline-none"
                type="number"
                value="2"
                min="1"
              />
              <span class="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50">
                {" "}
                +{" "}
              </span>
            </div>
            <div class="flex items-center space-x-4">
              <p class="text-lg">{value.price} ৳ </p>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCarts;
