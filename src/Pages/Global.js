import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Section1 from '../Pages/Section1'
const Global = ({children}) => {
  return (
    <div className='flex flex-col'>
        <Navbar />
        <Section1 />
        <div className='mt-16'>
            {children}
        </div>
        </div>
  )
}

export default Global