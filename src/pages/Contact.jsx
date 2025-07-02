import React from 'react'
import Arrow from '../../public/Images/Arrow.png'
import Button from '../shared/Button'

const Contact = () => {
  const inputStyles = 'border border-white/20 bg-transparent py-3 px-2 rounded-md placeholder-white focus:outline-none focus:border-secondary'

  return (
    <div className='bg-neutral-900 text-white'>
      <div className='grid md:grid-cols-2 py-20 px-5 md:px-10 gap-10'>

        {/* Left side */}
        <div>
          <h1 className='text-3xl md:text-4xl font-bold'>Ready to get <br /> started?</h1>
          <h2 className='my-5 text-white/80'>Our office hours are within <br /> Mon–Fri 7am–11pm</h2>
          <p className='text-white/70'>...and you can call us on</p>
          <p className='underline mt-1'>+(234) 916-3063-686</p>

          <div className='flex flex-col items-center mt-8'>
            <img src={Arrow} alt="_arrow" className='w-24 md:w-32 lg:w-40' />
            <p className='text-center mt-3 text-sm text-white/80'>
              Share your project requirements here, <br /> we will follow up in 24 hrs.
            </p>
          </div>
        </div>

        {/* Right side */}
        <div className='bg-neutral-700 rounded-md p-5 md:p-10'>
          <h1 className='font-bold text-2xl mb-2'>Contact us</h1>
          <p className='text-white/80'>Please complete all fields and we'll contact you with the right person on our team</p>

          <div className='grid md:grid-cols-2 gap-5 mt-5'>
            <input type="text" className={inputStyles} placeholder='First Name' />
            <input type="text" className={inputStyles} placeholder='Last Name' />
            <input type="email" className={inputStyles} placeholder='Email Address' />
            <input type="tel" className={inputStyles} placeholder='Phone Number' />
          </div>

          <div className='mt-5'>
            <label className="block text-white mb-2">Message</label>
            <textarea
              placeholder="Write your message"
              className="w-full h-40 p-3 border border-white/20 bg-transparent placeholder-white rounded-md focus:outline-none focus:border-secondary resize-none"
            ></textarea>
          </div>

          <div className='mt-5'>
          <button
    type="submit"
    className="w-full bg-yellow-400 text-black  cursor-pointer
    py-3 rounded-md hover:bg-yellow-300 transition-colors">
    Submit
  </button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Contact
