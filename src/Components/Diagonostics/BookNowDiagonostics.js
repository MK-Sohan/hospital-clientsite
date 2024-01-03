import React from 'react';
import './booknowDiagonostics.scss'
import Formappointment from '../Formofappointment/Formappointment';
import { Link } from 'react-router-dom';
const BookNowDiagonostics = () => {
    return (
        <div className='booknowDiagonostics_main_container_wrapper'>
<div className=" booknowDiagonostics_banner_section ">
          <h1 className=' text-[64px] font-[700]'>Skin Cancer</h1>
<p className=' text-[20px] font-[400] w-full max-w-[1200px]'>Diagnostic Services facilitates the provision of timely, cost-effective, and high quality diagnostic care in safe and secure environments. It includes the clinical services of Pathology and Laboratory Medicine, Radiology, and Nuclear Medicine</p>
            
            </div>  
{/* ------------------------------------------- */}
<div className="hidden lg:block">
<div className="form_section flex justify-center items-center py-9">
<div className="relative z-10 bg-[#94BFB9] p-6 text-black   rounded-md shadow-lg">
            
            <h2 className="text-xl font-bold text-center pt-2">Request  for a test</h2>
            <div className=''>
        <p className='font-[600] text-[20px] text-black py-2'>Patient Information</p>
        <p className='font-[500] mt-1 text-[20px] text-black py-4'>Patient Status</p>
        <div className='flex items-center gap-x-6'>
            <p className='font-[500] text-[20px] text-black '> I am a</p>
            <div className='flex items-center gap-x-3'>
            <input type="radio" name="" id="" />
            <p className='font-[500]  text-[20px] text-black'>New Patient</p>
            </div>
            <div className='flex items-center gap-x-3'>
            <input type="radio" name="" id="" />
            <p className='font-[500] text-[20px] text-black'>New Patient</p>
            </div>
        </div>

    </div>
            <form className="mt-3"  >
            <div className="input_first_mother_container flex gap-x-3">
            <div className="input_container_one">
                        <div className="single_container_one w-[300px]">
                <div>
                <input
                placeholder="Name"
                  type="text"
                  id="name"
                  name="name"
                  
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                </div>
          
          <div>
               
               <select class="block w-full px-4 py-2 mt-2  bg-white   rounded-md  text-gray-500 focus:outline-none ">
                       <option>Gender</option>
                       <option>Male</option>
                       <option>Female</option>
                      
                   </select>
               </div>
               <div>
               
               <select class="block w-full px-4 py-2 mt-2  bg-white   rounded-md  text-gray-500 focus:outline-none ">
                       <option>Marital Status</option>
                       <option>Single</option>
                       <option>Married</option>
                      
                   </select>
               </div>
               <div className="mt-2">
                <input
                placeholder="Write Your Problem"
                  type="text"
                  id="name"
                  name="name"
                  
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                </div>
                        </div>
              </div>
            <div className="input_container_two">
           
                        <div className="single_container_one w-[300px]">
                        <div>
               
               <select class="block w-full px-4 py-2  bg-white   rounded-md  text-gray-500 focus:outline-none ">
                       <option>Age</option>
                       <option>20</option>
                       <option>30</option>
                      
                   </select>
               </div>
                <div className="mt-2">
                <input
                placeholder="Name"
                  type="text"
                  id="name"
                  name="name"
                  
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                </div>
                <div className="mt-2">
                <input
                placeholder="Name"
                  type="text"
                  id="name"
                  name="name"
                  
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                </div>
               <div className="mt-2">
              
                <input
                placeholder="Prescription"
                  type="file"
                  id="name"
                  name="name"
                  
                  className="w-full px-4 py-2 border  border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                </div>
                        </div> 
            </div>
            <div className="input_container_three">
           
            <div className="w-[300px]">
                 <input placeholder='Date of Birth' id="date" type="date" class="block w-full px-4 py-2  text-gray-700 bg-white border  rounded-md focus:outline-none "/>
           
            </div>


            <div className="mt-2">
                <input
                placeholder="Email"
                  type="text"
                  id="name"
                  name="Email"
                  
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                </div>
                <div className="mt-2">
                <input
                placeholder="Permanent Address"
                  type="text"
                  id="name"
                  name="name"
                  
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                </div>



            </div>
            </div>
           
              <div className="mb-0 ">
                <label htmlFor="message" className="block mb-2 font-medium py-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
               
                  className="w-full h-[58px] px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows="4"
                ></textarea>
              </div>

            <div className="surgery_information">
            <p className='font-[600] py-4 text-[20px] text-black'>Surgery  Information</p>
<div className="surgery_input flex gap-x-8 ">
<div className="w-[360px]">
               
               <select class="block w-full px-4 py-2 mt-0  bg-white   rounded-md  text-gray-500 focus:outline-none ">
                       <option>DEPARTMENT</option>
                       <option>Surgery</option>
                       <option>Medicine</option>
                      
                   </select>
               </div>
               <div className="w-[300px]">
                 <input placeholder='Date of Birth' id="date" type="date" class="block w-full px-4 py-2  text-gray-700 bg-white border  rounded-md focus:outline-none "/>
           
            </div>
            <div className="w-[300px]">
                 <input placeholder='Date of Birth' id="date" type="time" class="block w-full px-4 py-2  text-gray-700 bg-white border  rounded-md focus:outline-none "/>
           
            </div>

</div>
            </div>
            <div className="">

            <p className='py-4 font-[600] mt-1 text-[20px] text-black'>Preferred Provider</p>
            <div className=" w-[364px]">
                <input
                placeholder="Permanent Address"
                  type="text"
                  id="name"
                  name="name"
                  
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                </div>

            </div>
              <div className="flex justify-end mt-5">
                <Link to='/diagonosticBookingDetails'>
                <button
                  type="submit"
            className="px-4 py-2  bg-transparent text-[#000000] w-[180px]  font-[500] h-[53px] border-[1px] border-[#00A662] rounded-[33.5px] hover:bg-[#00A662] text-[24px] transition-all"
                >
                  Next 
                </button>

                </Link>
               
              </div>
            </form>
          </div>
</div>
</div>
            
{/* -------------------------------- Mobile Form start------------------------------- */}

<div className="py-9 Mobile_form_section block lg:hidden">

<div className="form">

<div className="form_header pl-7">
<h2 className="text-xl font-bold text-start pt-2">Request  for a test</h2>
            <div className=''>
        <p className='font-[600] text-[20px] text-black py-2'>Patient Information</p>
        <p className='font-[500] mt-1 text-[20px] text-black py-4'>Patient Status</p>
        <div className='flex items-start flex-col gap-x-6'>
            <p className='font-[500] text-[20px] text-black '> I am a</p>
            <div className='flex items-center gap-x-3'>
            <input type="radio" name="" id="" />
            <p className='font-[500]  text-[20px] text-black'>New Patient</p>
            </div>
            <div className='flex items-center gap-x-3'>
            <input type="radio" name="" id="" />
            <p className='font-[500] text-[20px] text-black'>New Patient</p>
            </div>
        </div>
</div>


        </div>


        <div className="inputs  flex flex-col items-center py-7">
          {/* -------------mobile inputs -------------- */}
        <div>
          <input
                placeholder="Name"
                  type="text"
                  id="name"
                  name="name"
                  
                  className="w-[313px] h-[38px] text-black placeholder:text-black   px-4 py-2 border border-[#6C6C6C] rounded-[23px] focus:outline-none  "
                />
                </div>

                <div>
               
               <select class="w-[313px] h-[38px] mt-4 text-black placeholder:text-black   px-4 py-2 border border-[#6C6C6C] rounded-[23px] focus:outline-none  ">
                       <option>Age</option>
                       <option>20</option>
                       <option>30</option>
                      
                   </select>
               </div>
               <div className="">
                 <input placeholder='Date of Birth' id="date" type="date" class="block w-[313px] h-[38px] mt-4 text-black placeholder:text-black   px-4 py-2 border border-[#6C6C6C] rounded-[23px] focus:outline-none "/>
           
            </div>

            <div>
               <select class="w-[313px] h-[38px] mt-4 text-black placeholder:text-black   px-4 py-2 border border-[#6C6C6C] rounded-[23px] focus:outline-none  ">
                       <option>Gender</option>
                       <option>Male</option>
                       <option>Female</option>
                      
                   </select>
               </div>


               <div>
          <input
                placeholder="Phone No."
                  type="text"
                  id="name"
                  name="name"
                  
                  className="mt-5 w-[313px] h-[38px] text-black placeholder:text-black   px-4 py-2 border border-[#6C6C6C] rounded-[23px] focus:outline-none  "
                />
                </div>
                <div>
          <input
                placeholder="Email"
                  type="email"
                  id="name"
                  name="name"
                  
                  className="mt-5 w-[313px] h-[38px] text-black placeholder:text-black   px-4 py-2 border border-[#6C6C6C] rounded-[23px] focus:outline-none  "
                />
                </div>
                <div>
          <input
                placeholder="Write Your Problem"
                  type="text"
                  id="name"
                  name="name"
                  
                  className="mt-5 w-[313px] h-[38px] text-black placeholder:text-black   px-4 py-2 border border-[#6C6C6C] rounded-[23px] focus:outline-none  "
                />
                </div>
                <div>
          <input
                placeholder=""
                  type="File"
                  id="name"
                  name="name"
                  
                  className="mt-5 w-[313px] h-[38px] text-black placeholder:text-black   px-4 py-2 border border-[#6C6C6C] rounded-[23px] focus:outline-none  "
                />
                </div>
                <div className="mb-0 ">
                <label htmlFor="message" className="block mb-2 font-medium py-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
               
                  className="w-[313px] h-[94px] rounded-3xl px-4 py-2 border border-[#6C6C6C]  focus:outline-none "
                  rows="4"
                ></textarea>
              </div>
             
        </div>
        
        <div className='flex justify-end mb-5 mr-5'>
        <Link to='/totalFee' className=''>
        <button className='btn rounded-[25px] border-[#00A662] border-1 w-[151px] h-[41px]'>Save</button>
</Link>
             
             </div>

</div>


</div>



        </div>
    );
};

export default BookNowDiagonostics;