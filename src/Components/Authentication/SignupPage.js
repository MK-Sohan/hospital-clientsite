import React, { useEffect, useState } from "react";
import "./signup.scss";
import logo from "../../Assets/logo/LOGO12 2.png";
import google from "../../Assets/icons/icons8-google-23.png";
import facebook from "../../Assets/icons/icons8-facebook-23.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { getAuth } from "firebase/auth";
import app from "../../firebase.init";
import {
  useSignInWithFacebook,
  useSignInWithGoogle,
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import Loading from "../Loading/Loading";
import { useForm } from "react-hook-form";
import useToken from "../Hooks/useToken";

const auth = getAuth(app);

const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);
  const [signInWithFacebook, fbloading, fberror] = useSignInWithFacebook(auth);
  const [updateProfile, updating, updateerror] = useUpdateProfile(auth);

  let location = useLocation();
  const navigate = useNavigate();
  const [token] = useToken(user || guser);
  let from = location.state?.from?.pathname || "/";
  useEffect(() => {
    if (user || guser) {
      navigate(from, { replace: true });
    }
  }, [token, from, navigate]);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = async (data) => {
    const name = data.name;
    const email = data.email;
    const password = data.password;
    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
    toast("Successfully Registered");
  };
  // if (user || guser) {
  //   toast("Successfully Registered");
  // }

  // console.log(email, password, user);
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
      <div className="register-container   ">
        <div className="flex h-screen justify-center pt-[100px]    items-start ">
          <div className="card w-96  shadow-2xl ">
            <div className="card-body rounded bg-base-100">
              <h2 className="text-center text-black text-2xl font-bold">
                Register
              </h2>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="text-black input input-bordered bg-transparent border-[1px] border-black w-full max-w-xs "
                    {...register("name", {
                      required: {
                        value: true,
                        message: "Name is Required",
                      },
                    })}
                  />

                  <label className="label">
                    {errors.name?.type === "required" && (
                      <span className="label-text-alt text-red-500">
                        {errors.name.message}
                      </span>
                    )}
                  </label>
                </div>
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="bg-transparent border-[1px] text-black border-black input input-bordered w-full max-w-xs"
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
                    className=" bg-transparent border-[1px] text-black border-black input input-bordered w-full max-w-xs"
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
                  value="Register"
                />
              </form>
              <p>
                <small className="text-black font-bold text-sm">
                  Already have an Account ?{" "}
                  <Link className="text-green-700 font-bold" to="/loginpage">
                    Log in
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

export default SignupPage;
