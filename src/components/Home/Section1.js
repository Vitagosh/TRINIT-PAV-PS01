import React from 'react'
import img1 from '../../Assets/img1.svg'
import bgimg from "../../Assets/homeimg.svg"
export default function Section1() {
  return (
    <div>
        <div className='relative'>
            <img src= {img1} className=' py-20 '/>
            <img src={bgimg} className="absolute bottom-[25rem] left-16 w-[20%]"></img>
            <div className= 'px-2 py-2 rounded-lg bg-yellow-500 absolute bottom-[20rem] left-16 w-[20vw] cursor-pointer'> 
      Join Us
    </div>
        </div>
    </div>
  )
}
