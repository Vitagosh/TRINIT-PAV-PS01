import React from 'react'
import handheart from '../../src/Assets/handheart.svg'
import { Link } from 'react-router-dom';
import axios from "axios";
import { API_URI } from "../components/apiUrl";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const SigninP = () => {
    const navigate = useNavigate();
    const [firstname, setFirstname] = useState(null);
    const [lastname, setLastname] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [confirmPassword, setConfirmPassword] = useState(null);
    console.log(firstname, lastname, email, password, confirmPassword)
    const handleSignup = () => {
      const data = {
        firstname,
        lastname,
        email,
        password,
      };
      console.log(data)
      axios
        .post(`${API_URI}/register/philantropist`, data)
        .then((res) => {
          console.log(res.data);
          navigate("/login");
        })
        .catch((err) => {
          console.log(err);
        });
    };

    const checkPassword = (a, b) => {
      if (a === b && a !== null && b !== null) {
        return true;
      }
      return false;
    };
console.log(checkPassword(password, confirmPassword));
  return (
    <div className='flex flex-row'>
        <div className='basis 1/2 bg-[#18345E] w-[50%] h-[100vh] flex flex-col justify-center place-items-center'>
            <img src={handheart}></img>
            <div className='font-spectral text-3xl text-white font-bold'>
            <h2>Welcome Aboard</h2>
            </div>
        </div>
        <div className=' flex flex-col justify-center align-center place-items-center w-[50vw]'>
            <div className='font-spectral text-4xl text-[#18345E] font-medium my-3'>
                Create Account
            </div>
            {/* <div className='font-spectral text-xs py-2 wy-2 text-left'>
                Email
            </div> */}
            <div className='flex flex-row'>
            <input 
            onChange={(e) => setFirstname(e.target.value)}
            type="Text" placeholder='First' className=' bg-gray-100 font-spectral py-3 px-2 w-[30vh] mx-2 my-2 border-2 border-[#00000150] rounded-lg '/>
           
            <input 
            onChange={(e) => setLastname(e.target.value)}
            type="Text" placeholder='Last' className='bg-gray-100 font-spectral py-3 px-2 w-[30vh] my-2 border-2 border-[#00000150] rounded-lg '/>
      
            </div>
            {/* <div className='font-spectral text-xs py-1 wy-2'>
                Password
            </div> */}
            <input 
            onChange={(e) => setEmail(e.target.value)}
            type="email" placeholder='Email' className=' bg-gray-100 font-spectral py-3 px-2 w-[60vh] my-2 border-2 border-[#00000150] rounded-lg '/>
           
            <div className='flex flex-row'>
            <input 
            onChange={(e) => setPassword(e.target.value)}
            type="Password" placeholder='Password' className=' bg-gray-100 font-spectral py-3 px-2 w-[30vh] mx-2 my-2 border-2 border-[#00000150] rounded-lg '/>
    
            <input 
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
            type="Password" placeholder='Confirm Password' className=' bg-gray-100 font-spectral py-3 px-2 w-[30vh] my-2 border-2 border-[#00000150] rounded-lg '/>
            </div>
            <div className= 'rounded-lg disabled:bg-red-400 bg-[#F0AB20] cursor-pointer px-8 py-2 my-2 w-[60vh] text-[#18345E] font-spectral font-medium'>
                <button
                onClick={(e) => {
                  e.preventDefault();
                  handleSignup();
                }}
                disabled={!checkPassword(password, confirmPassword)}
                >Sign In</button>
            </div>
 
            <div className='font-spectral flex flex-row'>
                Already a member? 
                <div className='text-[#22C1DC] mx-2 font-bold'> 
                    <Link to="/signin"><button
                    >Sign In</button></Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SigninP