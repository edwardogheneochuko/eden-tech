import React from 'react'
import landingpage from '../../../public/Images/AboutImg1.png'

const Introduction = () => {
  return (
    <div className="relative w-full min-h-[60vh] flex items-center justify-center">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${landingpage})` }}
      ></div>

      {/* Overlay content */}
      <div className="relative z-10 mx-4 text-center text-white rounded-2xl px-10">
        <p className="text-lg md:text-2xl leading-relaxed font-serif font-semibold">
          As a company committed to <span className='text-yellow-400'>innovation</span>, 
          we invest heavily in <span className='text-yellow-400'> research and development</span> to 
          stay at the forefront of technological advancements. Our 
          <span className='text-yellow-400'> collaborative</span> culture fosters a 
          creative environment where <span className='text-secondary'>collaborative </span> 
         <span className='text-yellow-400'> groundbreaking ideas </span> can flourish.
        </p>
      </div>
    </div>
  )
}

export default Introduction
