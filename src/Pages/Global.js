import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Section1 from '../components/Home/Section1'
const Global = ({children}) => {
  return (
    <div className='flex flex-col'>
        <Navbar />
        <div className='mt-2'>
            {children}
        </div>
        </div>
  )
}

export default Global