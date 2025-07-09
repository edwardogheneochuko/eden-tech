import React, { useState, useRef, useEffect } from 'react'
import { BiMenu } from 'react-icons/bi'
import { CgClose } from 'react-icons/cg'
import { Link } from 'react-router'
import { motion, AnimatePresence } from 'framer-motion'
import Button from '../shared/Button'
import inshot from '../../public/Images/inshot.png'

const Navbar = () => {
  const navStyles = 'hover:text-amber-300 duration-300  text-sm md:text-base text-white'
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  return (
    <nav className='z-40 py-5 bg-neutral-900 sticky top-0 w-full'>
      <div className='flex justify-between mx-auto px-10'>
        <div className='hidden sm:flex items-center space-x-5'>
          <Link to="/" className={`relative group ${navStyles}`}>
            Home
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-amber-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </Link>
          <Link to="/about" className={`relative group ${navStyles}`}>
            About us
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-amber-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </Link>
        </div>
        <div>
          <img
            src={inshot}
            className="h-12 mr-2"
            alt="Eden Cloudwave Logo"
          />
        </div>
        <div className='hidden sm:flex space-x-7 items-center'>
          <Link to='/contact'><Button title="Contact us" /></Link>
        </div>
        <div
          className='sm:hidden text-white text-4xl flex items-center cursor-pointer'
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <CgClose /> : <BiMenu />}
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={menuRef}
            key="mobileMenu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className='flex sm:hidden absolute top-full border-b-4 border-gray-200
             left-0 w-full bg-primary flex-col text-center
              gap-y-5 p-5 z-50'
          >
            <Link to="/" className={`${navStyles} border-b pb-3`}>Home</Link>
            <Link to="/about" className={`${navStyles} border-b pb-3 `}>About</Link>
            <Link to="/contact" className={`${navStyles} border-b pb-3`}>Contact</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar
