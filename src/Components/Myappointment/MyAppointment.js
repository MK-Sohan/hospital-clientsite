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
  const [myAppointment, setMyappointment] = useState([]);
  const navigate = useNavigate();
  const [user, loading, error] = useAuthState(auth);
  const email = user?.email;
  // const [refetch] = useCartitem();
  // useEffect(() => {
  //   fetch("http://localhost:5000/alldoctors")
  //     .then((res) => res.json())
  //     .then((data) => setAllDoctors(data));
  // }, []);
  // console.log(myAppointment);
  const {
    data: alldoctors,
    refetch,
    isLoading,
  } = useQuery("pcart", () =>
    fetch("http://localhost:5000/alldoctors", {
      method: "GET",
      // headers: {
      //   authorization: `Bearer ${localStorage.getItem("accesstoken")}`,
      // },
    }).then((res) => res.json())
  );
  console.log(alldoctors);
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
    <div className="w-[50%] mx-auto mb-6 h-[100%]">
      <div className="">
        {myAppointment?.map((doctor) => (
          <MySingleappointment
            doctor={doctor}
            refetch={refetch}
          ></MySingleappointment>
        ))}
      </div>
    </div>
  );
};

export default MyAppointment;
