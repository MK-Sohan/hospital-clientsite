import React, { useState } from "react";
import "./navbar.scss";
import logo from "../../../Assets/logo/LOGO14 1.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  return (
    <div>
      <nav class="hidden lg:block mx-auto  w-full  z-50  bg-[#026E5F]  py-2  text-white shadow-md backdrop-blur-2xl backdrop-saturate-200  lg:py-0">
        <div>
          <div class=" flex items-center justify-around  text-gray-900 ">
            <a
              href="#"
              class=" block cursor-pointer py-1.5 font-sans text-md font-normal leading-normal text-whiteantialiased"
            >
              <span>
                {" "}
                <Link to="/">
                  {" "}
                  <img className="" src={logo} alt="" />
                </Link>{" "}
              </span>
            </a>
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
              {/* <li class="block p-1 font-sans text-md font-normal leading-normal text-white antialiased">
                <a class="flex items-center" href="#">
                  DEPARTMENT
                </a>
              </li> */}
              <li class="block p-1 font-sans text-md font-normal leading-normal text-white antialiased">
                <a class="flex items-center" href="#">
                  DASHBOARD
                </a>
              </li>

              {/* <li class="block p-1 font-sans text-md font-normal leading-normal text-white antialiased  ">
                <Link class="flex items-center" to="/allroomprices">
                  CABIN
                </Link>
              </li> */}
            </ul>
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
              <Link to="/loginpage">
                <button
                  class="ml-5 middle none center hidden rounded-2xl bg-transparent border-[1px] py-2 px-8 font-sans text-xs font-bold uppercase text-white shadow-md  transition-all hover:text-black hover:bg-white  active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block"
                  type="button"
                  data-ripple-light="true"
                >
                  <span>Register</span>
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
          {/* <div
      class="block h-0 w-full basis-full overflow-hidden text-blue-gray-900 transition-all duration-300 ease-in lg:hidden"
      data-collapse="navbar"
    >
      <div class="container mx-auto pb-2">
        <ul class="mt-2 mb-4 flex flex-col gap-2">
          <li class="block p-1 font-sans text-sm font-normal leading-normal text-whiteantialiased">
            <a class="flex items-center" href="#">
            DOCTOR
            </a>
          </li>
          <li class="block p-1 font-sans text-sm font-normal leading-normal text-whiteantialiased">
            <a class="flex items-center" href="#">
            APPOINTMENT
            </a>
          </li>
          <li class="block p-1 font-sans text-sm font-normal leading-normal text-whiteantialiased">
            <a class="flex items-center" href="#">
            SERVICE
            </a>
          </li>
          <li class="block p-1 font-sans text-sm font-normal leading-normal text-whiteantialiased">
            <a class="flex items-center" href="#">
              Docs
            </a>
          </li>
        </ul>
        <button
          class="middle none center mb-2 block w-full rounded-lg bg-gradient-to-tr from-pink-600 to-pink-400 py-2 px-4 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
          data-ripple-light="true"
        >
          <span>Buy Now</span>
        </button>
      </div>
    </div> */}
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
