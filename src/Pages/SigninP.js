import React from 'react'
import handheart from '../../src/Assets/handheart.svg'
import { Link } from 'react-router-dom';

const SigninP = () => {
  return (
    <div className='flex flex-row'>
        <div className='basis 1/2 bg-[#18345E] w-[50%] h-[100vh] flex flex-col justify-center place-items-center'>
            <img src={handheart}></img>
            <div className='font-spectral text-3xl text-white font-bold'>
            <h2>Welcome back</h2>
            </div>
        </div>
        <div className=' flex flex-col justify-center align-center place-items-center w-[50vw]'>
            <div className='font-spectral text-4xl text-[#18345E] font-medium '>
                Sign In
            </div>
            {/* <div className='font-spectral text-xs py-2 wy-2 text-left'>
                Email
            </div> */}
            <input type="email" placeholder='Email' className='font-spectral py-3 px-2 w-[50vh] my-2 border-2 border-[#00000150] rounded-lg '>
            </input>
            {/* <div className='font-spectral text-xs py-1 wy-2'>
                Password
            </div> */}
            <input type="password" placeholder='Password' className='font-spectral py-3 px-2 w-[50vh] my-2 border-2 border-[#00000150] rounded-lg '>
            </input>
            <div className= 'rounded-lg bg-yellow-500 cursor-pointer px-8 py-2 my-2'> 
                Sign In
            </div>
            <div className='font-spectral flex flex-row'>
                Don't have an account? 
                <div className='text-[#22C1DC] mx-2'> 
                    <Link to="/signup"><button>Sign Up</button></Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SigninP