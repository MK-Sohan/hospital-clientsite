import React, { useState } from "react";
import "./tabTwoMobileCarousel.scss";
import { tabonedata } from "../dummydata";
import { Link } from "react-router-dom";
import back from "../../Assets/backgroundimages/imageofbody.png";
import img1 from "../../Assets/tabcardsliderimage/1.png";
import img2 from "../../Assets/tabcardsliderimage/2.png";

import img3 from "../../Assets/tabcardsliderimage/3.png";

import img4 from "../../Assets/tabcardsliderimage/4.png";

import img5 from "../../Assets/tabcardsliderimage/5.png";
import img6 from "../../Assets/tabcardsliderimage/6.png";

const TabTwoMobileCarousel = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <div>
      <div className="block lg:hidden Tab_Two_MobileCarousel_main_container">
        <div className="tabs_main_container" id="tabOne">
          <div className="px-3 mx-auto">
            <div className="containerr pt-[49px]">
              <div className="bloc-tabs">
                <button
                  className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                  onClick={() => toggleTab(1)}
                >
                  cancer
                </button>
                <button
                  className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                  onClick={() => toggleTab(2)}
                >
                  diabetes
                </button>
                <button
                  className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
                  onClick={() => toggleTab(3)}
                >
                  dementia
                </button>
                <button
                  className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
                  onClick={() => toggleTab(4)}
                >
                  covid 19
                </button>
                <button
                  className={toggleState === 5 ? "tabs active-tabs" : "tabs"}
                  onClick={() => toggleTab(5)}
                >
                  autism
                </button>
                <button
                  className={toggleState === 6 ? "tabs active-tabs" : "tabs"}
                  onClick={() => toggleTab(6)}
                >
                  breast cancer
                </button>
                <button
                  className={toggleState === 7 ? "tabs active-tabs" : "tabs"}
                  onClick={() => toggleTab(7)}
                >
                  diseases
                </button>
                <button
                  className={toggleState === 8 ? "tabs active-tabs" : "tabs"}
                  onClick={() => toggleTab(8)}
                >
                  Endoscopy
                </button>
                <button
                  className={toggleState === 9 ? "tabs active-tabs" : "tabs"}
                  onClick={() => toggleTab(9)}
                >
                  Laboratory Tests
                </button>
                <button
                  className={toggleState === 10 ? "tabs active-tabs" : "tabs"}
                  onClick={() => toggleTab(10)}
                >
                  CT Scans
                </button>
                <button
                  className={toggleState === 11 ? "tabs active-tabs" : "tabs"}
                  onClick={() => toggleTab(11)}
                >
                  X-Rays
                </button>
                <button
                  className={toggleState === 12 ? "tabs active-tabs" : "tabs"}
                  onClick={() => toggleTab(12)}
                >
                  Biopsy
                </button>
              </div>

              <div className="content-tabs ">
                <div
                  className={
                    toggleState === 1 ? "content  active-content" : "content"
                  }
                >
                  <div className="tab_content_images">
                    {tabonedata.map((value) => {
                      return (
                        <Link to="/drugDetails">
                          <div className="relative flex  flex-col items-center font-[400] text-[16px] text-black">
                            <img className=" w-[186px]" src={img1} alt="" />
                            <p>Napa Extra 500mg </p>

                            <p>10 Tablets</p>
                            <p>20 Tk</p>
                            <button className="absolute top-[56%] bg-[#FFC408] rounded-[23px] text-[10px] py-1 px-2 font-[500]">
                              Add to Cart
                            </button>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>

                <div
                  className={
                    toggleState === 2 ? "content  active-content" : "content"
                  }
                ></div>

                <div
                  className={
                    toggleState === 3 ? "content  active-content" : "content"
                  }
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabTwoMobileCarousel;
