import React from 'react';
import "./signup.scss"
import logo from '../../Assets/logo/LOGO12 2.png'
import google from "../../Assets/icons/icons8-google-23.png"
import facebook from "../../Assets/icons/icons8-facebook-23.png"
import { Link } from 'react-router-dom';



const SignupPage = () => {
    return (
        <div className='signup_form_container '>
           <div className="login-box">
  <div class="left">
  <div className='flex justify-center items-center flex-col
  mb-6'>
  <h1>Welcome to Signup</h1>
    <img src={logo} alt="" />
  </div>
    
    {/* <input type="text" name="username" placeholder="Username" /> */}
    <input type="text" name="email" placeholder="E-mail :" />
    <input type="password" name="password" placeholder="Password :" />
    <input type="password" name="password2" placeholder="Confirm Password : " />
    
    {/* <button type="submit" name="signup_submit" value="Signup" /> */}
    <button className='loginbutton'>Signup</button>
    <div className="flex items-center justify-center gap-3 pt-7">
        <div className='h-[1px] w-[196px] bg-white'></div>
        OR
        <div className='h-[1px] w-[196px] bg-white'></div>
        </div>

<div className="google_facebook_button flex justify-center items-center gap-[17px]">     
    <button className='social_button flex items-center justify-center gap-1'>  <img src={google} alt="" />Continue with Google </button>

    <button className='social_button flex items-center justify-center gap-1'><img src={facebook} alt="" />Continue with Facebook</button> 
</div>
<p className='text-[#F9F9F9] text-[16px] font-[400] mt-5 tracking-wider'>Already have an account? <span className='text-[#F9F9F9] text-[16px] font-[600] tracking-wider'>   <Link to="/loginpage"> Login</Link> </span></p>
  </div>
  
 
</div>
        </div>
    );
};

export default SignupPage;