import { getAuth } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import app from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
const auth = getAuth(app);
const MyAppointment = () => {
  const [allDoctors, setAllDoctors] = useState([]);
  const [sesrch, setSesrch] = useState("");
  const [myAppointment, setMyappointment] = useState([]);
  const navigate = useNavigate();
  const [user, loading, error] = useAuthState(auth);
  const email = user?.email;
  useEffect(() => {
    fetch("http://localhost:5000/alldoctors")
      .then((res) => res.json())
      .then((data) => setAllDoctors(data));
  }, []);
  console.log(myAppointment);
  useEffect(() => {
    if (email) {
      fetch(`http://localhost:5000/myappointment/${email}`)
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          setMyappointment(data);
        });
    }
  }, [email]);

  return (
    <div className="w-[50%] mx-auto mb-6 h-[100vh]">
      <div className="flex flex-col">
        {myAppointment?.map((doctor) => (
          <div className="doctors_card_maindiv  mt-[26px] flex justify-center flex-col items-center">
            <div className="doctors_single_card pl-6 py-[6px] w-[98%]  shadow-2xl flex flex-col items-center lg:flex-row bg-[#FFF0F0] ">
              <div className="doctors_card_imagediv rounded-full overflow-hidden lg:rounded-none  flex justify-center lg:pt-2 w-[176px] h-[176px] lg:w-[213px] lg:h-[244px] bg-[#B4B4B4]">
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
                    Doctor's Name - {doctor.docdetail.name}
                  </p>
                </div>
                <div className="text-start text-[16px]">
                  <p className="pt-[8px]">
                    {" "}
                    Doctor's Speciality - {doctor.docdetail.speciality}
                  </p>
                </div>

                <div className="text-start text-[16px]">
                  <p className="pt-[8px]">
                    Doctor's Email - {doctor.docdetail.email}
                  </p>
                </div>
                <div className="text-start text-[16px]">
                  <p className="pt-[8px]">
                    Doctor's Phone no. - {doctor.docdetail.phone}
                  </p>
                </div>
                <div className="text-start text-[16px]">
                  <p className="pt-[8px]">
                    {" "}
                    Doctor's About - {doctor.docdetail.about?.slice(0, 70)}...
                  </p>
                </div>
                <div className="name_and_review  flex flex-col items-center lg:flex-row justify-between py-5">
                  <p className="text-[#026E5F] font-[600] text-[20px]">
                    Patient Information :
                  </p>
                </div>
                <div className="text-start text-[16px]">
                  <p className="pt-[8px]"> Patient Name - {doctor.name}</p>
                </div>
                <div className="text-start text-[16px]">
                  <p className="pt-[8px]"> Patient Phone - {doctor.phone}</p>
                </div>
                <div className="text-start text-[16px]">
                  <p className="pt-[8px]"> Patient Email - {doctor.email}</p>
                </div>
                <div className="text-start text-[16px]">
                  <p className="pt-[8px]">
                    {" "}
                    Patient Address - {doctor.address}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyAppointment;
