import React from "react";
import { FaTrash } from "react-icons/fa";
import { useQuery } from "react-query";
import { toast } from "react-toastify";

const SingleAllappointments = ({ value, refetch }) => {
  console.log(value);

  const handleDeleteAppointment = (id) => {
    // console.log(id);
    fetch(`https://hospital-server-tau.vercel.app/deletemyappointment/${id}`, {
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
      <div className="doctors_card_maindiv shadow-2xl   mt-[26px] items-center">
        <div className="float-right pr-2 pt-2 ">
          <button
            onClick={() => handleDeleteAppointment(value._id)}
            className="flex justify-center items-center gap-x-1 bg-red-600 text-white p-1 rounded-lg hover:bg-red-700"
          >
            Remove <FaTrash />
          </button>
        </div>
        <div className="doctors_single_card pl-6 py-[6px] w-[98%]   flex flex-col items-center lg:flex-row  ">
          <div className="doctors_card_imagediv rounded-full overflow-hidden lg:rounded-none  flex justify-center lg:pt-2 w-[176px] h-[176px] lg:w-[213px] lg:h-[244px] ">
            <img
              className="lg:w-[174px] lg:h-[232px] rounded-full lg:rounded-none "
              src={value.image}
              alt=""
            />
          </div>
          <div className="doctors_card_details w-[318px]  lg:w-[450px] pl-[21px]">
            <div className="name_and_review  flex flex-col items-center lg:flex-row justify-between ">
              <p className="text-[#026E5F] font-[600] text-[20px]">
                Doctor's Information :
              </p>
            </div>
            <div className="text-start text-[16px]">
              <p className="pt-[8px]">
                {" "}
                Doctor's Name - {value?.docdetail?.name}
              </p>
            </div>
            <div className="text-start text-[16px]">
              <p className="pt-[8px]">
                {" "}
                Doctor's Speciality - {value?.docdetail?.speciality}
              </p>
            </div>

            <div className="text-start text-[16px]">
              <p className="pt-[8px]">
                Doctor's Email - {value?.docdetail?.email}
              </p>
            </div>
            <div className="text-start text-[16px]">
              <p className="pt-[8px]">
                Doctor's Phone no. - {value?.docdetail?.phone}
              </p>
            </div>
            <div className="text-start text-[16px]">
              <p className="pt-[8px]">
                {" "}
                Doctor's About - {value?.docdetail?.about?.slice(0, 70)}...
              </p>
            </div>
            <div className="name_and_review  flex flex-col items-center lg:flex-row justify-between py-5">
              <p className="text-[#026E5F] font-[600] text-[20px]">
                Patient Information :
              </p>
            </div>
            <div className="text-start text-[16px]">
              <p className="pt-[8px]"> Patient Name - {value?.name}</p>
            </div>
            <div className="text-start text-[16px]">
              <p className="pt-[8px]"> Patient Phone - {value?.phone}</p>
            </div>
            <div className="text-start text-[16px]">
              <p className="pt-[8px]"> Patient Email - {value?.email}</p>
            </div>
            <div className="text-start text-[16px]">
              <p className="pt-[8px]"> Patient Address - {value?.address}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleAllappointments;
