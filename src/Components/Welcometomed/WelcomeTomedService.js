import React from "react";
import img1 from "../../Assets/doctors/image-03.png";
import img2 from "../../Assets/doctors/signature.png";

const WelcomeTomedService = () => {
  return (
    <div>
      <div className="flex justify-center items-start bg-white">
        <div className="w-[50%]  flex justify-center">
          <img src={img1} alt="" />
        </div>
        <div className="w-[50%] font-mono">
          <h1 className="text-[#00a3c8] mt-[100px]">WELCOME TO MEDSERVICE</h1>
          <h1 className="text-[#004861] text-[2.625rem]">
            Complete Medical <br /> Solutions in One Place
          </h1>
          <p className="text-[1rem] w-[450px] ">
            Porta semper lacus cursus, feugiat primis ultrice in ligula risus
            auctor tempus feugiat dolor lacinia cubilia curae integer congue leo
            metus, eu mollislorem primis in orci integer metus mollis faucibus.
            An enim nullam tempor sapien gravida donec pretium and ipsum porta
            justo integer at velna vitae auctor integer congue
          </p>
          <p className="mt-[60px] ">Randon Pexon, Head of Clinic</p>
          <div className="w-[200px] mt-5">
            <img src={img2} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeTomedService;
