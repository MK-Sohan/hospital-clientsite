import React, { useEffect, useState } from "react";

const useToken = (user) => {
  const [token, setToken] = useState("");
  useEffect(() => {
    const email = user?.user?.email;
    const currentUser = { email: email };
    if (email) {
      fetch(`https://hospital-server-tau.vercel.app/user/${email}`, {
        method: "PUT",
        body: JSON.stringify(currentUser),
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accesstoken")}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          // console.log(data);
          const accessToken = data.token;
          localStorage.setItem("accesstoken", accessToken);
          setToken(accessToken);
        });
    }
  }, [user]);
  return [token];
};

export default useToken;
