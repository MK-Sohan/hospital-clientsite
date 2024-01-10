import React, { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Loading/Loading";
import { Pagination } from "swiper";
import SingleOrder from "./SingleOrder";
import useRefetch from "../Hooks/useRefetch";

const AllcustomerOrders = () => {
  const {
    data: allorders,
    isLoading,
    refetch,
  } = useQuery("user", () =>
    fetch("http://localhost:5000/deliverallorders", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accesstoken")}`,
      },
    }).then((res) => res.json())
  );
  //   console.log(allorders);
  return (
    <div className="w-[100%]">
      <div className="overflow-x-auto w-[100%]">
        <table className="table w-[100%] ">
          {/* head */}
          <thead className="">
            <tr className="text-xl">
              <th>
                {/* <label>
                  <input type="checkbox" className="checkbox" />
                </label> */}
              </th>
              <th>Customer Name</th>
              <th>Phone no.</th>
              <th>Email</th>
              <th>Product name</th>
              <th>Product quantity</th>
              <th>Remove product</th>
            </tr>
          </thead>
          {allorders?.map((order) => (
            <SingleOrder order={order} refetch={refetch}></SingleOrder>
          ))}
        </table>
      </div>
    </div>
  );
};

export default AllcustomerOrders;
