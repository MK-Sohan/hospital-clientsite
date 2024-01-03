import React from 'react';

const Ottp = () => {
    return (
        <div>
            <div className="flex flex-col justify-center items-center lg:py-10 lg:px-0 py-32 px-2" >
               
<div >
<div className='lg:w-[27.950000000000003vw]'>
      <p className='text-black font-[400] lg:w-[282px] lg:mx-auto text-center  '>OTP Send Your Mobile 
        Number
         Number is +880 17*********89</p>
                <input placeholder='Code' id="username" type="email" class="block  w-full  px-4 py-2 mt-2 text-gray-700 border-[1px] border-[#00A662]  lg:w-[27.950000000000003vw]      focus:outline-none "/>
                <button onClick={()=>window.my_modal_1.showModal()} className=' w-full lg:w-[27.950000000000003vw] h-[42px] bg-[#00A662] flex justify-center items-center rounded-[5px] mt-[23px]'>Verify</button>



                <dialog id="my_modal_1" className="modal">
  <form method="dialog" className="modal-box ">
    <div className="flex flex-col items-center">
    <h1 className='text-[#026E5F] lg:text-[1.6vw] font-[500] py-2'>Successful Your Appointment </h1>
   <div className="max-w-[438px] w-full  border-[1px] border-[#6C6C6C] p-7">

   <div className="text-center">
   <h1 className='text-[#026E5F] text-[16px] font-[400] pb-3'>DR. Aisha Tanjina</h1>
   <p className='text-black text-[16px] font-[400]'>Speciality - Associate Consultant, Pediatric</p>
   <p className='text-black text-[16px] font-[400]'>CardiologyDegree - MBBS, DCH, FCPS (Pediatrics), Trained in Noninvasive Pediatric Cardiology (NICVD) </p>
   </div>
   <p className='text-black text-center mt-3 text-[1.2vw] font-[600]'>Date : 3/19/2023 at 9:00am- 10:00am </p>
   </div>
  <div className="flex gap-x-2 ">
  <div className="modal-action ">
      {/* if there is a button in form, it will close the modal */}
      <button className="rounded btn btn-outline">Continue</button>
    </div>
   <div className="modal-action  ">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn rounded  btn-outline">Cancel</button>
    </div>
  </div>
    </div>
 
   
  </form>
</dialog>
                </div>
</div>

<div  className='mt-10'>
<div className='lg:w-[27.950000000000003vw]'>
      <p className='text-black font-[400] lg:w-[282px] lg:mx-auto text-center  '>OTP Send Your Mobile 
        Number
         Number is +880 17*********89</p>
                <input placeholder='Code' id="username" type="email" class="block  w-full  px-4 py-2 mt-2 text-gray-700 border-[1px] border-[#00A662]  lg:w-[27.950000000000003vw]      focus:outline-none "/>
                <button onClick={()=>window.my_modal_2.showModal()} className=' w-full lg:w-[27.950000000000003vw] h-[42px] bg-[#00A662] flex justify-center items-center rounded-[5px] mt-[23px]'>Verify</button>



                <dialog id="my_modal_2" className="modal">
  <form method="dialog" className="modal-box ">
    <div className="flex flex-col items-center">
    <h1 className='text-[#026E5F] lg:text-[1.6vw] font-[500] py-2'>Successful Your Appointment </h1>
   <div className="max-w-[438px] w-full  border-[1px] border-[#6C6C6C] p-7">

   <div className="text-center">
   <h1 className='text-[#026E5F] text-[16px] font-[400] pb-3'>DR. Aisha Tanjina</h1>
   <p className='text-black text-[16px] font-[400]'>Speciality - Associate Consultant, Pediatric</p>
   <p className='text-black text-[16px] font-[400]'>CardiologyDegree - MBBS, DCH, FCPS (Pediatrics), Trained in Noninvasive Pediatric Cardiology (NICVD) </p>
   </div>
   <p className='text-black text-center mt-3 text-[1.2vw] font-[600]'>Date : 3/19/2023 at 9:00am- 10:00am </p>
   </div>
  <div className="flex gap-x-2 ">
  <div className="modal-action ">
      {/* if there is a button in form, it will close the modal */}
      <button className="rounded btn btn-outline">Continue</button>
    </div>
   <div className="modal-action  ">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn rounded  btn-outline">Cancel</button>
    </div>
  </div>
    </div>
 
   
  </form>
</dialog>
                </div>
</div>
            </div>
        </div>
    );
};

export default Ottp;