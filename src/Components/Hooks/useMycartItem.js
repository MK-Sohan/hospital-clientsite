import { getAuth } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import app from "../../firebase.init";
const auth = getAuth(app);
const useMycartItem = () => {
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
  return [product, refetch, isLoading];
};

export default useMycartItem;
