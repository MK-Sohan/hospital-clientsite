import React, { useEffect, useState } from "react";
import img1 from "../../Assets/tabcardsliderimage/th 2.png";
import { Link, useParams } from "react-router-dom";
import app from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { getAuth } from "firebase/auth";
import { toast } from "react-toastify";
import useMycartItem from "../Hooks/useMycartItem";
const auth = getAuth(app);
const Drugdetails = () => {
  const [quantity, setQuantity] = useState(1);
  const [user, loading, error] = useAuthState(auth);
  const [product, refetch, isLoading] = useMycartItem();

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const { medicineId } = useParams();
  // console.log(medicineId);
  const [medidetail, setMedidetail] = useState({});
  useEffect(() => {
    if (medicineId) {
      fetch(`https://hospital-server-tau.vercel.app/allmedicine/${medicineId}`)
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          setMedidetail(data);
        });
    }
  }, [medicineId]);
  console.log(medidetail);
  const handleAddtocart = (p) => {
    const cartProduct = {
      name: p.name,
      image: p.image,
      price: p.price,
      exp: p.expdate,
      company: p.company,
      about: p.about,
      quantity: quantity,
      email: user.email,
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
        refetch();
        toast.success("Item aded to the cart");
      });
  };
  return (
    <div>
      <div className="drug_detail_main_container my-10 max-w-[1200px]  w-full mx-auto ">
        <div className="drug_hero_section flex flex-col lg:flex-row items-center  gap-10">
          <div className="image px-3 lg:px-0">
            <img
              className="h-[450px] w-[450px]"
              src={medidetail.image}
              alt=""
            />
          </div>
          <div className="hero_details text-center lg:text-start font-[500] text-black lg:py-4">
            <p>
              <span className="text-xl font-semibold">Name : </span>{" "}
              {medidetail.name}
            </p>
            <p>
              {" "}
              <span className="text-xl font-semibold">Company : </span>{" "}
              {medidetail.company}
            </p>
            <p>
              {" "}
              <span className="text-xl font-semibold">Best Price* : </span>{" "}
              {medidetail.price} ৳
            </p>
            <p>
              {" "}
              <span className="text-xl font-semibold">Expiry-Date : </span>{" "}
              {medidetail.expdate} ৳
            </p>
            <div className="flex items-center mt-4 gap-x-4">
              <span className="text-xl font-semibold">Quantity : </span>{" "}
              <div className="quantity-container  flex items-center gap-x-3">
                <button
                  onClick={handleDecrement}
                  className="bg-slate-500 text-white flex items-center justify-center font-bold text-xl rounded-full w-6 h-6"
                >
                  -
                </button>
                <input
                  className="w-[60px] focus:outline-none border-2 text-center flex justify-center"
                  type="number"
                  name=""
                  id=""
                  value={quantity}
                />
                <button
                  onClick={handleIncrement}
                  className="bg-slate-500 text-white flex items-center justify-center font-bold text-xl rounded-full w-6 h-6"
                >
                  +
                </button>
              </div>
            </div>

            <button
              onClick={() => handleAddtocart(medidetail)}
              className="bg-[#91C1BB] w-[197px] h-[40px] rounded-3xl mt-1 lg:mt-5 hover:bg-transparent border-[2px] transition-all hover:border-[#91C1BB]"
            >
              Add to Cart
            </button>
          </div>
        </div>

        <div className="drug_details_section mt-10 px-3 lg:px-0 lg:text-start text-center">
          <div className="d1">
            <h1 className="font-[600] text-[20px] text-[#026E5F]">
              ABOUT THE MEDICINE
            </h1>
            <p className="font-[400] text-[20px] text-black mt-3">
              {medidetail.about}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Drugdetails;
