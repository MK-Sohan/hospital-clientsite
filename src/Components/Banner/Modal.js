import React, { useState } from 'react';

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
    // Close the modal
    toggleModal();
  };

  return (
    <div>
      <button
        onClick={toggleModal}
        className="px-4 py-2 text-white bg-blue-500 rounded-md"
      >
        Open Modal
      </button>
      {isOpen && (
        <div className="fixed inset-0 flex  justify-center z-50 overflow-auto">
          {/* <div className="absolute inset-0 bg-black opacity-50"></div> */}
          <div className="relative z-10  p-6 rounded-md shadow-lg">
            <button
              onClick={toggleModal}
              className="absolute top-9 right-8 z-50 p-1 bg-gray-300 rounded-md"
            >
              <svg
                className="w-4 h-4 text-gray-700"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 6.707a1 1 0 011.414 0L10 8.586l3.293-3.293a1 1 0 011.414 1.414L11.414 10l3.293 3.293a1 1 0 01-1.414 1.414L10 11.414l-3.293 3.293a1 1 0 01-1.414-1.414L8.586 10 5.293 6.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <div className="relative z-10 bg-[#242424] p-6 text-white   rounded-md shadow-lg">
            
            <h2 className="text-xl font-bold text-center pt-24">Request a Surgery</h2>
            <div className=''>
        <p className='font-[600] text-[20px] text-white'>Patient Information</p>
        <p className='font-[500] mt-1 text-[20px] text-white'>Patient Status</p>
        <div className='flex items-center gap-x-6'>
            <p className='font-[500] text-[20px] text-white '> I am a</p>
            <div className='flex items-center gap-x-3'>
            <input type="radio" name="" id="" />
            <p className='font-[500]  text-[20px] text-white'>New Patient</p>
            </div>
            <div className='flex items-center gap-x-3'>
            <input type="radio" name="" id="" />
            <p className='font-[500] text-[20px] text-white'>New Patient</p>
            </div>
        </div>

    </div>
            <form className="mt-3"  onSubmit={handleSubmit}>
            <div className="input_first_mother_container flex gap-x-3">
            <div className="input_container_one">
                        <div className="single_container_one w-[300px]">
                <div>
                <input
                placeholder="Name"
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
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
                  value={formData.name}
                  onChange={handleChange}
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
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                </div>
                <div className="mt-2">
                <input
                placeholder="Name"
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                </div>
               <div className="mt-2">
              
                <input
                placeholder="Prescription"
                  type="file"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
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
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                </div>
                <div className="mt-2">
                <input
                placeholder="Permanent Address"
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                </div>



            </div>
            </div>
           
              <div className="mb-0 ">
                <label htmlFor="message" className="block mb-2 font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full h-[58px] px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows="4"
                ></textarea>
              </div>

            <div className="surgery_information">
            <p className='font-[600]  text-[20px] text-white'>Surgery  Information</p>
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

            <p className='font-[600] mt-1 text-[20px] text-white'>Doctor referral letter</p>
            <div className=" w-[364px]">
                <input
                placeholder="Permanent Address"
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                </div>

            </div>
              <div className="flex justify-center mt-5">
                <button
                  type="submit"
            className="px-4 py-2  bg-[#00DC82] text-black w-[318px] h-[53px]  rounded-[33.5px]"
                >
                  Confirm 
                </button>
              </div>
            </form>
          </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
