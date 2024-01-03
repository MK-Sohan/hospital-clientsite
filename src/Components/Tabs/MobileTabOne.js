import React, { useState } from 'react';
import './mobileTabOne.scss'
import {tabonedata} from '../dummydata'
import { Link } from 'react-router-dom';
import back from '../../Assets/backgroundimages/imageofbody.png'
const MobileTabOne = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
      setToggleState(index);
    };
    return (
        <div className='block lg:hidden Mobile_tab_one_main_container'>
            
            <div className="tabs_main_container" id="tabOne">
      {/* <h1 className=" text-black font-[500] w-[182px] h-[36px] text-[24px] font-sans text-center mx-auto leading-[31px] pt-[30px] ">
        
      </h1> */}
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
              {
                tabonedata.map((value=>{
                  return (
                    <Link to='/selectdiagonostic'>
                    <div class="relative  w-[139px]  flex justify-center items-center flex-col">
                        <img className='' src={back} alt="" />
                      <p className="backdrop-brightness-50 text-white absolute top-[50%] font-[500] text-[20px]">Ovarian</p>
                      <button className='absolute top-[80%] bg-[#FFC408] rounded-[23px] text-[10px] py-1 px-2 font-[500]'>Book for Test</button>
                    </div>
                   
                    </Link>
                  )
                }))
              }
            </div>
          </div>

          <div
            className={
              toggleState === 2 ? "content  active-content" : "content"
            }
          >
            {/* <div className="tab_content_images">
              <div class="tab_back_imege">
                <p className="font-[500] text-[20px]">Ovarian</p>
              </div>
              <div class="tab_back_imege">
                <p className="font-[500] text-[20px]">Ovarian</p>
              </div>
              <div class="tab_back_imege">
                <p className="font-[500] text-[20px]">Ovarian</p>
              </div>
              <div class="tab_back_imege">
                <p className="font-[500] text-[20px]">Ovarian</p>
              </div>
              <div class="tab_back_imege">
                <p className="font-[500] text-[20px]">Ovarian</p>
              </div>
              <div class="tab_back_imege">
                <p className="font-[500] text-[20px]">Ovarian</p>
              </div>
              <div class="tab_back_imege">
                <p className="font-[500] text-[20px]">Ovarian</p>
              </div>
              <div class="tab_back_imege">
                <p className="font-[500] text-[20px]">Ovarian</p>
              </div>
              <div class="tab_back_imege">
                <p className="font-[500] text-[20px]">Ovarian</p>
              </div>
              <div class="tab_back_imege">
                <p className="font-[500] text-[20px]">Ovarian</p>
              </div>
            </div> */}
          </div>

          <div
            className={
              toggleState === 3 ? "content  active-content" : "content"
            }
          >
             {/* <div className="tab_content_images">
              <div class="tab_back_imege">
                <p className="font-[500] text-[20px]">Ovarian</p>
              </div>
              <div class="tab_back_imege">
                <p className="font-[500] text-[20px]">Ovarian</p>
              </div>
              <div class="tab_back_imege">
                <p className="font-[500] text-[20px]">Ovarian</p>
              </div>
              <div class="tab_back_imege">
                <p className="font-[500] text-[20px]">Ovarian</p>
              </div>
              <div class="tab_back_imege">
                <p className="font-[500] text-[20px]">Ovarian</p>
              </div>
              <div class="tab_back_imege">
                <p className="font-[500] text-[20px]">Ovarian</p>
              </div>
              <div class="tab_back_imege">
                <p className="font-[500] text-[20px]">Ovarian</p>
              </div>
              <div class="tab_back_imege">
                <p className="font-[500] text-[20px]">Ovarian</p>
              </div>
              <div class="tab_back_imege">
                <p className="font-[500] text-[20px]">Ovarian</p>
              </div>
              <div class="tab_back_imege">
                <p className="font-[500] text-[20px]">Ovarian</p>
              </div>
            </div> */}
          </div>
        </div>


        {/* <div className="content-tabs ">
          <div
            className={
              toggleState === 1 ? "content  active-content" : "content"
            }
          >
            <div className="tab_content_images">

              {
                tabonedata.map((value=>{
                  return (
                    <Link to='/selectdiagonostic'>
                    <div class="tab_back_imege">
                      <p className="font-[500] text-[20px]">Ovarian</p>
                    </div>
                    </Link>
                  )
                }))
              }
            </div>
          </div>

          <div
            className={
              toggleState === 2 ? "content  active-content" : "content"
            }
          >
            <div className="tab_content_images">
              <div class="tab_back_imege">
                <p className="font-[500] text-[20px]">Ovarian</p>
              </div>
              <div class="tab_back_imege">
                <p className="font-[500] text-[20px]">Ovarian</p>
              </div>
              <div class="tab_back_imege">
                <p className="font-[500] text-[20px]">Ovarian</p>
              </div>
              <div class="tab_back_imege">
                <p className="font-[500] text-[20px]">Ovarian</p>
              </div>
              <div class="tab_back_imege">
                <p className="font-[500] text-[20px]">Ovarian</p>
              </div>
              <div class="tab_back_imege">
                <p className="font-[500] text-[20px]">Ovarian</p>
              </div>
              <div class="tab_back_imege">
                <p className="font-[500] text-[20px]">Ovarian</p>
              </div>
              <div class="tab_back_imege">
                <p className="font-[500] text-[20px]">Ovarian</p>
              </div>
              <div class="tab_back_imege">
                <p className="font-[500] text-[20px]">Ovarian</p>
              </div>
              <div class="tab_back_imege">
                <p className="font-[500] text-[20px]">Ovarian</p>
              </div>
            </div>
          </div>

          <div
            className={
              toggleState === 3 ? "content  active-content" : "content"
            }
          >
             <div className="tab_content_images">
              <div class="tab_back_imege">
                <p className="font-[500] text-[20px]">Ovarian</p>
              </div>
              <div class="tab_back_imege">
                <p className="font-[500] text-[20px]">Ovarian</p>
              </div>
              <div class="tab_back_imege">
                <p className="font-[500] text-[20px]">Ovarian</p>
              </div>
              <div class="tab_back_imege">
                <p className="font-[500] text-[20px]">Ovarian</p>
              </div>
              <div class="tab_back_imege">
                <p className="font-[500] text-[20px]">Ovarian</p>
              </div>
              <div class="tab_back_imege">
                <p className="font-[500] text-[20px]">Ovarian</p>
              </div>
              <div class="tab_back_imege">
                <p className="font-[500] text-[20px]">Ovarian</p>
              </div>
              <div class="tab_back_imege">
                <p className="font-[500] text-[20px]">Ovarian</p>
              </div>
              <div class="tab_back_imege">
                <p className="font-[500] text-[20px]">Ovarian</p>
              </div>
              <div class="tab_back_imege">
                <p className="font-[500] text-[20px]">Ovarian</p>
              </div>
            </div>
          </div>
        </div>
        <div class="seemore_button   flex justify-center p-[20px]">
          <Link to='/diagonosticpage'>
          <button class="bg-[#026E5F]  rounded-sm p-[10px] w-[208px] text-white font-[500] text-[16px] ">
          See More
          </button>
          </Link>
        
        </div> */}
      </div>

      </div>
    </div>


        </div>
    );
};

export default MobileTabOne;