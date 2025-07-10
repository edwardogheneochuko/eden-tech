import React from 'react';
import landingpage from '../../../public/Images/LandingPage1.png';
import Button from '../../shared/Button';
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { BsArrowLeft } from 'react-icons/bs';
import { Link } from 'react-router'

const FirstSec = () => { 
  const stats = [
    { value: '17+', label: 'Satisfied Clients' },
    { value: '17+', label: 'Completed Projects' },
    { value: '1+', label: 'Years In Business' }
  ];

  return (
    <div className="relative flex flex-col justify-center items-start text-left text-white px-6 py-16 md:pb-40">
      
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${landingpage})` }}
      ></div>

      {/* Content */}
      <div className="relative z-10 space-y-6 max-w-3xl">
        <Link
          to="/fevai"
          className="text-sm md:text-base hover:text-amber-400 duration-300 flex items-center"
        >
          <span className="text-yellow-400">TALK TO FEVAI</span>
          <BsArrowLeft className="ml-2 text-2xl md:text-3xl" />
        </Link>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
          Driving <span className="text-yellow-400">creative innovation</span>
          <br />
          through AI-driven <br /> solutions
        </h1>

        <div className="flex items-start text-gray-300 max-w-2xl">
          <MdOutlineArrowRightAlt className="mr-3 text-5xl md:text-6xl -mt-2" />
          <p>
            We're a leading-edge cloud computing company focused on harnessing
            the power of artificial intelligence to revolutionize business operations.
          </p>
        </div>

        <Link to="/contact" >
          <Button title="Get in Touch" to="/contact" />
        </Link>
      </div>

      {/* Stats box */}
      <div className="relative mt-10 md:absolute md:right-10 bottom-6 shadow-2xl rounded-md px-4 py-3 md:px-6 md:py-6 bg-black/70 backdrop-blur-sm flex justify-center gap-x-8">
        {stats.map((item, index) => (
          <div key={index} className="text-center">
            <h1 className="text-3xl font-semibold">{item.value}</h1>
            <h2 className="text-sm">{item.label}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FirstSec;
