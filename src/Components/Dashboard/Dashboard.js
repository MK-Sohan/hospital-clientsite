import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  const [activeButton, setActiveButton] = useState("myProfile"); // Set default active button

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };
  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-start justify-start p-10">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
          <Outlet></Outlet>
        </div>
        <div className="drawer-side ">
          {/* <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay bg-slate-600"
          ></label> */}
          <ul className="menu p-4 w-80 min-h-full bg-slate-800 text-white">
            {/* Sidebar content here */}
            <li
              className={`border-[1px] ${
                activeButton === "myProfile" ? "bg-black" : "bg-green-600"
              } text-white mb-4`}
            >
              <Link
                to="/dashboard"
                onClick={() => handleButtonClick("myProfile")}
              >
                My Profile
              </Link>
            </li>
            <li
              className={`border-[1px] ${
                activeButton === "allUsers" ? "bg-black" : "bg-green-600"
              } text-white mb-4`}
            >
              <Link
                to="/dashboard/allusers"
                onClick={() => handleButtonClick("allUsers")}
              >
                All Users
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;