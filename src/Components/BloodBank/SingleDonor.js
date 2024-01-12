import React from "react";
import {
  FaFacebookF,
  FaTelegram,
  FaTelegramPlane,
  FaWhatsapp,
} from "react-icons/fa";

const SingleDonor = () => {
  return (
    <div className="">
      <div role="listitem" class=" relative mt-16 mb-32 sm:mb-24 w-[360px]">
        <div class="rounded overflow-hidden shadow-md bg-white">
          <div class="absolute -mt-20 w-full flex justify-center">
            <div class="h-32 w-32">
              <img
                src="https://cdn.tuk.dev/assets/photo-1564061170517-d3907caa96ea.jfif"
                alt="Display Picture of Andres Berlin"
                role="img"
                class="rounded-full object-cover h-full w-full shadow-md"
              />
            </div>
          </div>
          <div class="px-6 mt-16 ">
            <h1 class="font-bold text-3xl text-center mb-1">
              Blood Group : B+
            </h1>
            <p class="text-black text-lg mt-3 text-center">
              <span className="text-xl font-bold">Name : </span> Taj Mahbubul
              Kabir
            </p>
            <p class="text-black text-lg mt-1 text-center">
              <span className="text-xl font-bold">Phone no : </span> 01314945466
            </p>

            <p class="text-center text-gray-800 text-base pt-3 font-normal">
              The CEO's role in raising a company's corporate IQ is to establish
              an atmosphere that promotes knowledge sharing and collaboration.
            </p>
            <div class="w-full flex justify-center pt-5 pb-5">
              <a href="javascript:void(0)" class="mx-5">
                <div
                  className="text-xl text-white flex justify-center items-center red  h-[40px] w-[40px] "
                  aria-label="Github"
                  role="img"
                >
                  <FaFacebookF />
                </div>
              </a>

              <a href="javascript:void(0)" class="mx-5">
                <div
                  className="text-2xl font-extrabold  text-white flex justify-center items-center red  h-[40px] w-[40px] "
                  aria-label="Github"
                  role="img"
                >
                  <FaWhatsapp />
                </div>
              </a>
              <a href="javascript:void(0)" class="mx-5">
                <div
                  className="text-xl text-white flex justify-center items-center red  h-[40px] w-[40px] "
                  aria-label="Github"
                  role="img"
                >
                  <FaTelegram />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleDonor;
