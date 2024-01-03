import React from 'react';
import './telemedicinebenefits.scss'
import avatar from '../../Assets/TelemedicineBenefits/png-woman-doctor--602 1.png'
import heroimg from '../../Assets/TelemedicineBenefits/banner-telemedicine-v2-1 1.png'
import tickicon from '../../Assets/icons/dropdownicon/3.png'
import { Link } from 'react-router-dom';
const Telemedicinebenefits = () => {
    return (
        <div>
            <div className="Telemedicinebenefits_parent_container mb-10">
            <div className="booknowDiagonostics_banner_section">
<p className=' max-w-[963px] w-full text-[2vw] text-white font-[700]  '>Telemedicine, or virtual health visits, offers patients an additional option to consult with their physicians</p>
            <div className='flex items-center gap-2 pt-4'>
            <div className="avatar online w-14">
  <div className="w-24 rounded-full bg-[white]">
    <img src={avatar} />
  </div>
</div>

<div className="avatar online w-14">
  <div className="w-24 rounded-full bg-[white]">
    <img src={avatar} />
  </div>
</div>
<div className="avatar online w-14">
  <div className="w-24 rounded-full bg-[white]">
    <img src={avatar} />
  </div>
</div>
            </div>
            <p className='text-[19px] text-white pt-4 font-[500]'>+25 doctors are online now</p>
            <div class="seemore_button   flex justify-center p-[20px] mt-[3px] ">
        <Link to='/doctors'>
        <button class="bg-[#FFC408]  rounded-3xl p-[10px] w-[208px] text-white font-b ">
        Book Today !
          </button>
        </Link>
        
        </div>
            </div>

<div className=" px-2 pricing_section flex flex-col lg:flex-row items-center justify-center mt-[-70px] mb-12">

<div className=" flex  flex-col lg:flex-row justify-between items-center rounded-3xl  bg-[#FFEAEA] max-w-[1200px] w-full">
    <div className="pricing_left_side px-7 text-center lg:text-start">
    <p className='text-[24px] text-black font-[500]'>Telemedicine benefits</p>
<div className="rating flex items-center gap-[38px] mt-4">
<div class="rating rating-sm ">
  <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" checked />
  <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" checked />
  <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" checked />
  <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" checked/>
</div>
<p className='text-[16px] text-[#6C6C6C] font-[500]'>Telemedicine benefits</p>
</div>
    <div className="text-[20px] text-black font-[400] mt-3 ">

    <p>Family doctors available anytime </p>
    <p className='mt-2'>Doctor consultations via video call</p>
    <p className='mt-2'>E-prescription</p>
    <p className='mt-2'>Easy access from your smartphone, tab or laptop</p>

    </div>

    </div>
    <div className="pricing_rignt_side  w-full lg:h-[100%] lg:w-[423px]">


<div className=" bg-[#FFC408] rounded-3xl flex flex-col items-center  p-10">

<p className='text-[16px] text-black font-[500]'>Starting from </p>
<h1 className='text-[40px] text-black font-[600]'> ৳800</h1>
<p className='text-[16px] text-black font-[500] text-center'>Free follow-up consultation included if booked within 7 days*</p>
<Link to='/doctors'>
<button class="bg-[#FFE07D] border-[1px] mt-5 border-[#026E5F]  rounded-3xl p-[10px] w-[208px] text-black font-b ">
        Book Today !
          </button>
</Link>

</div>

    </div>
</div>
</div>


<div className="Meet_our_doctor ">

<h1 className=' text-[24px] text-black text-center pb-10 font-[500]'>Meet our doctors</h1>
<div className="flex justify-center items-center">

<div className="meet_our_doctor_hero ml-3 lg:ml-0  flex flex-col-reverse lg:flex-row items-center justify-center lg:justify-between gap-x-3">
    <div className="hero_contentt flex flex-col items-center  gap-y-3">

<div className=" flex justify-center items-center  gap-x-2 ">
<div className="h-[32px] w-[32px] rounded-full bg-[#94bfb9b5] flex justify-center items-center">
    <img src={tickicon} alt="" />
</div>

<p className='lg:text-[20px] text-black  font-[500]'>Access to experienced, internationally trained doctors
</p>
</div>



<div className="p2 flex gap-x-2 items-center">
<div className="h-[32px] w-[32px] rounded-full bg-[#94bfb9b5] flex justify-center items-center">
    <img src={tickicon} alt="" />
</div>

<p className='lg:text-[20px] text-black  font-[500]'>Access to experienced, internationally trained doctors
</p>
</div>
<div className="p3 flex gap-x-2 items-center">
<div className="h-[32px] w-[32px] rounded-full bg-[#94bfb9b5] flex justify-center items-center">
    <img src={tickicon} alt="" />
</div>

<p className='lg:text-[20px] text-black  font-[500]'>Access to experienced, internationally trained doctors
</p>
</div>
<div className="p4 flex gap-x-2 items-center">
<div className="h-[32px] w-[32px] rounded-full bg-[#94bfb9b5] flex justify-center items-center">
    <img src={tickicon} alt="" />
</div>

<p className='lg:text-[20px] text-black  font-[500]'>Access to experienced, internationally trained doctors
</p>
</div>
<div className="p5 flex gap-x-2 items-center">
<div className="h-[32px] w-[32px] rounded-full bg-[#94bfb9b5] flex justify-center items-center">
    <img src={tickicon} alt="" />
</div>

<p className='lg:text-[20px] text-black  font-[500]'>Access to experienced, internationally trained doctors
</p>
</div>
    </div>
    <div className="hero_image">
        <img src={heroimg} alt="" />
    </div>
</div>
</div>

</div>


<div className="book_video_consultation text-center lg:text-start px-2 lg:px-0 mt-10 lg:max-w-[1200px] lg:w-full lg:mx-auto">
    <div className="flex flex-col items-center bg-[#FFEAEA] rounded-3xl py-9">

    <p className='text-[24px] text-black font-[500]'>Book your video consultation today and save up to 10%</p>
    <h1 className='text-[40px] text-black font-[600]'>4.2</h1>
    <div className="rating flex items-center gap-[8px] mt-4">
<div class="rating rating-sm ">
  <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" checked />
  <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" checked />
  <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" checked />
  <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" checked/>
</div>
<p className='text-[16px] text-[#6C6C6C] font-[500]'>(1.4k+ reviews)</p>
</div>
<p className='text-[16px] text-black font-[400] py-4'>Naviea is a leading healthcare company in Bangladesh. We began our journey in 2009 and have served over 200,000 patients since.</p>
<Link to='/doctors'>
<button class="bg-[#f7cc40]  rounded-3xl p-[10px] w-[208px] text-white font-b ">
        Book Today !
          </button>
</Link>
    </div>
</div>

            </div>
        </div>
    );
};

export default Telemedicinebenefits;