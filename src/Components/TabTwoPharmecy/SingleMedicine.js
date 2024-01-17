import React from "react";
import { Link } from "react-router-dom";
import { BiTime, BiChevronDown } from "react-icons/bi";
import { FaCartPlus } from "react-icons/fa";
import { toast } from "react-toastify";
const SingleMedicine = ({ value }) => {
  const handleAddtocart = (p) => {
    const cartProduct = {
      name: p.name,
      image: p.image,
      price: p.price,
      exp: p.expdate,
      company: p.company,
      about: p.about,
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
        alert("Item aded to the cart");
      });
  };

  return (
    <div>
      <div className="relative rounded w-[90%]  font-[400] text-[16px] text-black  ">
        <img
          className="w-[100%] h-[250px] object-cover border-2"
          src={value.image}
          alt=""
        />
        <div className="px-1 py-1">
          <p>
            <span className="text-lg font-semibold">Name : </span> {value.name}{" "}
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

        <div className="flex justify-center items-center mb-3">
          <Link to={`/drugDetails/${value._id}`}>
            <button className="rounded-3xl w-[104px] h-[31px] text-white font-[500] text-[10px] flex justify-center items-center bg-[#026E5F] ">
              Buy Now
            </button>
          </Link>
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

export default SingleMedicine;
