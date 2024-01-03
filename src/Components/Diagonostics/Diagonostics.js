import React from 'react';
import './diagonostics.scss'
import Tabs from '../Tabs/Tabs';
import hero1 from '../../Assets/DiagonosticpageImage/1568057135364 1.png'
import hero2 from '../../Assets/DiagonosticpageImage/Unilabs_Porto_JUL2020_DS-426 1.png'
import { Link } from 'react-router-dom';
import Carousel from '../MobileSlider/Carousel';
const Diagonostics = () => {
    return (
        <div className='diagonostics_main_container_wrapper py-2 lg:py-0'>
            <div className="diagonostics_banner_section text-white">
<h1 className='text-[24px] lg:text-[64px] font-[700]'>DIAGNOSTICS</h1>
<p className='text-[10px] lg:text-[20px] font-[400] w-full max-w-[1200px]'>Diagnostic Services facilitates the provision of timely, cost-effective, and high quality diagnostic care in safe and secure environments. It includes the clinical services of Pathology and Laboratory Medicine, Radiology, and Nuclear Medicine</p>
            </div>
          <div className="hidden lg:block">
          <Tabs/>
          </div>
          <div className="lg:hidden block py-10">
        <Carousel/>
          </div>

            <div className="diagonostics_hero_section_main_container bg-[#FFEAEA] flex flex-col items-center justify-center ">


<div className="first_hero_section flex flex-col items-center  lg:items-start lg:flex-row lg:py-4 ">

<div className="image_section ">
<img className='lg:w-[694px] lg:h-[459px] w-[294px] h-[188px]' src={hero2} alt="" />

</div>
<div className="detailsection text-center flex flex-col items-center lg:text-start lg:w-[543px] ">
    <h1 className='text-[17px] font-[700]'>Lab Services</h1>
    <p className='text-[16px] font-[400] mt-3 hidden lg:block'>Laboratory testing is important for diagnosing and helping to manage health conditions. These might include blood tests, tests requiring samples of your urine or stool, and other services such as Pap tests and biopsies. Lab testing may be part of a routine check-up, help your doctor make a diagnosis, or be necessary for monitoring health conditions. If you have a chronic condition such as high cholesterol or diabetes, your doctor may ask you to come in regularly for tests to monitor your health. You may also request certain services yourself, such as screening for sexually transmitted infections.</p>
    <div className='py-4  flex flex-col items-center lg:items-start'>
    <h3 className='text-black mt-0'>
    <span className='font-bold text-green-500 mr-2 '>&#x2713;</span>
     Daily Checkup 
     </h3>
<h3 className='text-black mt-0'>
    <span className='font-bold text-green-500 mr-2 '>&#x2713;</span>
     Daily Checkup 
     </h3>
     <h3 className='text-black mt-0'>
    <span className='font-bold text-green-500 mr-2'>&#x2713;</span>
    Daily 2 time Checkup
     </h3>
     <h3 className='text-black mt-0'>
    <span className='font-bold text-green-500 mr-2'>&#x2713;</span>
    Update Prescriptions
     </h3>
     <h3 className='text-black mt-0'>
    <span className='font-bold text-green-500 mr-2'>&#x2713;</span>
    Update Prescriptions
     </h3>
     <h3 className='text-black mt-0'>
    <span className='font-bold text-green-500 mr-2'>&#x2713;</span>
    Update Prescriptions
     </h3>
     <h3 className='text-black mt-0'>
    <span className='font-bold text-green-500 mr-2'>&#x2713;</span>
    Update Prescriptions
     </h3>
 <p className='text-[16px] font-[400] mt-3 hidden lg:block'>In addition, we offer home sample collection including blood and urine samples.</p>
 <div className='flex justify-center mt-5'>
    <Link to='/diagonosticBookNow'>
    <button className='w-[290px] h-[50px] bg-[#FFC408] rounded-[29px] text-[20px] font-[500] text-black'>Book Now</button>
    </Link>

 </div>
</div>
</div>



</div>
{/* ======================================== */}

<div className="secont_hero_section flex flex-col-reverse lg:flex-row  py-4 ">
<div className="detailsection lg:w-[553px] ">
    <h1 className='text-[17px] font-[700] hidden lg:block'>Imaging</h1>
    <p className='text-[16px] font-[400] mt-3 hidden lg:block'>Praava’s family health center is equipped with state-of-the-art imaging and radiology equipment from the world’s best manufacturers.
Our imaging services include:</p>
    <div className='py-4 text-center lg:text-start'>
    <h3 className='text-black mt-0'>
    <span className='font-bold text-green-500 mr-2 '>&#x2713;</span>
     Daily Checkup 
     </h3>
<h3 className='text-black mt-0'>
    <span className='font-bold text-green-500 mr-2 '>&#x2713;</span>
     Daily Checkup 
     </h3>
     <h3 className='text-black mt-0'>
    <span className='font-bold text-green-500 mr-2'>&#x2713;</span>
    Daily 2 time Checkup
     </h3>
     <h3 className='text-black mt-0'>
    <span className='font-bold text-green-500 mr-2'>&#x2713;</span>
    Update Prescriptions
     </h3>
     <h3 className='text-black mt-0'>
    <span className='font-bold text-green-500 mr-2'>&#x2713;</span>
    Update Prescriptions
     </h3>
     <h3 className='text-black mt-0'>
    <span className='font-bold text-green-500 mr-2'>&#x2713;</span>
    Update Prescriptions
     </h3>
     <h3 className='text-black mt-0'>
    <span className='font-bold text-green-500 mr-2'>&#x2713;</span>
    Update Prescriptions
     </h3>
 <p className='text-[16px] font-[400] mt-3 lg:block hidden'>
Retrograde Urethrogram (RGU) and Micturating Cysto-Urethrogram (MCU)
Your scans will be permanently stored in our Radiology Information System (RIS), which you will be able to access from our Patient Portal using your laptop or mobile phone.
We are also incorporating a Teleradiology Picture Archiving and Communication System (PACS) to allow us to access a network of international radiologists (including US board-certified radiologists) to provide second opinions on diagnoses of your scans.</p>
 <div className='flex justify-center mt-5'>
 <Link to='/diagonosticBookNow'>
    <button className='w-[290px] h-[50px] bg-[#FFC408] rounded-[29px] text-[20px] font-[500] text-black'>Book Now</button>
    </Link>
 </div>
</div>
</div>

<div className="image_section flex justify-center flex-col items-start">

<img className='lg:w-[694px] lg:h-[459px] w-[294px] h-[188px]' src={hero1} alt="" />

</div>

<h1 className='text-[17px] font-[700] py-2 block lg:hidden'>Imaging</h1>
</div>





            </div>
        </div>
    );
};

export default Diagonostics;