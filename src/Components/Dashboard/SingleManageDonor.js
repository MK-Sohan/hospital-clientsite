import React from "react";
import { FaFacebookF, FaTelegram, FaTrash, FaWhatsapp } from "react-icons/fa";
import { toast } from "react-toastify";

const SingleManageDonor = ({ value, refetch }) => {
  const handleDonorDelete = (id) => {
    console.log(id);
    // const confirm = alert("Are you sure");
    fetch(`https://hospital-server-tau.vercel.app/donorDelete/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        refetch();
        toast.warning("Item Deleted");
      });
  };
  return (
    <div role="listitem" class=" relative mt-16 mb-32 sm:mb-24 w-[360px]">
      <div class="rounded overflow-hidden shadow-md bg-white">
        <div class="absolute -mt-20 w-full flex justify-center">
          <div class="h-32 w-32">
            <img
              src={value.image}
              alt="Display Picture of Andres Berlin"
              role="img"
              class="rounded-full object-cover h-full w-full shadow-md"
            />
          </div>
        </div>
        <div class="px-6 mt-16 ">
          <h1 class="font-bold text-3xl text-center mb-1">
            Blood Group : {value.group}
          </h1>
          <p class="text-black text-lg mt-3 text-center">
            <span className="text-xl font-bold">Name : </span> {value.name}
          </p>
          <p class="text-black text-lg mt-1 text-center">
            <span className="text-xl font-bold">Phone no : </span> {value.phone}
          </p>

          <p class="text-center text-gray-800 text-base pt-3 font-normal">
            {value.about}
          </p>
          <div class="w-full flex justify-center pt-5 pb-5">
            <a href={value.facebook} class="mx-5">
              <div
                className="text-xl text-white flex justify-center items-center red  h-[40px] w-[40px] "
                aria-label="Github"
                role="img"
              >
                <FaFacebookF />
              </div>
            </a>

            <a href={value.app} class="mx-5">
              <div
                className="text-2xl font-extrabold  text-white flex justify-center items-center red  h-[40px] w-[40px] "
                aria-label="Github"
                role="img"
              >
                <FaWhatsapp />
              </div>
            </a>
            <a href={value.telegram} class="mx-5">
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
        <div className="flex justify-center pb-5">
          <button
            onClick={() => handleDonorDelete(value._id)}
            className="btn red btn-sm text-white"
          >
            Delete <FaTrash />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleManageDonor;
