

import React from 'react'
import landingpage from '../../../public/Images/LandingPage3.png'
import Button from '../../shared/Button'
import { Link } from 'react-router'

const Transform = () => {
  return (
    <div className="relative w-full h-[300px]">
        <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${landingpage})` }}>
            </div>
          <div className="relative z-10 flex flex-col items-center
           justify-center text-white px-4 md:px-0 py-16 gap-y-10
           text-center">
                <h1 className='mt-5 text-3xl md:text-4xl font-bold'>
                    Let's Transform your Idea into
                A Creative Innovation
                </h1>
                <Link to='/contact'><Button title="Get In Touch" /></Link>
          </div>
    </div>
  )
}

export default Transform