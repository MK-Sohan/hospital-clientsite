import React, { useEffect, useState } from "react";
import logo from "../../Assets/logo/LOGO12 2.png";
import google from "../../Assets/icons/icons8-google-23.png";
import facebook from "../../Assets/icons/icons8-facebook-23.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  useAuthState,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import "./loginpage.scss";
import { getAuth } from "firebase/auth";
import { toast } from "react-toastify";
const auth = getAuth();
const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInWithEmailAndPassword, euser, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);
  const [user] = useAuthState(auth);

  let location = useLocation();
  const navigate = useNavigate();
  let from = location.state?.from?.pathname || "/";
  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user, from, navigate]);
  if (error) {
    return (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }
  if (loading) {
    return <p>Loading...</p>;
  }
  if (user) {
    toast("success");
  }
  return (
    <div className="">
      <div className="login_page_main_container">
        <div className="login-box">
          <div class="left mt-20">
            <div
              className="flex justify-center items-center flex-col
  mb-6"
            >
              <h1>Welcome to Sign in</h1>
              <img src={logo} alt="" />
            </div>

            {/* <input type="text" name="username" placeholder="Username" /> */}
            <input
              className="bg-transparent focus:outline-none focus:bg-transparent"
              type="text"
              name="email"
              autocomplete="off"
              placeholder="E-mail :"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="bg-transparent focus:outline-none focus:bg-transparent"
              type="password"
              name="password"
              placeholder="Password :"
              value={password}
              autocomplete="off"
              onChange={(e) => setPassword(e.target.value)}
            />

            <p className="text-[#F9F9F9] text-[16px] font-[400] text-end">
              {" "}
              <Link to="/resetpass">Forgot Password?</Link>{" "}
            </p>
            <div className="flex flex-col items-center">
              <button
                onClick={() => signInWithEmailAndPassword(email, password)}
                className="loginbutton"
              >
                Sign in
              </button>
              <p>or</p>
              <div className="border-[1px] rounded-3xl px-5 py-1 mt-5 google_facebook_button flex justify-center items-center gap-[17px]">
                <button
                  onClick={() => signInWithGoogle()}
                  className="social_button flex items-center justify-center gap-1"
                >
                  {" "}
                  <img src={google} alt="" />
                  Sign in with Google{" "}
                </button>
              </div>

              <p className="text-[#F9F9F9] text-[16px] font-[400] mt-5 ">
                {" "}
                <span className="opacity-[0.7] tracking-wider">
                  Haven’t any account?
                </span>{" "}
                <span className="text-[#F9F9F9] text-[16px] font-[600] tracking-wider">
                  {" "}
                  <Link to="/signUppage"> Signup</Link>{" "}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
