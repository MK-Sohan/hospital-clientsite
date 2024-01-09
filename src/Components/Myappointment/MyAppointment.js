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
      fetch(`http://localhost:5000/myappointment/${email}`).then((res) =>
        res.json()
      ),
  });
  // console.log(alldoctors);
  // useEffect(() => {
  //   if (email) {
  //     fetch(`http://localhost:5000/myappointment/${email}`)
  //       .then((res) => res.json())
  //       .then((data) => {
  //         // console.log(data);
  //         setMyappointment(data);
  //       });
  //   }
  // }, [email]);

  return (
    <div className="w-[50%] mx-auto mb-[100px] h-[100vh] ">
      <div className="">
        {myAppointment?.map((doctor) => (
          <MySingleappointment
            doctor={doctor}
            refetch={refetch}
            setPageLoading={setPageLoading}
          ></MySingleappointment>
        ))}
      </div>
    </div>
  );
};

export default MyAppointment;
