import React, {useEffect} from 'react';
import logo from "../../Assets/logo.svg";
const Navbar= () =>{
  
  return (
  <div className='fixed top-0 w-full px-10 py-5 flex flex-row gap-x-5 z-[100] justify-between place-items-center bg-[#ffffff95] backdrop-blur-lg'>
    <div className='justify-left'>
    <img src={logo} className="max-h-[3vh]"/>
    </div>
    <div className='justify-between flex flex-row gap-x-5 place-items-center'>
    <div>About Us</div>
    <div>Events and News</div>
    <div>Get Involved</div>
    <div className= 'px-2 py-2 rounded-lg bg-yellow-500'> 
      Donate
    </div>
    </div>
    
  </div>
  );
}
export default Navbar;