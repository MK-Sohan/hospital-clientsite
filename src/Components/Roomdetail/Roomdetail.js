import React from 'react';
import image from '../../Assets/roomrentimages/25304609 2.png'
import icon from '../../Assets/icons/burgerlogo.png'

const Roomdetail = () => {
    return (
      <div className='bg-white'>
          <div className=' max-w-7xl mx-auto flex justify-center flex-col items-center border-gray-700'>
            <div className='room_detail_main_container flex  justify-center'>

<div className='flex justify-center items-center '>

<div className='vip_image_container flex  flex-col justify-center items-center  '>


    <div className='flex justify-start flex-col lg:py-0 py-4'>
    <h1 className='lg:text-[36px] text-[16px] py-3 lg:py-0 font-[400] text-black '>VIP or Deluxe Suite</h1>

    <img className=' lg:mx-auto w-[390px] h-[236px] lg:w-[918px] lg:h-[474px]  ' src={image} alt="" />
    </div>
    <p className='lg:text-end text-end w-full lg:w-full text-[16px] lg:text-[32px] font-[600] text-black'>30,000 BDT</p>
    <div className="book_now_button flex justify-center items-center pt-[24px]">
    <button className='lg:w-[493px] w-[318px] h-[43px] lg:h-[65px] bg-[#00A662] rounded-[29px] lg:text-[24px] font-[600] text-white'>Book Now</button>
</div>

<div className="room_fulldetails w-[318px]   lg:w-[917px] text-start mt-[54px] bg-[#FFEAEA] p-[38px]">
    <h1 className='lg:text-[24px] text-[14px] font-[400] text-black'>Details</h1>
<p className='lg:text-[20px] text-[10px] font-[400] text-black'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore commodi reiciendis similique assumenda quo minus! Magni, blanditiis! Nulla, suscipit ducimus necessitatibus adipisci velit quia dolores veritatis dignissimos? Modi, voluptate. Quos.
    </p>
</div>
<div className="room_fulldetails w-[318px]  lg:w-[917px] text-start mt-[54px] bg-[#FFEAEA] p-[38px]">
    <h1 className='lg:text-[24px] text-[14px] font-[400] text-black'>Service</h1>
<div className='lg:text-[20px] text-[10px] font-[400] text-black flex  lg:gap-[332px] justify-between lg:justify-start mt-[29px]'>
<div>
    <li>Service 1</li>
    <li>Service 1</li>
    <li>Service 1</li>
    <li>Service 1</li>
    <li>Service 1</li>
    <li>Service 1</li>
    <li>Service 1</li>
    
    
    
    </div>
    <div>
    <li>Service 1</li>
    <li>Service 1</li>
    <li>Service 1</li>
    <li>Service 1</li>
    <li>Service 1</li>
    <li>Service 1</li>
    <li>Service 1</li>
    
    
    
    </div>


    </div>
</div>
<div className="room_fulldetails mb-10 lg:mb-0 w-[318px]  lg:w-[917px] text-start mt-[54px] bg-[#FFEAEA] p-[38px]">
    <h1 className='lg:text-[24px] text-[14px] font-[400] text-black'>Facility</h1>
<div className='lg:text-[20px] text-[10px] font-[400] text-black flex  lg:gap-[332px] justify-between lg:justify-start mt-[29px]'>
<div>
    <li>Service 1</li>
    <li>Service 1</li>
    <li>Service 1</li>
    <li>Service 1</li>
    <li>Service 1</li>
    <li>Service 1</li>
    <li>Service 1</li>
    
    
    
    </div>
    <div>
    <li>Service 1</li>
    <li>Service 1</li>
    <li>Service 1</li>
    <li>Service 1</li>
    <li>Service 1</li>
    <li>Service 1</li>
    <li>Service 1</li>
    
    
    
    </div>


    </div>
</div>
</div>



</div>

<div className="hidden lg:block">
<div className="  w-[330px] h-[446px] mt-[70px] bg-white vip_content_container flex justify-center items-center flex-col border-[1px] m border-[#E1E1E1]">
    <div className="icon bg-[#FFD8D8] h-[73px] w-[73px] flex justify-center items-center rounded-full">
        <img src={icon} alt="" />
    </div>
<div className=''>
<h1 className='text-[28px] font-[400] text-black'>Complementary</h1>
<div className=' flex justify-center    gap-2 mt-[23px]  '>

 <div className="bg-[#FFD8D8] w-[8px] h-[282px]  justify-between flex  items-center flex-col rounded-md  py-[10px]">
 <div className="h-[6px] w-[6px] bg-black rounded-full"></div>
  <div className="h-[6px] w-[6px] bg-black rounded-full"></div>
  <div className="h-[6px] w-[6px] bg-black rounded-full"></div>
  <div className="h-[6px] w-[6px] bg-black rounded-full"></div>
  <div className="h-[6px] w-[6px] bg-black rounded-full"></div>
  <div className="h-[6px] w-[6px] bg-black rounded-full"></div>


 </div>

 <div className=" flex justify-between  h-[282px]  flex-col text-[20px] font-[400] ">
 <div>Tea / Coffee</div>
  <div>Breakfast</div>
  <div> Lunch</div>
  <div> Dinner</div>
  <div> Water</div>
  <div> Afternoon Snacks</div>


 </div>
</div>
</div>
    
</div>

</div>


            </div>
          <div className="hidden lg:block">
          <div className="related_room flex flex-col  ">

<h1 className='text-[24px] font-[400] text-black pt-28 pb-10
'>Related Room</h1>

<div className='flex gap-x-[20px] '>
    <img src={image} alt="" />
    <img src={image} alt="" />



</div>

<div className="book_now_button flex justify-end items-center pt-[24px] mb-[80px]">
    <button className='w-[178px] h-[54px] bg-[#026E5F] rounded-md text-[20px] font-[400] text-white'>View More</button>
</div>


          </div>
          </div>

        </div>
      </div>
    );
};

export default Roomdetail;