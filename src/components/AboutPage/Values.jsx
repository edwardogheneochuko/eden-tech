import React from 'react'
import ValueBg from '../../../public/Images/ValuesBgImage.png'

const Values = () => {
  const cardStyles =
    'rounded-xl bg-gray/10 backdrop-blur-md border border-white/20 shadow-lg space-y-2 px-8 py-6 md:px-20 md:py-10'

  return (
    <div className="relative w-full min-h-[90vh]">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${ValueBg})` }}
      ></div>

      {/* Heading */}
      <div className="text-white flex items-center justify-center z-10 relative pt-20 flex-col gap-y-3">
        <h1 className="font-semibold text-4xl">Our values</h1>
        <h2 className="text-sm">Core values we believe in</h2>
      </div>

      {/* Cards */}
      <div className="relative z-10 flex flex-col md:flex-row items-center 
      justify-center mx-4 md:mx-10 text-white py-10 gap-4 md:gap-0">
        <div className={cardStyles}>
          <h1 className="font-semibold text-xl">Sustainability</h1>
          <p className="text-sm">Committing to environmental responsibility</p>
        </div>

        <div className={`${cardStyles} px-16 md:-ml-10 md:mt-20`}>
          <h1 className="font-semibold text-xl">Customer Focus</h1>
          <p className="text-sm">Prioritizing customer satisfaction</p>
        </div>

        <div className={`${cardStyles} md:-ml-5`}>
          <h1 className="font-semibold text-xl">Transparency Process</h1>
          <p className="text-sm">Ensuring clarity and honesty in all processes</p>
        </div>

        <div className={`${cardStyles} md:-ml-5 md:mt-26`}>
          <h1 className="font-semibold text-xl">Collaboration</h1>
          <p className="text-sm">Fostering teamwork and open communication</p>
        </div>
      </div>
    </div>
  )
}

export default Values
