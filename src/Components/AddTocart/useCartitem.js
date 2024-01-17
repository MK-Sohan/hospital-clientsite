import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { getAuth } from "firebase/auth";
import app from "../../firebase.init";
import { useQuery } from "react-query";
import Loading from "../Loading/Loading";
const auth = getAuth(app);
const useCartitem = () => {
  const [user, loading, error] = useAuthState(auth);

  const cartuser = user?.email;
  const {
    data: product,
    refetch,
    isLoading,
  } = useQuery("pcart", () =>
    fetch(
      `https://hospital-server-tau.vercel.app/cartallproducts/${cartuser}`
    ).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  return [product, refetch];
};

export default useCartitem;
