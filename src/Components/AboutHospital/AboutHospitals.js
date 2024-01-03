import React from 'react';
import './aboutHospital.scss'
import image1 from "../../Assets/icons/hospitaldetailicons/hospital-bed.png"
const AboutHospitals = () => {
    return (
        <div>
            <div class="hospital_details_main_container">

<div class="hospital_details_back_image">

  <div class="hospital_details grid grid-cols-2 gap-[20px] py-[20px] lg:flex lg:justify-center lg:gap-[139px] lg:items-center lg:py-[33px]">

<div class=" text-center flex justify-center flex-col items-center">
  <img src={image1 } alt=""/>
  <p class=" font-bold text-white text-[20px]">80+</p>
  <p class="font-sm text-white text-[14px]">Doctors</p>
</div>
<div class=" text-center flex justify-center flex-col items-center">
  <img src={image1 } alt=""/>
  <p class=" font-bold text-white text-[20px]">120+</p>
  <p class="font-sm text-white text-[14px]">Consultation Rooms</p>
</div>
<div class=" text-center flex justify-center flex-col items-center">
  <img src={image1 } alt=""/>
  <p class=" font-bold text-white text-[20px]">500+</p>
  <p class="font-sm text-white text-[14px]">In Patients Bed</p>
</div>
<div class=" text-center flex justify-center flex-col items-center">
  <img src={image1 } alt=""/>
  <p class=" font-bold text-white text-[20px]">2500+</p>
  <p class="font-sm text-white text-[14px]">Staff</p>
</div>




  </div>

</div>



</div>
        </div>
    );
};

export default AboutHospitals;