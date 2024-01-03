import React, { useState } from 'react';
import { checkbox } from "../checkboxdummydata";
import { checkboxtwo } from "../checkboxdummydata";
import { testcarddata } from "../testcarddummydata";

import './selecttest.scss'
import SearchBar from '../Share/SearchBar';
import TestComponent from './TestComponent';

const SelectTest = () => {
    const checkboxes = [
        { id: 1, name: 'Checkbox 1' },
        { id: 2, name: 'Checkbox 2' },
        { id: 3, name: 'Checkbox 3' },
        // Add more checkboxes as needed
      ];
    return (
        <div>
            <div className="select_test_main_container flex justify-center mt-5 mb-5 gap-x-2 ">
            <div className='select_test_leftside'>
            <div className=" w-[318px] border-2 mb-[13px] rounded-md">
                <div className='tittle px-4  text-black text-[20px] font-[700] py-3 border-b-2'> 
                Department
                </div>

           <div className="h-[609px] px-4   overflow-y-auto ">
{
   checkbox.map((val=>{
    return(
     <div className='pt-3'>
           <label className="flex items-center space-x-2 w-[198px]">
        <input
          type="checkbox"
          className="form-checkbox text-indigo-500 h-[15px] w-[18px]"
          checkboxes={checkboxes}
        />
        <span className="text-black text-[20px] font-[400]">{val.name}</span>
      </label>
     </div>
    )
   })) 
}

          
           </div>

            </div>
            {/* ------------------------------------------------------------------ */}
            <div className=" w-[318px] border-2 rounded-md">
                <div className='tittle px-4  text-black text-[20px] font-[700] py-3 border-b-2'> 
                Diagnostic Centre
                </div>

           <div className="h-[318px] px-4 ">
{
   checkboxtwo.map((val=>{
    return(
       <div className='pt-3'>
         <label className="flex items-center space-x-2 w-[198px]">
        <input
          type="checkbox"
          className="form-checkbox text-indigo-500 h-[15px] w-[18px]"
          checkboxes={checkboxes}
        />
        <span className="text-black text-[20px] font-[400]">{val.name}</span>
      </label>
       </div>
    )
   })) 
}

          
           </div>

            </div>
            </div>
            {/* ---------------------------------------------------------------------- */}
            <div className="select_test_rightside">

<div className="alltest_div">
    <div className="search-bar flex w-[920px] justify-between items-center">
    <h1 className='text-black text-[32px] font-[500]'>Select Test</h1>
<SearchBar/>


    </div>
    <div className="price_tittle">
<div className='flex gap-x-14 pl-9 text-[12px] font-[400]'>
    <p>Test name</p>
    <p> regular price</p>
    <p>discount price</p>
    <p>Total price</p>
</div>

    </div>
    <div className="test_main_container">
        {
testcarddata.map((val=>{
    return(
        <div className="single_test mt-[13px] flex items-center justify-between h-[110px] w-[920px] p-[40px] bg-[#fff1c667] rounded-[10px]">
<div className="single_test_left">
<h1 className='text-black text-[24px] font-[500]'>Radiothyrapi Test (DFARUQUE)</h1>
<div className='flex items-center gap-x-5'>
    <del className='text-[#6C6C6C] text-[24px] font-[500]'>{val.balance}</del>
    <p className='text-black text-[24px] font-[500]'>{val.balancetwo}</p>
    <p className='text-[#2B58CB] text-[24px] font-[500]'>10% OFF</p>
</div>
</div>

<TestComponent/>

</div>
    )
}))
        }


    </div>
</div>


            </div>
            </div>
        </div>
    );
};

export default SelectTest;