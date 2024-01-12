import React from "react";
import logo from "../../../Assets/logo/LOGO14 1.png";
import banklogo from "../../../Assets/logo/footerlogo.png";
import FooterTwo from "./FooterTwo";
const Footer = () => {
  return (
    <div className="">
      <div className="hidden lg:block">
        <div class=" bg-gray-800 pt-5 h-[450px] ">
          <div class="sm:px-6 text-[#FDFDFD] sm:grid md:grid-cols-4 sm:grid-cols-2 mx-auto lg:px-[200px]">
            <div class="text-start">
              <div class="">
                <h3 class="text-2xl mb-5">MediCare</h3>
              </div>
              <div class="text-sm uppercase text-white font-bold">
                Resources
              </div>
              <a class="my-3 block" href="/#">
                Documentation <span class="text-teal-600 text-xs p-1"></span>
              </a>
              <a class="my-3 block" href="/#">
                Tutorials <span class="text-teal-600 text-xs p-1"></span>
              </a>
              <a class="my-3 block" href="/#">
                Support <span class="text-teal-600 text-xs p-1">New</span>
              </a>
              <div className="flex items-center gap-4 w-[800px]  pt-[50px]">
                <h1 className="font-[500] text-white">We accept</h1>
                <div>
                  <img src={banklogo} alt="" />
                </div>
              </div>
            </div>
            <div class="p-5">
              <div class="text-sm uppercase text-white font-bold">Support</div>
              <a class="my-3 block" href="/#">
                Help Center <span class="text-teal-600 text-xs p-1"></span>
              </a>
              <a class="my-3 block" href="/#">
                Privacy Policy <span class="text-teal-600 text-xs p-1"></span>
              </a>
              <a class="my-3 block" href="/#">
                Conditions <span class="text-teal-600 text-xs p-1"></span>
              </a>
            </div>
            <div class="p-5">
              <div class="text-sm uppercase text-white font-bold">
                Contact us
              </div>
              <a class="my-3 block" href="/#">
                XXX XXXX, Floor 4 San Francisco, CA
                <span class="text-teal-600 text-xs p-1"></span>
              </a>
              <a class="my-3 block" href="/#">
                contact@company.com
                <span class="text-teal-600 text-xs p-1"></span>
              </a>
            </div>
            <div class="p-5">
              <div class="text-sm uppercase text-white font-bold">
                Contact us
              </div>
              <a class="my-3 block" href="/#">
                XXX XXXX, Floor 4 San Francisco, CA
                <span class="text-teal-600 text-xs p-1"></span>
              </a>
              <a class="my-3 block" href="/#">
                contact@company.com
                <span class="text-teal-600 text-xs p-1"></span>
              </a>
            </div>
          </div>
        </div>
        <div className="flex justify-center text-white  bg-gray-900 pt-3 pb-[28px]">
          {" "}
          <p className="text-center">
            Terms & Conditions | Refund Policy | Privacy Policy <br />
            2023 naviea Technologies Bangladesh Ltd{" "}
          </p>
        </div>
      </div>

      <div className="block lg:hidden">
        <FooterTwo />
      </div>
    </div>
  );
};

export default Footer;
