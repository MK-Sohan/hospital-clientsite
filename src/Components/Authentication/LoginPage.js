import React from 'react';
import logo from '../../Assets/logo/LOGO12 2.png'
import google from "../../Assets/icons/icons8-google-23.png"
import facebook from "../../Assets/icons/icons8-facebook-23.png"
import { Link } from 'react-router-dom';
import './loginpage.scss'
const LoginPage = () => {
    return (
        <div className=''>
            <div className="login_page_main_container">
            <div className="login-box">
  <div class="left mt-20">
  <div className='flex justify-center items-center flex-col
  mb-6'>
  <h1>Welcome to Login</h1>
    <img src={logo} alt="" />
  </div>
    
    {/* <input type="text" name="username" placeholder="Username" /> */}
    <input type="text" name="email" placeholder="E-mail :" />
    <input type="password" name="password" placeholder="Password :" />
    <input type="password" name="password2" placeholder="Confirm Password : " />
    <p className='text-[#F9F9F9] text-[16px] font-[400] text-end'>   <Link to="/resetpass">
    Forgot Password?</Link> </p>
 <div className="flex flex-col items-center">
 <button className='loginbutton'>Login</button>
  


  <p className='text-[#F9F9F9] text-[16px] font-[400] mt-5 '> <span className='opacity-[0.7] tracking-wider'>Haven’t any account?</span>  <span className='text-[#F9F9F9] text-[16px] font-[600] tracking-wider'>   <Link to="/signUppage"> Signup</Link> </span>
  </p>
 </div>
  </div>
  
 
</div>
            </div>
        </div>
    );
};

export default LoginPage;