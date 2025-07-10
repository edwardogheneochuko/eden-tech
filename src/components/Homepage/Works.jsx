

import React from 'react'
import Button from '../../shared/Button'
import { Link } from 'react-router'

const Works = () => {
  return (
    <div className='w-full bg-neutral-900 py-20 md:py-32 flex items-center justify-center '>
        <div className="px-10 text-center grid md:grid-cols-2 md:items-center md:justify-center
         gap-4 text-white">
           <div className='text-center sm:text-left space-y-3'>
            <h1>Our work</h1>
            <h2 className='text-3xl md:text-4xl font-bold max-w-2xl leading-tight'>Empowering <br />
                 Businesses Through Technology <br /> Innovation.</h2>
           </div>
           <div className='space-y-6 mt-5 md:mt-0 md:py-7 md:pr-2  flex flex-col items-center
            md:text-left md:items-start' >
            <h3 className='text-lg'> We specialize 
                in developing innovative cloud-based platforms that 
                streamline processes, enhance efficiency, and drive substantial 
                growth for organizations of all sizes.
            </h3>
            <Link to='/aboutus'><Button title='About Us' />
            </Link>
           </div>
      </div>
    </div>
  )
}

export default Works