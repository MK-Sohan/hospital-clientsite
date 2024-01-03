import React, { useRef, useState } from "react";
import "./tabtwo.scss";
import { Link } from "react-router-dom";
import { tabtwodata } from "../dummydata";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay, FreeMode, Keyboard } from "swiper";
import "swiper/css/navigation";
import sliderIcon1 from "../../Assets/icons/hospitaldetailicons/1.png";
import sliderIcon2 from "../../Assets/icons/hospitaldetailicons/2.png";
import sliderIcon3 from "../../Assets/icons/hospitaldetailicons/3.png";
import sliderIcon4 from "../../Assets/icons/hospitaldetailicons/4.png";
const Tabtwo = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="">
      <div className="hidden lg:block">
        <div className="tabtwo_main_container" id="tabTwo">
          <div className="flex  justify-between   pt-[24px] pb-5 px-[143px]">
            <h1 className=" text-black font-[500] w-[182px] h-[36px] text-[24px] font-sans text-center mx-auto  ">
              Buy Medicine
            </h1>
          </div>
          <div className="containerr pt-[23px]">
            <div className="content-tabs ">
              <div
                className={
                  toggleState === 1 ? "content  active-content" : "content"
                }
              >
                <div className="  py-5 lg:py-0">
                  <Swiper
                    autoplay={{
                      delay: 4000,
                      disableOnInteraction: false,
                    }}
                    cssMode={true}
                    slidesPerView={1}
                    spaceBetween={0}
                    pagination={{
                      clickable: true,
                    }}
                    breakpoints={{
                      640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                      },
                      768: {
                        slidesPerView: 1,
                        spaceBetween: 40,
                      },
                      1024: {
                        slidesPerView: 7,
                        spaceBetween: 0,
                      },
                    }}
                    freeMode={true}
                    // loop={true}
                    navigation={true}
                    // pagination={{
                    //   clickable: true,
                    // }}
                    // modules={[Navigation, FreeMode, Pagination]}
                    modules={[Navigation, Autoplay, FreeMode, Keyboard]}
                    className="mySwiper"
                  >
                    {tabtwodata.map((s) => (
                      <SwiperSlide className=" rounded-sm  ">
                        <div className="slider_content w-full ">
                          {/* slider img */}
                          <div className="">
                            <img
                              className="w-[270px] h-[270px] object-contain  mx-auto"
                              src={s.picture}
                              loading="lazy"
                              alt="loading"
                            />
                          </div>
                          <div className="text-black w-full text-lg">
                            <p>Paracetamol 500mg </p>
                            <p>10 Tablets </p>
                            <p>20 Tk</p>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>

              <div
                className={
                  toggleState === 2 ? "content  active-content" : "content"
                }
              >
                <div className="tab_content_images"></div>
              </div>

              <div
                className={
                  toggleState === 3 ? "content  active-content" : "content"
                }
              >
                <h2>Content 3</h2>
                <hr />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos
                  sed nostrum rerum laudantium totam unde adipisci incidunt modi
                  alias! Accusamus in quia odit aspernatur provident et ad vel
                  distinctio recusandae totam quidem repudiandae omnis veritatis
                  nostrum laboriosam architecto optio rem, dignissimos
                  voluptatum beatae aperiam voluptatem atque. Beatae rerum
                  dolores sunt.
                </p>
              </div>
            </div>
          </div>
          <div class="seemore_button   flex justify-center p-[20px]">
            <Link to="/TabTwoPharmecy">
              <button class="bg-[#026E5F]  rounded-sm p-[10px] w-[208px] text-white font-[500] text-[16px] ">
                See all Medicine
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tabtwo;
