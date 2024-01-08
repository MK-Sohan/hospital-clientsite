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
import Loading from "../Loading/Loading";
import { useForm } from "react-hook-form";
import useToken from "../Hooks/useToken";
const auth = getAuth();
const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInWithEmailAndPassword, euser, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);
  const [user] = useAuthState(auth);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    signInWithEmailAndPassword(data.email, data.password);
    toast("Successfully Loged in");
  };
  let location = useLocation();
  const navigate = useNavigate();
  let from = location.state?.from?.pathname || "/";
  const [token] = useToken(euser || guser);
  useEffect(() => {
    if (token) {
      navigate(from, { replace: true });
    }
  }, [token, from, navigate]);

  let signInError;
  if (error || gerror) {
    signInError = (
      <p className="text-red-600 text-[18px] py-3">
        {error?.message || gerror?.message}
      </p>
    );
  }

  if (loading || gloading) {
    return <Loading></Loading>;
  }
  return (
    <div className="login-box">
      <div className="">
        <div className="flex h-screen justify-center   items-start pt-[100px] ">
          <div className="card w-96  shadow-2xl ">
            <div className="card-body rounded-sm bg-base-100">
              <h2 className="text-center text-black text-2xl font-bold">
                Login
              </h2>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="text-black bg-transparent border-[1px] border-black input input-bordered w-full max-w-xs"
                    {...register("email", {
                      required: {
                        value: true,
                        message: "Email is Required",
                      },
                      pattern: {
                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                        message: "Provide a valid Email",
                      },
                    })}
                  />

                  <label className="label">
                    {errors.email?.type === "required" && (
                      <span className="label-text-alt text-red-500">
                        {errors.email.message}
                      </span>
                    )}
                    {errors.email?.type === "pattern" && (
                      <span className="label-text-alt text-red-500">
                        {errors.email.message}
                      </span>
                    )}
                  </label>
                </div>
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="Password"
                    className="text-black bg-transparent border-[1px] border-black input input-bordered w-full max-w-xs"
                    {...register("password", {
                      required: {
                        value: true,
                        message: "Password is Required",
                      },
                      minLength: {
                        value: 6,
                        message: "Password Must be 6 characters or longer",
                      },
                    })}
                  />
                  <label className="label">
                    {errors.password?.type === "required" && (
                      <span className="label-text-alt text-red-500">
                        {errors.password.message}
                      </span>
                    )}
                    {errors.password?.type === "minLength" && (
                      <span className="label-text-alt text-red-500">
                        {errors.password.message}
                      </span>
                    )}
                  </label>
                </div>

                {signInError}
                <input
                  className="btn w-full max-w-xs text-black"
                  type="submit"
                  value="Login"
                />
              </form>
              <p>
                <small className="text-black font-bold text-sm">
                  New to MK-Ecommerce ?{" "}
                  <Link className="text-green-700 font-bold" to="/signUppage">
                    Please Register
                  </Link>
                </small>
              </p>
              <div className="divider text-black">OR</div>
              <button
                onClick={() => signInWithGoogle()}
                className="btn btn-outline hover:bg-green-500 hover:border-0"
              >
                Continue with Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
