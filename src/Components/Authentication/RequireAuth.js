import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../Loading/Loading";
import { getAuth } from "firebase/auth";
import app from "../../firebase.init";
const auth = getAuth(app);
const RequireAuth = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  let location = useLocation();
  if (loading) {
    return <Loading></Loading>;
  }
  if (!user) {
    return <Navigate to="/loginpage" state={{ from: location }} replace />;
  }

  return children;
};

export default RequireAuth;
