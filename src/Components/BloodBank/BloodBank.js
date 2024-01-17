import React from "react";
import "./bloodband.scss";
import { FaFacebookF, FaTelegram, FaWhatsapp } from "react-icons/fa";
import SingleDonor from "./SingleDonor";
import { useState } from "react";
import { useEffect } from "react";
const BloodBank = () => {
  const [donor, setDonor] = useState([]);
  useEffect(() => {
    fetch("https://hospital-server-tau.vercel.app/bloodDonor")
      .then((res) => res.json())
      .then((data) => setDonor(data));
  }, []);
  console.log(donor);
  return (
    <div className=" ">
      <div className=" ">
        <div class="mb-16">
          <dh-component>
            <div class="container flex justify-center mx-auto pt-16">
              <div>
                <p class="text-gray-500 text-lg text-center font-normal pb-3">
                  BLOOD DONOR
                </p>
                <h1 class="xl:text-4xl text-3xl text-center text-gray-800 font-extrabold pb-6 sm:w-4/6 w-5/6 mx-auto">
                  The Talented People Behind the Scenes of the Donation
                </h1>
              </div>
            </div>
            <div class="w-full bg-gray-100 px-10 pt-10">
              <div class="container mx-auto">
                <div
                  role="list"
                  aria-label="Behind the scenes People "
                  class="lg:flex md:flex sm:flex items-center xl:justify-around flex-wrap md:justify-around sm:justify-around lg:justify-around"
                >
                  {donor?.map((value) => (
                    <SingleDonor value={value} />
                  ))}
                </div>
              </div>
            </div>
          </dh-component>
        </div>
      </div>
    </div>
  );
};

export default BloodBank;
