import React, { useEffect, useState } from "react";

const useAdmin = (user) => {
  const [admin, setAdmin] = useState();
  const [isLoading, setIsloading] = useState(false);
  //   console.log(user?.email, admin);
  // console.log(admin);
  useEffect(() => {
    const email = user?.email;
    if (email) {
      // console.log(email);
      fetch(`https://hospital-server-tau.vercel.app/admin/${email}`)
        .then((res) => res.json())
        .then((data) => {
          setAdmin(data);
          setIsloading(true);
        });
    }
  }, [user]);
  return [admin, setAdmin, setIsloading];
};

export default useAdmin;
