import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";

const SingleUsers = ({ user, index, refetch, setDeleteuser }) => {
  const { email, role } = user;
  const makeAdmin = () => {
    fetch(`http://localhost:5000/user/admin/${email}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accesstoken")}`,
      },
    })
      .then((res) => {
        if (res.status === 403) {
          toast.error("Faild to make an admin");
        }
        return res.json();
      })
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          toast.success("Successfully Made an Admin");
        }
      });
  };

  return (
    <tr className="bg-slate-300 text-black text-2xl rounded-2xl">
      <th>{index}</th>
      <td>{user.email}</td>
      <td>
        {role !== "admin" ? (
          <button
            onClick={makeAdmin}
            className="btn btn-success font-bold text-white btn-xs"
          >
            Make Admin
          </button>
        ) : (
          <p className="text-green-600 font-bold">Already an Admin</p>
        )}
      </td>
      <td>
        <label
          onClick={() => setDeleteuser(user)}
          for="user-delete-modal"
          className="btn btn-error btn-xs"
        >
          Remove User
        </label>
      </td>{" "}
    </tr>
  );
};

export default SingleUsers;
