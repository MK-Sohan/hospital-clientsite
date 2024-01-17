import { deleteUser } from "firebase/auth";
import React, { useState } from "react";
import { useQuery } from "react-query";
import SingleUsers from "./SingleUsers";
import Loading from "../Loading/Loading";

const Allusers = () => {
  const [deleteuser, setDeleteuser] = useState(null);
  const [search, setSesrch] = useState("");

  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery("user", () =>
    fetch("https://hospital-server-tau.vercel.app/alluser", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accesstoken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className="w-4/4 lg:w-[100%]">
      <div className="search py-5 ">
        <input
          onChange={(e) => setSesrch(e.target.value)}
          className="border-[1px] h-12 w-80 px-3 focus:outline-none"
          type="search"
          name=""
          id=""
          placeholder="Search by Email"
        />
      </div>
      <div className=" ">
        <div className="overflow-x-auto">
          <table className="table w-full">
            {/* <!-- head --> */}
            <thead className="text-2xl">
              <tr>
                <th></th>
                <th>Email</th>
                <th>Make admin</th>
                <th>Remove user</th>
              </tr>
            </thead>
            <tbody>
              {/* <!-- row 1 --> */}
              {users
                ?.filter((val) => val?.email?.toLowerCase().includes(search))
                ?.map((user) => (
                  <SingleUsers
                    key={user._id}
                    setDeleteuser={setDeleteuser}
                    index
                    user={user}
                    refetch={refetch}
                  ></SingleUsers>
                ))}
            </tbody>
          </table>
        </div>
        {/* <DeleteuserModal
        deleteuser={deleteuser}
        refetch={refetch}
      ></DeleteuserModal> */}
      </div>
    </div>
  );
};

export default Allusers;
