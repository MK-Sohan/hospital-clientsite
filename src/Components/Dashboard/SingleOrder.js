import React from "react";
import { FaCheck } from "react-icons/fa";
import { toast } from "react-toastify";

const SingleOrder = ({ order, refetch, i, currentPage, postsPerPage }) => {
  //   console.log(order.product);
  //   const confirmed = window.confirm("Are you sure to delete ?");
  const handleDelete = (id) => {
    console.log(id);
    fetch(`https://hospital-server-tau.vercel.app/customerOrderdelete/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accesstoken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        refetch();
        toast.warning("Item Deleted");
      });
  };

  return (
    <tbody className="text-lg">
      {/* row 1 */}
      <tr className="bg-green-600 text-white pt-6">
        <th></th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              {/* <div className="mask mask-squircle w-12 h-12">
                <img
                  src="/tailwind-css-component-profile-2@56w.png"
                  alt="Avatar Tailwind CSS Component"
                />
              </div> */}
            </div>
            <div>
              <div className="font-bold">{order.name}</div>
              <div className="text-lg ">{order.address}</div>
            </div>
          </div>
        </td>
        <td>{order.phone}</td>
        <td>{order.email}</td>
        <td>
          {order.product?.map((val) => (
            <h1>{val.name}</h1>
          ))}
        </td>
        <td>
          {order.product?.map((val) => (
            <h1>{val.quantity}</h1>
          ))}
        </td>
        <td>
          <button
            onClick={() => handleDelete(order._id)}
            className="btn btn-sm bg-red-500 text-white"
          >
            Delete
          </button>
        </td>
      </tr>
    </tbody>
  );
};

export default SingleOrder;
