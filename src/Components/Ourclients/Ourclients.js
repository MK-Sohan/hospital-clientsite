import React from "react";
import clintlogo1 from "../../Assets/logo/Bkf9O 1.png";
import clintlogo2 from "../../Assets/logo/bOB2h 1.png";
import clintlogo3 from "../../Assets/logo/dhl-logo 1.png";
import clintlogo4 from "../../Assets/logo/download (9) 1.png";
import clintlogo5 from "../../Assets/logo/Shwapno 1.png";
const Ourclients = () => {
  return (
    <div>
      <div class="ourclient_mother_section">
        <div class="our_clien_header h-[72px]  mt-[45px] mb-[30px] text-center flex items-center justify-center">
          <h1 class="font-sb text-[26px]">Our Clients</h1>
        </div>
        <div class="our_clients_logo flex items-center lg:gap-x-[45px] bg-white justify-center gap-[20px] pb-[20px] ">
          <div>
            <img src={clintlogo1} alt="" />
          </div>
          <div>
            <img src={clintlogo2} alt="" />
          </div>

          <div>
            <img src={clintlogo3} alt="" />
          </div>

          <div>
            <img src={clintlogo4} alt="" />
          </div>

          <div>
            <img src={clintlogo5} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ourclients;
