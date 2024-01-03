import React, { useState } from 'react';
import { division } from "../checkboxdummydata";
import { diagonosticcenter } from "../checkboxdummydata";
import { MdLocationOn } from 'react-icons/md';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { district } from "../checkboxdummydata";
import {diagonosticcenterimage} from "../dummydata"
import SearchBar from '../Share/SearchBar';
import './selectdiagonostic.scss'
import { Link } from 'react-router-dom';



const SelectDiagonostic = () => {
    const checkboxes = [
        { id: 1, name: 'Checkbox 1' },
        { id: 2, name: 'Checkbox 2' },
        { id: 3, name: 'Checkbox 3' },
        // Add more checkboxes as needed
      ];
    return (
        <div>
            <div className="select_diagonostic_main_container flex justify-center mt-5 mb-5 gap-x-6">
            <div className='select_test_leftside'>
           {/* ------------------------check box one------------------- */}
           <div className=" w-[398px] h-[410px] border-2 rounded-md">
                <div className='tittle px-4  text-black text-[20px] font-[700] py-3 border-b-2'> 
                Diagnostic Centre
                </div>

           <div className="px-4 ">
{
   division.map((val=>{
    return(
       <div className='pt-3  w-[100%] '>
         <label className="flex items-center space-x-2 ">
        <input
          type="checkbox"
          className="form-checkbox text-indigo-500 h-[15px] w-[18px]"
          checkboxes={checkboxes}
        />
        <p className="text-black  text-[20px] w-[100%]  font-[400]">{val.name}</p>
      </label>
       </div>
    )
   })) 
}

          
           </div>

            </div>

            {/* -------------------------checkbox two----------------------------------------- */}
            <div className=" w-[398px] h-[368px] border-2 rounded-md mt-6">
                <div className='tittle px-4  text-black text-[20px] font-[700] py-3 border-b-2'> 
                Diagnostic Centre
                </div>

           <div className="px-4 ">
{
   diagonosticcenter.map((val=>{
    return(
       <div className='pt-3  w-[100%] '>
         <label className="flex items-center space-x-2 ">
        <input
          type="checkbox"
          className="form-checkbox text-indigo-500 h-[15px] w-[18px]"
          checkboxes={checkboxes}
        />
        <p className="text-black  text-[20px] w-[100%]  font-[400]">{val.name}</p>
      </label>
       </div>
    )
   })) 
}

          
           </div>

            </div>
            {/* ------------------check box three------------- */}
            <div className=" w-[398px] h-[368px] border-2 rounded-md mt-6">
                <div className='tittle px-4  text-black text-[20px] font-[700] py-3 border-b-2'> 
                District
                </div>

           <div className="px-4 ">
{
   district.map((val=>{
    return(
       <div className='pt-3  w-[100%] '>
         <label className="flex items-center space-x-2 ">
        <input
          type="checkbox"
          className="form-checkbox text-indigo-500 h-[15px] w-[18px]"
          checkboxes={checkboxes}
        />
        <p className="text-black  text-[20px] w-[100%]  font-[400]">{val.name}</p>
      </label>
       </div>
    )
   })) 
}   
           </div>

            </div>
            </div>

<div className="allDiagonostic_center_div">

<div className="search-bar flex gap-x-[180px] justify-between items-center">
    <h1 className='text-black text-[32px] font-[500]'>Select Test</h1>
<SearchBar/>


    </div>
    <div className="diagonostic_center_image_div mt-[32px] grid grid-cols-3 justify-items-center gap-x-[13px]">
{
  diagonosticcenterimage.map((val=>{
return (
  <div class="background-image">
  <div class="content  bg-[#2b2b2ba3] rounded-lg w-full ">
    <h2 class="title">UNITED  DIAGNOSTICE</h2>
    <div className='flex items-center gap-x-2 pt-1'> 
    <div className='h-[20px] flex justify-center items-center p-1 w-[20px] rounded-full border-[1px] border-white'>
      <MdLocationOn/>
      </div>
           <p class="address">Sonargaon Janapath, Dhaka 1230</p>
</div>
    <div className='flex items-center gap-x-2 pt-1'>
<div className='h-[20px] flex justify-center items-center p-1 w-[20px] rounded-full border-[1px] border-white'>
<BsFillTelephoneFill/>
</div>
    <p class="phone">09610-010616</p>

    </div>
  </div>
</div>
)
  }))
}

  
</div>
<div class="seemore_button   flex justify-center p-[20px]">
  <Link to='/diagonosticpage'>
  <button class="bg-[#026E5F] rounded-sm p-[10px] w-[208px] text-white font-b ">
            See More
          </button>

  </Link>
          
        </div>

</div>

            </div>
        </div>
    );
};

export default SelectDiagonostic;