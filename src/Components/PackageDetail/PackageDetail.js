import React from 'react';
import './packagedetail.scss'
import cardimage1 from "../../Assets/cardimage/home-doctor-visits 1.png";
import icon from '../../Assets/icons/handlovesign.png'
import icon2 from '../../Assets/icons/loveinnotepage.png'
import icon3 from '../../Assets/icons/serviceicon.png'
import { packages } from "../dummydata";
import SeeallPackagesSliders from '../SeeallPackages/SeeallPackagesSliders';
import { RxCross2 } from 'react-icons/rx';
import { Link } from 'react-router-dom';

const PackageDetail = () => {
  const tittle ='Related Package'
    return (
        <div >
            <div className="package_detail_container_wrapper  mb-9">
            <div className="packages_banner ">
          <p className="lg:text-[64px] text-[32px]   text-slate-500 font-[500] lg:ml-[317px]">
          Package Details
          </p>
        </div>

{/* ------------------------------------------------------------------------------- */}
<div className="doctor_card flex justify-center py-[52px]">
<div class=" bg-white w-[352px]  lg:w-[956px]   rounded-lg  shadowborder-gray-700 hover:shadow-xl transition-all flex flex-col lg:flex-row gap-x-5 ">
                    <div className='flex justify-center'>
                      <img class="rounded-t-lg w-[352px] h-[236px] lg:w-[656px] lg:h-[369px] rounded-[15px] lg:rounded-none" src={cardimage1} alt="" />
                    </div>
                    <div class="p-5">
                      
                        <h5 class="lg:w-[360px] mb-2 text-[16px] lg:text-xl tracking-tight font-semibold text-gray-900">
                          Daily Doctor Home visit package
                        </h5>
                      
                      <a href="#">
                        <h5 class="mb-2 text-[12px] lg:font-bold tracking-tight text-gray-900">
                          8000 Taka/monthly
                        </h5>
                      </a>
                    
                      <div className='lg:w-[393px] text-[12px] lg:text-[18px]'>
                      
                        <h5 class="mb-2  tracking-tight text-gray-900">
                          For 1 adult
                        </h5>
                      
                        <li>
                        Unlimited consultations with our experienced on duty General Physician 
                                and Gynaecology Doctors

                        </li>
                        <li>
                        Upto 40% discount on home diagnostic tests.
                        </li>
                        <h5 class="hidden lg:block mb-2 text-m tracking-tight text-gray-900 lg:mt-12">
                        Male : 10,000tk,  Female : 12,000tk, Child : 5000tk
                        </h5>
                        <h5 class="block lg:hidden mb-2 font-bold text-m tracking-tight text-gray-900 ">
                        Male : 10,000tk <br />  Female : 12,000tk <br /> Child : 5000tk
                        </h5>
                      </div>
                      <div>


{/* Open the modal using ID.showModal() method */}
<button className="border-none shadow-xl bg-[#FFC408] p-[5px] lg:p-[10px] w-[90%] lg:w-[303px] mt-3 text-[20px] font-m font-[500] hover:bg-[#ffdd6e]  hover:ease-in-out duration-300 rounded-[29px]" onClick={()=>window.my_modal_1.showModal()}>BOOK NOW</button>
<dialog id="my_modal_1" className="modal">
  <form method="dialog" className="modal-box">
  
  <div className="lg:w-[90%] w-full  mx-auto">
  <div className="flex justify-end mb-6"> 
  <button className="modal-action font-bold text-md text-end text-[#026E5F]">
    <RxCross2/>
    </button>
    </div>
  <div className="main_plan_container grid gap-x-2  grid-cols-2 gap-y-3 justify-items-center ">
    
    <div className="monthly_plan  rounded-xl p-3 bg-[#FFF1C6] border-[1px] border-[#D0D0D0]">
 <h1 className='text-lg font-bold text-[#6C6C6C]'>Pay Monthly</h1>
 <p className='text-xs text-black'>It will renewed automatically every 1 month. Cancel anytime.</p>
 <h1 className='text-lg font-bold text-[#6C6C6C]'>10,000 Tk</h1>
 <p className='text-sm text-black'>tk 0/each month</p>
     </div>
    <div className="rounded-xl monthly_plan  p-3 bg-[#FFF1C6] border-[1px] border-[#D0D0D0]">
 <h1 className='text-lg font-bold text-[#6C6C6C]'>Pay Monthly</h1>
 <p className='text-xs text-black'>It will renewed automatically every 1 month. Cancel anytime.</p>
 <h1 className='text-lg font-bold text-[#6C6C6C]'>10,000 Tk</h1>
 <p className='text-sm text-black'>tk 0/each month</p>
     </div>
    <div className="rounded-xl monthly_plan   p-3 bg-[#FFF1C6] border-[1px] border-[#D0D0D0]">
 <h1 className='text-lg font-bold text-[#6C6C6C]'>Pay Monthly</h1>
 <p className='text-xs text-black'>It will renewed automatically every 1 month. Cancel anytime.</p>
 <h1 className='text-lg font-bold text-[#6C6C6C]'>10,000 Tk</h1>
 <p className='text-sm text-black'>tk 0/each month</p>
     </div>
    <div className="monthly_plan rounded-xl   p-3 bg-[#FFF1C6] border-[1px] border-[#D0D0D0]">
 <h1 className='text-lg font-bold text-[#6C6C6C]'>Pay Monthly</h1>
 <p className='text-xs text-black'>It will renewed automatically every 1 month. Cancel anytime.</p>
 <h1 className='text-lg font-bold text-[#6C6C6C]'>10,000 Tk</h1>
 <p className='text-sm text-black'>tk 0/each month</p>
     </div>
    </div>
  </div>
   
    
    <div >
      {/* if there is a button in form, it will close the modal */}
      <Link to='/diagonosticBookNow' className="modal-action flex justify-center">
      <button className="border-none shadow-xl bg-[#FFC408] p-[5px] w-[223px] mt-0 text-[20px] font-m font-[500] hover:bg-[#ffdd6e]  hover:ease-in-out duration-300 rounded-[29px]">Choose your plan</button>
      </Link>
      
    </div>
  </form>
</dialog>
                      </div>
                    </div>
                  </div>
</div>
{/* --------------------------------------detail section---------------------------------------------- */}

<div className="detail_section_one mx-auto w-[352px] lg:rounded-none rounded-[25px] bg-[#FFEAEA] px-4 py-5 lg:max-w-[1317px] lg:w-full">
<div className="flex items-center gap-x-2">
    <img src={icon} alt="" />
    <p className='text-[20px]   text-black font-[400] '>Health care</p>
</div>
<div className='py-4'>
<h3 className='text-black'>
    <span className='mr-2 font-bold text-green-500'>&#x2713;</span>
     Unlimited consultations with our experienced on duty General Physician and Doctors </h3>
<h3 className='text-black mt-2'>
    <span className='font-bold text-green-500 mr-2 '>&#x2713;</span>
     Daily Checkup 
     </h3>
     <h3 className='text-black mt-2'>
    <span className='font-bold text-green-500 mr-2'>&#x2713;</span>
    Daily 2 time Checkup
     </h3>
     <h3 className='text-black mt-2'>
    <span className='font-bold text-green-500 mr-2'>&#x2713;</span>
    Update Prescriptions
     </h3>
 
</div>
</div>
{/* --------------------------------------detail section 2---------------------------------------------- */}

<div className="detail_section_one  mx-auto w-[352px]  lg:rounded-none rounded-[25px] bg-[#FFEAEA] px-4 py-5 max-w-[1317px] lg:w-full mt-[30px]">
<div className="flex items-center gap-x-2">
    <img src={icon2} alt="" />
    <p className='text-[20px]   text-black font-[400] '>Wellbeing and Prevention</p>
</div>
<div className='py-4'>
<h3 className='text-black'>
    <span className='mr-2 font-bold text-green-500'>&#x2713;</span>
     Unlimited consultations with our experienced on duty General Physician and Doctors </h3>
<h3 className='text-black mt-2'>
    <span className='font-bold text-green-500 mr-2'>&#x2713;</span>
     Daily Checkup 
     </h3>
     <h3 className='text-black mt-2'>
    <span className='font-bold text-green-500 mr-2'>&#x2713;</span>
    Daily 2 time Checkup
     </h3>
     <h3 className='text-black mt-2'>
    <span className='font-bold text-green-500 mr-2'>&#x2713;</span>
    Update Prescriptions
     </h3>
 
</div>
</div>


{/* --------------------------------------detail section 3---------------------------------------------- */}
<div className="detail_section_one  mx-auto bg-[#FFEAEA] px-4 py-5 max-w-[1317px] w-[352px] lg:rounded-none rounded-[25px] lg:w-full mt-[30px]">
<div className="flex items-center gap-x-2">
    <img src={icon3} alt="" />
    <p className='text-[20px]   text-black font-[400] '>Service </p>
</div>
<div className='py-4'>
<h3 className='text-black'>
    <span className='mr-2 font-bold text-green-500'>&#x2713;</span>
     Unlimited consultations with our experienced on duty General Physician and Doctors </h3>
<h3 className='text-black mt-2'>
    <span className='font-bold text-green-500 mr-2'>&#x2713;</span>
     Daily Checkup 
     </h3>
     <h3 className='text-black mt-2'>
    <span className='font-bold text-green-500 mr-2'>&#x2713;</span>
    Daily 2 time Checkup
     </h3>
     <h3 className='text-black mt-2'>
    <span className='font-bold text-green-500 mr-2'>&#x2713;</span>
    Update Prescriptions
     </h3>
 
</div>
</div>



{/* --------------------------------------------card section ---------------------------- */}
<div className="special_package_section hidden lg:block">
            <div className="help_package_section">
              <h1 className="text-[24px] text-black font-[500] text-center mt-[50px] mb-[26px]">
                SPECIAL PACKAGE
              </h1>
              <div className=" flex justify-center items-center gap-x-[60px]">
                {packages.map((val) => {
                  return (
                    <div class="max-w-sm bg-white rounded-lg  shadowborder-gray-700 shadow-xl">
                      <a href="#">
                        <img class="rounded-t-lg" src={cardimage1} alt="" />
                      </a>
                      <div class="p-5">
                        <a href="#">
                          <h5 class="mb-2 text-l tracking-tight text-gray-900">
                            Daily Doctor Home visit package
                          </h5>
                        </a>
                        <a href="#">
                          <h5 class="mb-2 text-sm font-bold tracking-tight text-gray-900">
                            8000 Taka/monthly
                          </h5>
                        </a>
                        <a href="#">
                          <h5 class="mb-2 text-m tracking-tight text-gray-900">
                            For 1 adult
                          </h5>
                        </a>
                        <div>
                          <p className="text-[10px] text-black font-[400]">
                            Using online appointment scheduling systems offers
                            wide-ranging benefits for both patients and
                            healthcare providers. It enables practices to update
                            and improve their practice’s services and allows
                            them to devote more time to offering quality patient
                            care. Online scheduling offers patients consistency
                            and predictability
                          </p>
                        </div>
                        <p className="text-[16px] text-black font-[400]">
                          Male : 10,000tk, Female : 12,000tk, Child : 5000tk
                        </p>
                        <div>
                          <button class="border-none shadow-xl bg-blue-100 p-[10px] w-[100%] mt-3 text-[18px] font-m hover:bg-blue-400 hover:ease-in-out duration-300 rounded-lg">
                            Details
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              
            </div>
          </div>


{/* ==================== mobile slideer================ */}
<div className="lg:hidden block">
  <SeeallPackagesSliders packages={packages} tittle={tittle} />
  </div>


            </div>
        </div>
    );
};

export default PackageDetail;