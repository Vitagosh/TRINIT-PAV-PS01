import React from 'react'
import handheart from '../../src/Assets/handheart.svg'

const SigninP = () => {
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
            <input type="Text" placeholder='First' className=' bg-gray-100 font-spectral py-3 px-2 w-[30vh] mx-2 my-2 border-2 border-[#00000150] rounded-lg '>
            </input>
            <input type="Text" placeholder='Last' className='bg-gray-100 font-spectral py-3 px-2 w-[30vh] my-2 border-2 border-[#00000150] rounded-lg '>
            </input>
            </div>
            {/* <div className='font-spectral text-xs py-1 wy-2'>
                Password
            </div> */}
            <input type="email" placeholder='Email' className=' bg-gray-100 font-spectral py-3 px-5 w-[60vh] my-2 border-2 border-[#00000150] rounded-lg '>
            </input>
            <div className='flex flex-row'>
            <input type="Password" placeholder='Password' className=' bg-gray-100 font-spectral py-3 px-2 w-[30vh] mx-2 my-2 border-2 border-[#00000150] rounded-lg '>
            </input>
            <input type="Password" placeholder='Confirm Password' className=' bg-gray-100 font-spectral py-3 px-2 w-[30vh] my-2 border-2 border-[#00000150] rounded-lg '>
            </input>
            </div>
            <div className= 'rounded-lg bg-[#F0AB20] cursor-pointer px-8 py-2 my-2 w-[60vh] text-[#18345E] font-spectral font-medium'>
                Sign In
            </div>
            <input type="email"></input>
            <div className='font-spectral flex flex-row'>
                Already a member? 
                <div className='text-[#22C1DC] mx-2 font-bold'> 
                    Sign In
                </div>
            </div>
        </div>
    </div>
  )
}

export default SigninP