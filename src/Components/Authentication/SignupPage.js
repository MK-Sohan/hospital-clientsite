import React, { useState } from "react";
import "./signup.scss";
import logo from "../../Assets/logo/LOGO12 2.png";
import google from "../../Assets/icons/icons8-google-23.png";
import facebook from "../../Assets/icons/icons8-facebook-23.png";
import { Link } from "react-router-dom";
import { getAuth } from "firebase/auth";
import app from "../../firebase.init";
import {
  useSignInWithFacebook,
  useSignInWithGoogle,
  useCreateUserWithEmailAndPassword,
} from "react-firebase-hooks/auth";

const auth = getAuth(app);

const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [createUserWithEmailAndPassword, emailuser, emailloading, emailerror] =
    useCreateUserWithEmailAndPassword(auth);
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithFacebook, fbloading, fberror] = useSignInWithFacebook(auth);

  console.log(email, password, emailuser);
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
    return (
      <div>
        <p>Registered User: {user.user.email}</p>
      </div>
    );
  }
  return (
    <div className="signup_form_container ">
      <div className="login-box">
        <div class="left">
          <div
            className="flex justify-center items-center flex-col
  mb-6"
          >
            <h1>Welcome to Signup</h1>
            <img src={logo} alt="" />
          </div>

          {/* <input type="text" name="username" placeholder="Username" /> */}
          <input
            className="bg-transparent focus:outline-none focus:bg-transparent"
            type="text"
            name="email"
            autocomplete="off"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-mail :"
          />
          <input
            className="bg-transparent focus:outline-none focus:bg-transparent"
            type="password"
            name="password"
            autocomplete="off"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password :"
          />
          {/* <input
            className="bg-transparent focus:outline-none focus:bg-transparent"
            type="password"
            name="password2"
            autocomplete="off"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Confirm Password : "
          /> */}

          {/* <button type="submit" name="signup_submit" value="Signup" /> */}
          <button
            onClick={() => createUserWithEmailAndPassword(email, password)}
            className="loginbutton"
          >
            Signup
          </button>
          <div className="flex items-center justify-center gap-3 pt-7">
            <div className="h-[1px] w-[196px] "></div>
            OR
            <div className="h-[1px] w-[196px] "></div>
          </div>

          <div className="google_facebook_button flex justify-center items-center gap-[17px]">
            <button
              onClick={() => signInWithGoogle()}
              className="social_button flex items-center justify-center gap-1"
            >
              {" "}
              <img src={google} alt="" />
              Continue with Google{" "}
            </button>

            {/* <button
              onClick={() => signInWithFacebook()}
              className="social_button flex items-center justify-center gap-1"
            >
              <img src={facebook} alt="" />
              Continue with Facebook
            </button> */}
          </div>
          <p className="text-[#F9F9F9] text-[16px] font-[400] mt-5 tracking-wider">
            Already have an account?{" "}
            <span className="text-[#F9F9F9] text-[16px] font-[600] tracking-wider">
              {" "}
              <Link to="/loginpage"> Login</Link>{" "}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
