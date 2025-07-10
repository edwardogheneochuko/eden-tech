import React from 'react'
import { FiExternalLink } from 'react-icons/fi'

const Button = ({ title, onClick }) => {
  return (
    <button
  onClick={onClick}
  className="bg-amber-300/80 text-black py-3 px-10 rounded-sm shadow-md hover:bg-amber-500/80 
  transition-colors duration-300 cursor-pointer
  focus:outline-none focus:ring-2 focus:ring-secondary/50 
  w-full sm:w-auto max-w-xs text-sm md:text-base flex items-center justify-center
  text-center"
>
  {title}
  <FiExternalLink className='ml-2'/>
</button>

  )
}

export default Button
