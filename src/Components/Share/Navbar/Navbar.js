import React, { useEffect, useState } from "react";
import "./navbar.scss";
import logo from "../../../Assets/logo/LOGO14 1.png";
import { Link } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";
import { useQuery } from "react-query";
import Loading from "../../Loading/Loading";
import app from "../../../firebase.init";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { getAuth } from "firebase/auth";
import useCartitem from "../../AddTocart/useCartitem";
const auth = getAuth(app);
const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [user, loading, error] = useAuthState(auth);
  const [signOut] = useSignOut(auth);
  const cartuser = user?.email;
  // const [product, refetch] = useCartitem();

  const {
    data: product,
    refetch,
    isLoading,
  } = useQuery("pcart", () =>
    fetch(`http://localhost:5000/cartallproducts/${cartuser}`).then((res) =>
      res.json()
    )
  );

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <nav class="hidden lg:block mx-auto  w-full  z-50  bg-[#026E5F]  py-2  text-white shadow-md backdrop-blur-2xl backdrop-saturate-200  lg:py-4">
        <div>
          <div class=" flex items-center justify-around  text-gray-900 ">
            <span>
              {" "}
              <Link to="/">
                <h1 className="text-4xl font-bold text-white">CarePulse</h1>
              </Link>{" "}
            </span>

            <ul class="hidden items-center gap-5 lg:flex lg:px-10 lg:justify-center ">
              <li class="block p-1 font-sans text-md font-normal leading-normal text-white antialiased  ">
                <Link to="/" class="flex items-center">
                  HOME
                </Link>
              </li>
              <li class="block p-1 font-sans text-md font-normal leading-normal text-white antialiased  ">
                <Link class="flex items-center" to="/doctors">
                  DOCTORS
                </Link>
              </li>
              <li class="block p-1 font-sans text-md font-normal leading-normal text-white antialiased">
                <Link to="/ambulanceDetails" class="flex items-center" href="#">
                  AMBULANCE
                </Link>
              </li>
              <li class="block p-1 font-sans text-md font-normal leading-normal text-white antialiased">
                <Link to="/TabTwoPharmecy" class="flex items-center" href="#">
                  MEDICINE
                </Link>
              </li>
              <li class="block p-1 font-sans text-md font-normal leading-normal text-white antialiased">
                <Link to="/appointment" class="flex items-center" href="#">
                  MY APPOINTMENT
                </Link>
              </li>
              <li class="block p-1 font-sans text-md font-normal leading-normal text-white antialiased">
                <Link to="/dashboard" class="flex items-center" href="#">
                  DASHBOARD
                </Link>
              </li>

              {/* <li class="block p-1 font-sans text-md font-normal leading-normal text-white antialiased  ">
                <Link class="flex items-center" to="/allroomprices">
                  CABIN
                </Link>
              </li> */}
            </ul>
            <div className="flex items-center gap-x-3">
              {user ? (
                <button
                  onClick={async () => {
                    const success = await signOut();
                    if (success) {
                      alert("You are sign out");
                    }
                  }}
                  class="ml-5 middle none center hidden rounded-2xl bg-red-500 border-[1px] py-2 px-8 font-sans text-xs font-bold uppercase text-white shadow-md  transition-all hover:text-black hover:bg-white  active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block"
                  type="button"
                  data-ripple-light="true"
                >
                  <span>Sign Out</span>
                </button>
              ) : (
                <div className="">
                  <Link to="/loginpage">
                    <button
                      class="middle none center hidden rounded-2xl bg-transparent border-[1px] py-2 px-8 font-sans text-xs font-bold uppercase text-white shadow-md  transition-all hover:text-black hover:bg-white  active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block"
                      type="button"
                      data-ripple-light="true"
                    >
                      <span>Login</span>
                    </button>
                  </Link>
                  <Link to="/signUppage">
                    <button
                      class="ml-5 middle none center hidden rounded-2xl bg-transparent border-[1px] py-2 px-8 font-sans text-xs font-bold uppercase text-white shadow-md  transition-all hover:text-black hover:bg-white  active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block"
                      type="button"
                      data-ripple-light="true"
                    >
                      <span>Register</span>
                    </button>
                  </Link>
                </div>
              )}

              <Link to="/addToCart" className="text-white text-4xl">
                <button className="btn btn-ghost btn-circle">
                  <div className="indicator">
                    <FaCartPlus className="text-4xl" />

                    <span className="badge h-[60%] w-[60%] badge-neutral indicator-item text-white">
                      {product?.length}{" "}
                    </span>
                  </div>
                </button>
              </Link>
            </div>

            <button
              class="middle none relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] rounded-lg text-center font-sans text-xs font-medium uppercase text-blue-gray-500 transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:hidden"
              data-collapse-target="navbar"
            >
              <span class="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 transform">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* --------------------- Mobile section --------------------------- */}

      <div className="block lg:hidden z-50">
        <nav className="w-full bg-[#026E5F] ">
          <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
            <div>
              <div className="flex items-center justify-between py-3 md:py-5 md:block">
                <div className="md:hidden">
                  <button
                    className="p-2 text-gray-700 rounded-md outline-none "
                    onClick={() => setNavbar(!navbar)}
                  >
                    {navbar ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 text-white"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4 6h16M4 12h16M4 18h16"
                        />
                      </svg>
                    )}
                  </button>
                </div>
                <a href="javascript:void(0)">
                  <img className="w-[29px]" src={logo} alt="" />
                </a>
              </div>
            </div>
            <div>
              <div
                className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                  navbar ? "block" : "hidden"
                }`}
              >
                <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                  <li className="text-white hover:text-indigo-200">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="text-white hover:text-indigo-200">
                    <a href="javascript:void(0)">Blog</a>
                  </li>
                  <li className="text-white hover:text-indigo-200">
                    <a href="javascript:void(0)">About US</a>
                  </li>
                  <li className="text-white hover:text-indigo-200">
                    <a href="javascript:void(0)">Contact US</a>
                  </li>
                </ul>

                <div className="mt-3 space-y-2 lg:hidden md:inline-block">
                  <a
                    href="javascript:void(0)"
                    className="inline-block w-full px-4 py-2 text-center text-white bg-gray-600 rounded-md shadow hover:bg-gray-800"
                  >
                    Sign in
                  </a>
                  <a
                    href="javascript:void(0)"
                    className="inline-block w-full px-4 py-2 text-center text-gray-800 bg-white rounded-md shadow hover:bg-gray-100"
                  >
                    Sign up
                  </a>
                </div>
              </div>
            </div>
            <div className="hidden space-x-2 md:inline-block">
              <a
                href="javascript:void(0)"
                className="px-4 py-2 text-white bg-gray-600 rounded-md shadow hover:bg-gray-800"
              >
                Sign in
              </a>
              <a
                href="javascript:void(0)"
                className="px-4 py-2 text-gray-800 bg-white rounded-md shadow hover:bg-gray-100"
              >
                Sign up
              </a>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
