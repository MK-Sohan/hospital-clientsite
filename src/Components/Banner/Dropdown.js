import React, { useState } from "react";
import { FaBeer } from "react-icons/fa";
import dropicon from "../../Assets/icons/dropdownicon/1.png";
import dropicon2 from "../../Assets/icons/dropdownicon/2.png";
import dropicon3 from "../../Assets/icons/dropdownicon/3.png";
import dropicon4 from "../../Assets/icons/dropdownicon/5.png";

import "./dropdown.scss";
const Dropdown = () => {
  return (
    <div className="dropdown_container_wrapper">
      <div className="mt-[10px]">
        <label class="dropdown w-full lg:w-[31.25vw] rounded-[5px] ">
          <div class="dd-button  flex items-center gap-x-[28px]">
            {/* <img src={dropicon} alt="" /> */}
            Qualified Doctors
          </div>

          <input type="checkbox" class="dd-input" id="test" />

          <div class="dd-menu ">
            <p>
              Our Hospital aims to provide the highest possible level of care by
              the qualified consultants from USA, Canada quality hospitals in
              the Middle East.{" "}
            </p>
          </div>
        </label>
      </div>
      <div className="mt-2 lg:mt-[10px]">
        <label class="dropdown w-[311px] lg:w-[31.25vw] rounded-[5px]">
          <div class="dd-button  flex items-center gap-x-[28px]">
            {/* <img src={dropicon2} alt="" /> */}
            Satisfied Consultation
          </div>

          <input type="checkbox" class="dd-input" id="test" />

          <div class="dd-menu ">
            <p>
              Our Hospital aims to provide the highest possible level of care by
              the qualified consultants from USA, Canada quality hospitals in
              the Middle East.{" "}
            </p>
          </div>
        </label>
      </div>
      <div className="lg:mt-[10px] mt-2">
        <label class="dropdown w-full lg:w-[31.25vw] rounded-[5px]">
          <div class="dd-button  flex items-center gap-x-[28px]">
            {/* <img src={dropicon3} alt="" /> */}
            Successful Surgery
          </div>

          <input type="checkbox" class="dd-input" id="test" />

          <div class="dd-menu ">
            <p>
              Our Hospital aims to provide the highest possible level of care by
              the qualified consultants from USA, Canada quality hospitals in
              the Middle East.{" "}
            </p>
          </div>
        </label>
      </div>
      <div className="lg:mt-[10px] mt-2 w-full ">
        <label class="dropdown w-full lg:w-[31.25vw]  rounded-[5px]">
          <div class="dd-button  flex items-center gap-x-[28px]">
            {/* <img src={dropicon4}     alt="" /> */}
            Emergency Departments
          </div>

          <input type="checkbox" class="dd-input" id="test" />

          <div class="dd-menu ">
            <p>
              Our Hospital aims to provide the highest possible level of care by
              the qualified consultants from USA.
            </p>
          </div>
        </label>
      </div>
    </div>
  );
};

export default Dropdown;
