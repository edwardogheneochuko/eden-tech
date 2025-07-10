import React from 'react'
import { FiExternalLink } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom';

const Button = ({ title, onClick, to }) => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    if (to) {
      navigate(to);  // Use React Router navigation if 'to' prop exists
    } else if (onClick) {
      onClick(e);    // Fall back to custom onClick if provided
    }
  };

  return (
    <button
      onClick={handleClick}
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
