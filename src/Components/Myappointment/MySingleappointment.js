import React from "react";
import { FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";

const MySingleappointment = ({ doctor, refetch, setPageLoading }) => {
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
      <div className="doctors_card_maindiv shadow-2xl mt-5   bg-white items-center">
        <div className="float-right pr-2 pt-2 ">
          <button
            onClick={() => handleDeleteAppointment(doctor._id)}
            className="flex justify-center items-center gap-x-1 bg-red-600 text-white p-1 rounded-lg hover:bg-red-700"
          >
            Remove <FaTrash />
          </button>
        </div>
        <div className="doctors_single_card pl-6 py-[6px] w-[98%]   flex flex-col items-center lg:flex-row  ">
          <div className="doctors_card_imagediv rounded-full overflow-hidden lg:rounded-none  flex justify-center lg:pt-2 w-[176px] h-[176px] lg:w-[213px] lg:h-[244px] ">
            <img
              className="lg:w-[174px] lg:h-[232px] rounded-full lg:rounded-none "
              src={doctor.image}
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
                Doctor's Name - {doctor?.docdetail?.name}
              </p>
            </div>
            <div className="text-start text-[16px]">
              <p className="pt-[8px]">
                {" "}
                Doctor's Speciality - {doctor?.docdetail?.speciality}
              </p>
            </div>

            <div className="text-start text-[16px]">
              <p className="pt-[8px]">
                Doctor's Email - {doctor?.docdetail?.email}
              </p>
            </div>
            <div className="text-start text-[16px]">
              <p className="pt-[8px]">
                Doctor's Phone no. - {doctor?.docdetail?.phone}
              </p>
            </div>
            <div className="text-start text-[16px]">
              <p className="pt-[8px]">
                {" "}
                Doctor's About - {doctor?.docdetail?.about?.slice(0, 70)}...
              </p>
            </div>
            <div className="name_and_review  flex flex-col items-center lg:flex-row justify-between py-5">
              <p className="text-[#026E5F] font-[600] text-[20px]">
                Patient Information :
              </p>
            </div>
            <div className="text-start text-[16px]">
              <p className="pt-[8px]"> Patient Name - {doctor?.name}</p>
            </div>
            <div className="text-start text-[16px]">
              <p className="pt-[8px]"> Patient Phone - {doctor?.phone}</p>
            </div>
            <div className="text-start text-[16px]">
              <p className="pt-[8px]"> Patient Email - {doctor?.email}</p>
            </div>
            <div className="text-start text-[16px]">
              <p className="pt-[8px]"> Patient Address - {doctor?.address}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MySingleappointment;
