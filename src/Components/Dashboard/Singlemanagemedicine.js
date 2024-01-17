import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Singlemanagemedicine = ({ value, refetch }) => {
  const handleDelete = (id) => {
    console.log(id);
    fetch(`https://hospital-server-tau.vercel.app/medicineDelete/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accesstoken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        refetch();
        toast.warning("Item Deleted");
      });
  };
  return (
    <div>
      <div className="shadow-lg rounded w-[250px] ml-4  font-[400] text-[16px] text-black  ">
        <img
          className="w-[100%] h-[250px] object-cover border-2"
          src={value.image}
          alt=""
        />
        <div className="px-1 pb-[1px]">
          <div className="px-1 py-1">
            <p>
              <span className="text-lg font-semibold">Name : </span>{" "}
              {value.name}{" "}
            </p>
            <p>
              <span className="text-lg font-semibold">Price : </span>{" "}
              {value.price}{" "}
            </p>
            <p>
              <span className="text-lg font-semibold">Expiry date : </span>{" "}
              {value.expdate}{" "}
            </p>
          </div>

          <div className="flex justify-start items-center mb-3">
            <button
              onClick={() => handleDelete(value._id)}
              className="rounded-3xl w-[104px] h-[31px] text-white font-[500] text-[10px] flex justify-center items-center bg-red-500 "
            >
              Delete
            </button>
          </div>

          {/* <Link to="/dashboard">
              <button className="rounded-3xl w-[104px] h-[31px] text-white font-[500] text-[10px] flex justify-center items-center bg-[#026E5F] ">
                Edit
              </button>
            </Link> */}
        </div>
        {/* <div className="absolute top-1 right-2 ">
          <button
            onClick={() => handleAddtocart(value)}
            className=" rounded-3xl flex items-center justify-center gap-x-1 px-3 h-[21px] text-[13px]  bg-[#FFC408] hover:bg-[#dbbe61]"
          >
            Add to Cart <FaCartPlus />
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default Singlemanagemedicine;
