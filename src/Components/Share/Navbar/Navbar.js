import React, { useEffect, useState } from "react";
import "./navbar.scss";
import logo from "../../../Assets/logo/LOGO14 1.png";
import { Link } from "react-router-dom";
import {
  FaCartPlus,
  FaEnvelope,
  FaFacebook,
  FaFacebookF,
  FaFacebookSquare,
  FaInstagram,
  FaLocationArrow,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";
import { useQuery } from "react-query";
import Loading from "../../Loading/Loading";
import app from "../../../firebase.init";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { getAuth } from "firebase/auth";
import useCartitem from "../../AddTocart/useCartitem";
import useAdmin from "../../Hooks/useAdmin";
import useMycartItem from "../../Hooks/useMycartItem";
import logo1 from "../../../Assets/doctors/logo-grey.png";
const auth = getAuth(app);
const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [user, loading, error] = useAuthState(auth);
  const [signOut] = useSignOut(auth);
  const cartuser = user?.email;
  // const [product, refetch] = useCartitem();
  const [admin, setAdmin] = useAdmin(user);
  // console.log(admin);
  const [product, refetch, isLoading] = useMycartItem();
  // const {
  //   data: product,
  //   refetch,
  //   isLoading,
  // } = useQuery("pcart", () =>
  //   fetch(`https://hospital-server-tau.vercel.app/cartallproducts/${cartuser}`).then((res) =>
  //     res.json()
  //   )
  // );

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <div className="topbar ">
        <div className="text-white flex justify-center items-center w-[100%] h-[50px]">
          <div className="bg-black flex justify-center items-center gap-x-36 h-[50px] w-[60%]">
            <div className="flex justify-center items-center gap-x-2 ">
              <FaPhone className="animate-pulse" />|
              <div className="">+8801776817368</div>
            </div>
            <div className="flex justify-center items-center gap-x-2 ">
              <FaEnvelope className="animate-pulse" />|
              <div className="">mahabubulkabir@gmail.com</div>
            </div>
            <div className="flex justify-center items-center gap-x-2 ">
              <FaLocationArrow className="animate-pulse" />|
              <div className="">Dhanmondi,Dhaka</div>
            </div>
          </div>
          <div className="pl-7 flex justify-start items-center gap-x-2 h-[50px] red w-[40%]">
            Follow Now
            <div className="bg-white h-[30px] w-[40px] flex justify-center text-red-600 items-center cursor-pointer hover:bg-gray-600 hover:text-white transition duration-500 ease-in-out">
              <FaFacebookF className="animate-bounce hover:animate-none" />
            </div>
            <div className="bg-white h-[30px] w-[40px] flex justify-center text-red-600 items-center cursor-pointer hover:bg-gray-600 hover:text-white transition duration-500 ease-in-out">
              <FaInstagram className="animate-bounce hover:animate-none" />
            </div>
            <div className="bg-white h-[30px] w-[40px] flex justify-center text-red-600 items-center cursor-pointer hover:bg-gray-600 hover:text-white transition duration-500 ease-in-out">
              <FaTwitter className="animate-bounce hover:animate-none" />
            </div>
          </div>
        </div>
      </div>
      <nav class=" justify-start mx-auto flex items-center  w-full  z-50  bg-white   text-black shadow-md backdrop-blur-2xl backdrop-saturate-200  h-[90px]">
        <span className="red pr-6 flex items-center justify-end h-[90px] w-[30%]">
          {" "}
          <Link to="/">
            <h1 className="text-4xl font-bold text-white"> MedService</h1>
            <p className="text-xs font-sans text-white">
              Medical & Medical Helth
            </p>
          </Link>{" "}
        </span>
        <div class=" flex items-center justify-around  text-gray-900 ">
          <ul class="hidden items-center gap-5 lg:flex lg:px-10 lg:justify-center ">
            <li class="block p-1 font-sans text-md font-normal leading-normal text-black antialiased  ">
              <Link to="/" class="flex items-center">
                HOME
              </Link>
            </li>
            <li class="block p-1 font-sans text-md font-normal leading-normal text-black antialiased  ">
              <Link class="flex items-center" to="/doctors">
                DOCTORS
              </Link>
            </li>
            <li class="block p-1 font-sans text-md font-normal leading-normal text-black antialiased">
              <Link to="/ambulanceDetails" class="flex items-center" href="#">
                AMBULANCE
              </Link>
            </li>
            <li class="block p-1 font-sans text-md font-normal leading-normal text-black antialiased">
              <Link to="/TabTwoPharmecy" class="flex items-center" href="#">
                MEDICINE
              </Link>
            </li>

            <li class="block p-1 font-sans text-md font-normal leading-normal text-black antialiased">
              <Link to="/appointment" class="flex items-center" href="#">
                MY APPOINTMENT
              </Link>
            </li>
            <li class="block p-1 font-sans text-md font-normal leading-normal text-black antialiased">
              <Link to="/bloodbank" class="flex items-center" href="#">
                BLOOD BANK
              </Link>
            </li>
            {admin && (
              <li class="block p-1 font-sans text-md font-normal leading-normal text-black antialiased">
                <Link to="/dashboard" class="flex items-center" href="#">
                  DASHBOARD
                </Link>
              </li>
            )}

            {/* <li class="block p-1 font-sans text-md font-normal leading-normal text-black antialiased  ">
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
                  localStorage.removeItem("accesstoken");
                  setAdmin(false);
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
                    class="middle none center hidden rounded-2xl bg-transparent border-[1px] py-2 px-8 font-sans text-xs font-bold uppercase text-black shadow-md  transition-all hover:text-black hover:bg-white  active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block"
                    type="button"
                    data-ripple-light="true"
                  >
                    <span>Login</span>
                  </button>
                </Link>
                <Link to="/signUppage">
                  <button
                    class="ml-5 middle none center hidden rounded-2xl bg-transparent border-[1px] py-2 px-8 font-sans text-xs font-bold uppercase text-black shadow-md  transition-all hover:text-black hover:bg-white  active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block"
                    type="button"
                    data-ripple-light="true"
                  >
                    <span>Register</span>
                  </button>
                </Link>
              </div>
            )}

            <Link to="/addToCart" className="text-black text-4xl">
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
                        className="w-6 h-6 text-black"
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
                        className="w-6 h-6 text-black"
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
                  <li className="text-black hover:text-indigo-200">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="text-black hover:text-indigo-200">
                    <a href="javascript:void(0)">Blog</a>
                  </li>
                  <li className="text-black hover:text-indigo-200">
                    <a href="javascript:void(0)">About US</a>
                  </li>
                  <li className="text-black hover:text-indigo-200">
                    <a href="javascript:void(0)">Contact US</a>
                  </li>
                </ul>

                <div className="mt-3 space-y-2 lg:hidden md:inline-block">
                  <a
                    href="javascript:void(0)"
                    className="inline-block w-full px-4 py-2 text-center text-black bg-gray-600 rounded-md shadow hover:bg-gray-800"
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
                className="px-4 py-2 text-black bg-gray-600 rounded-md shadow hover:bg-gray-800"
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
