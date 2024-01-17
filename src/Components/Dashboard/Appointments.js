import React, { useEffect, useState } from "react";
import SingleAllappointments from "./SingleAllappointments";
import { useQuery } from "react-query";

const Appointments = () => {
  const [search, setSesrch] = useState("");

  // const [appointments, setAppointments] = useState([]);
  // useEffect(() => {
  //   fetch("https://hospital-server-tau.vercel.app/allappointments")
  //     .then((res) => res.json())
  //     .then((data) => setAppointments(data));
  // }, []);
  const {
    data: appointments,
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["pcart"],
    queryFn: () =>
      fetch("https://hospital-server-tau.vercel.app/allappointments").then(
        (res) => res.json()
      ),
  });
  console.log(appointments);
  return (
    <div className="w-[100%]">
      <div className="">
        <div className="search py-5 ">
          <input
            onChange={(e) => setSesrch(e.target.value)}
            className="border-[1px] h-12 w-80 px-3 focus:outline-none"
            type="search"
            placeholder="Search by Email"
          />
        </div>
      </div>
      <div className="flex justify-center items-center   flex-col">
        {appointments
          ?.filter((val) => val?.docdetail?.name.toLowerCase().includes(search))
          ?.map((value) => {
            return (
              <SingleAllappointments
                key={value._id}
                value={value}
                refetch={refetch}
              ></SingleAllappointments>
            );
          })}
      </div>
    </div>
  );
};

export default Appointments;
