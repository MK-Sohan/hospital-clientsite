import React, { useEffect, useState } from "react";

const useAdmin = (user) => {
  const [admin, setAdmin] = useState([false]);
  const [isLoading, setIsloading] = useState(false);
  console.log(user?.email, admin);
  useEffect(() => {
    const email = user?.email;
    if (email) {
      fetch(`http://localhost:5000/admin/${email}`, {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accesstoken")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          //   console.log(data.admin);
          setAdmin(data.admin);
          setIsloading(true);
        });
    }
  }, [user]);
  return [admin, setAdmin, setIsloading];
};

export default useAdmin;
