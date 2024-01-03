import React from 'react';
import './resetpass.scss'
import { Link } from 'react-router-dom';

const ResetPass = () => {
    return (
        <div className=''>
            <div className="reset_pass_container_wrapper">
            <div className="login-box">
  <div class="left mt-20">
  <div className='flex justify-start items-start flex-col
  mb-6'>
  <h1>Reset your password</h1>
  <p className='text-[#FFFFFF] text-[14px] font-[300] tracking-wider'>Strong Passwords include numbers, letters, and punctuation marks.</p>
  
  </div>
    
    {/* <input type="text" name="username" placeholder="Username" /> */}
    <input type="text" name="email" placeholder="Enter new password:  :" />
    
    <input type="password" name="password2" placeholder="Confirm Password : " />
   

 <div className="flex flex-col items-center">
 <button className='loginbutton'>Reset Password</button>
 </div>
  </div>
  
 
</div>
            </div>
        </div>
    );
};

export default ResetPass;
