import { getAuth } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import app from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";
import useCartitem from "../AddTocart/useCartitem";
import MySingleappointment from "./MySingleappointment";
import { useQuery } from "react-query";

const auth = getAuth(app);
const MyAppointment = () => {
  // const [allDoctors, setAllDoctors] = useState([]);
  // const [myAppointment, setMyappointment] = useState([]);
  const [pageloading, setPageLoading] = useState(false);
  // const [taj, setTaj] = useState(false);
  const navigate = useNavigate();
  const [user, loading, error] = useAuthState(auth);
  const email = user?.email;

  const {
    data: myAppointment,
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["pcart"],
    queryFn: () =>
      fetch(
        `https://hospital-server-tau.vercel.app/myappointment/${email}`
      ).then((res) => res.json()),
  });
  // console.log(alldoctors);
  // useEffect(() => {
  //   if (email) {
  //     fetch(`https://hospital-server-tau.vercel.app/myappointment/${email}`)
  //       .then((res) => res.json())
  //       .then((data) => {
  //         // console.log(data);b
  //         setMyappointment(data);
  //       });
  //   }
  // }, [email]);

  return (
    <div className="h-[100vh]">
      <div className="w-[50%] mx-auto pb-7  ">
        <div className="pt-5">
          {myAppointment?.map((doctor) => (
            <MySingleappointment
              doctor={doctor}
              refetch={refetch}
              setPageLoading={setPageLoading}
            ></MySingleappointment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyAppointment;
