
import React from 'react'
import landingpage from '../../../public/Images/LandingPage1.png'

const Aboutus = () => {
  const slices = [0, 1, 2, 3, 4, 5] // Number of slices

  return (
    <div className='w-full bg-primary py-20 flex items-center justify-center '>
        <div className=" md:px-0  text-center
        grid md:grid-cols-2 md:items-center md:justify-center md:gap-x-10
         gap-4 text-white">
          <div className='text-left space-y-6 '>
            <div className='px-10'>
            <h1 className='text-lg '>Our story</h1>
            <h2 className='text-2xl md:text-3xl font-bold pt-3'>About 
              <span className='text-yellow-400'> us</span>
            </h2>
              <ul className='text-sm md:text-lg space-y-4 pt-3'>
                <li>Eden Cloudwave Technology is a leading-edge cloud computing company focused on harnessing the power of artificial intelligence to revolutionize business operations.</li>
                <li>We specialize in developing innovative cloud-based platforms that streamline processes, enhance efficiency, and drive substantial growth for organizations of all sizes.</li>
                <li>Our team of skilled AI and Software engineers is dedicated to creating intelligent solutions tailored to specific industry needs. By combining cutting-edge technology with deep industry knowledge, we deliver exceptional results that exceed client expectations.</li>
              </ul>
           </div>
            </div>
           <div>
            <img src={landingpage} alt="" />
           </div>
     </div>
    </div>
  )
}

export default Aboutus