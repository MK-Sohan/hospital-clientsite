import React, { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Loading/Loading";
import { Pagination } from "swiper";
import SingleOrder from "./SingleOrder";
import useRefetch from "../Hooks/useRefetch";
import ReactHTMLTableToExcel from "react-html-table-to-excel";
const AllcustomerOrders = () => {
  const {
    data: allOrders,
    isLoading,
    refetch,
  } = useQuery("order", () =>
    fetch("https://hospital-server-tau.vercel.app/deliver-all-orders", {
      method: "GET",
      // headers: {
      //   authorization: `Bearer ${localStorage.getItem("accesstoken")}`,
      // },
    }).then((res) => res.json())
  );
  console.log(allOrders);
  if (isLoading) {
    <Loading></Loading>;
  }
  return (
    <div className="w-[100%]">
      <div className="overflow-x-auto w-[100%]">
        <ReactHTMLTableToExcel
          id="test-table-xls-button"
          className="download-table-xls-button btn hover:bg-red-900 red mb-3 text-white"
          table="table-to-xls"
          filename="tablexls"
          sheet="tablexls"
          buttonText="Export Data to Excel Sheet"
        />
        <table className="table w-[100%] " id="table-to-xls">
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

          {allOrders?.map((order) => (
              <SingleOrder order={order} refetch={refetch}></SingleOrder>
            ))
          
          }
        </table>
      </div>
    </div>
  );
};

export default AllcustomerOrders;
