import React from 'react'
import BlueLady from '../../../public/Images/BlueLady.png'
import AIimg from '../../../public/Images/AiImage.png'
import AIimage from '../../../public/Images/AiImage1.png'
import FerrisWheel from '../../../public/Images/FerrisWheel.png'

const Mission = () => {
  return (
    <section className="relative w-full bg-black py-10 px-4 md:px-10">
      {/* First section */}
      <div className='flex flex-col gap-4 md:grid md:grid-cols-[2fr_1fr_1fr] md:gap-2'>
        <img src={BlueLady} alt="_blue_lady" className='w-full h-auto md:h-2/3 rounded-lg' />
        <div className='py-6 space-y-4 bg-amber-300 rounded-lg'>
          <h1 className='text-xl md:text-2xl font-semibold px-3'>Our Vision</h1>
          <p className='text-sm md:text-base lg:text-lg px-3'>
            At Eden CloudWave, our vision is to lead Africa’s digital transformation through 
            innovative cloud technologies. With Fevai, our AI-powered personal finance assistant, 
            we aim to empower individuals to make smarter financial decisions — driving financial 
            inclusion and reshaping the future of money management.
          </p>
        </div>
        <img src={FerrisWheel} alt="_wheel" className=' md:w-full h-2/3 rounded-lg' />
      </div>

      {/* Second section */}
      <div className='flex flex-col gap-4 mt-4 md:mt-2 md:grid md:grid-cols-[2fr_2fr_3fr] md:gap-2'>
        <img src={AIimg} alt="_Ai-image" className='w-full h-auto md:h-2/3 rounded-lg' />
        <div className='py-6 space-y-4 bg-blue-400 rounded-lg'>
          <h1 className='text-xl md:text-2xl font-semibold px-3'>Our Vision</h1>
          <p className='text-sm md:text-base lg:text-lg px-3'>
            At Eden CloudWave, our vision is to lead Africa’s digital transformation through 
            innovative cloud technologies. With Fevai, our AI-powered personal finance assistant, 
            we aim to empower individuals to make smarter financial decisions — driving financial 
            inclusion and reshaping the future of money management.
          </p> 
        </div>
        <img src={AIimage} alt="_ai-image" className='w-full h-auto md:h-2/3 rounded-lg' />
      </div>
    </section>
  )
}

export default Mission
