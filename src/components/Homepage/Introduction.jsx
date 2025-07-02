import React from 'react'
import landingpage from '../../../public/Images/LandingPage1.png'
import Button from '../../shared/Button'
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { FiExternalLink } from 'react-icons/fi'
import { Link } from 'react-router';
import { BsArrowLeft } from 'react-icons/bs';

const FirstSec = () => {
  const stats = [
    { value: '17+', label: 'satisfied clients' },
    { value: '17+', label: 'completed projects' },
    { value: '1+', label: 'Years In Business' }
  ]

  return (
    <div className="relative flex flex-col justify-center items-start text-left  text-white px-10 py-16 md:pb-40">
      {/* Content */}
      <div className='z-10 space-y-4'>
      <Link to="/fevai" className=' text-sm md:text-base hover:text-amber-400 
      duration-300 flex items-center'> 
        Best financial AI Therapist <BsArrowLeft className='ml-2 text-3xl' />
      </Link>
      <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold leading-tight '>
        Driving <span className='text-yellow-400'>creative innovation</span>
        <br />
        through AI-driven <br /> solution
      </h1>
      <div className='mb-8 max-w-2xl text-gray-300 flex sm:ml-10 '>
      <MdOutlineArrowRightAlt className='mr-2 text-6xl -mt-4'/> We're a leading-edge cloud computing company focused on harnessing
      the power of artificial intelligence to revolutionize business operations.
      </div>
      <div className='ml-5 sm:ml-18 md:ml-22'>
        <Button title='Get in Touch' />
      </div>
      <div>
        {/* Stats box */}
        <div className="flex justify-center gap-x-8 
           py-3 rounded-md  md:px-5 md:py-10 md:absolute md:right-10 bottom-6
           shadow-2xl mt-10 px-4">
            {stats.map((item, index) => (
              <div key={index} >
                <h1 className="text-3xl font-semibold">{item.value}</h1>
                <h2 className="text-sm">{item.label}</h2>
              </div>
            ))}
          </div>
      </div>
      </div>
       {/* Background image */}
       <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${landingpage})` }}></div>
    </div>
  )
}

export default FirstSec

// <MdOutlineArrowRightAlt className='text-9xl ' />