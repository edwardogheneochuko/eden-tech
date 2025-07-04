import React from 'react'
import landingpage from '../../../public/Images/LandingPage2.png'
import divider from '../../../public/Images/ValuesDivider.png'

const Question = () => {
  const services = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/2a44a6283cb955f0cf5823202471c594654d4742?placeholderIfAbsent=true&apiKey=c1e72e36ef9a4890bcbdc80785b4d488",
      title: "Digital Solutions",
      description:
      'Eden Cloudwave provides software development, web services, cybersecurity solutions, and data analytics to support businesses in their digital transformation'
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/512fa087a000cff6a09a7c54e55c8edbcdc0daa7?placeholderIfAbsent=true&apiKey=c1e72e36ef9a4890bcbdc80785b4d488",
      title: "Technology & Innovation",
      description:
      'We engage in research & development of AI, machine learning, blockchain technologies, offering IT support, training & consulting services'
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/357ab52d408ad3060171935f5f1c92b7cd5bcd63?placeholderIfAbsent=true&apiKey=c1e72e36ef9a4890bcbdc80785b4d488",
      title: "Web design",
      description:
        'Eden Cloudwave designs, develops, & delivers comprehensive cloud services, including IaaS, PaaS, & Saas'
    },
  ]

  return (
    <div className="relative w-full min-h-dvh">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${landingpage})` }}
      ></div>

      <div className="relative z-10 flex flex-col items-center justify-center text-white px-4 md:px-0 py-16">
        {/* Title section */}
        <div className="text-center space-y-4 md:space-y-3 ">
          <h1 className="text-lg md:text-xl">What i do?</h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-balance">Provide next gen. solution</h2>
          <p className="text-sm ">
            Whether you're a top-tier company or just starting out, we'll help you challenge
            mediocrity and develop your next revolutionary idea.
          </p>
        </div>

        {/* Divider */}
        <img src={divider} alt="Divider" 
        className="hidden md:flex mt-8 w-2/4" />

        {/* Services grid */}
        <div className="mt-5 grid gap-6 md:grid-cols-3 md:w-3/4 max-w-7xl">
          {services.map((item, index) => (
           <div
           key={index}
           className="bg-gray-500 bg-opacity-20 rounded-2xl shadow-md backdrop-blur-sm
         p-5 flex flex-col items-left space-y-3 transition-transform hover:-translate-y-1 hover:shadow-lg"
         >
         
         
          
              <img src={item.icon} alt={item.title} 
              className="w-12 h-12" />
              <h3 className="text-lg font-bold text-left">{item.title}</h3>
              <p className="text-sm text-center">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Question
