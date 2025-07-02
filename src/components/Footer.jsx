import React from 'react'
import Button from '../shared/Button'
import { ImInstagram } from 'react-icons/im'
import { BsTwitter } from 'react-icons/bs'
import { LiaLinkedin } from 'react-icons/lia'
import { CiLinkedin } from 'react-icons/ci'

const Footer = () => {
    const listStyles = "hover:text-yellow-400 transition-colors cursor-pointer"
    const iconStyles = "w-5 h-5 hover:text-yellow-400 transition-colors cursor-pointer"
  return (
    <footer className="w-full bg-neutral-900 text-white">
      {/* Top section */}
      <div className=" mx-auto px-10 py-16 md:py-24 grid gap-10 md:grid-cols-3">

        {/* Company section */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold ">Company</h3>
          <ul className="space-y-2 text-sm">
            <li className={listStyles}>Home</li>
            <li className={listStyles}>Contact</li>
            <li className={listStyles}>About</li>
          </ul>
          <h4 className=" mt-6 ">Follow us</h4>
          <p className="text-xs text-neutral-200">Stay updated by following us on social media</p>
          <div className="flex gap-4 mt-2">
            <ImInstagram className={iconStyles} />
            <BsTwitter className={iconStyles} />
            <CiLinkedin className={iconStyles} />
          </div>
        </div>

        {/* Contact section */}
        <div className="">
          <h3 className="text-lg mb-2">Get In Touch</h3>
          <p className="text-sm underline mb-4">+(234) 902-5733-0919</p>
          <p className="text-sm underline">edencloudwavetechnology@gmail.com</p>

          <h1 className='font-semibold sm:mt-20 mb-3'>Address</h1>
          <p className='text-sm underline'>Number 3 Dhaka Street, Beachwood Park Estate, LakoweGold Road,
            Ibeju-Lekki, Lagos State
          </p>
        </div>

        {/* Subscription section */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold ">
            Stay in loop with Eden Cloudwave</h3>
          <p className="text-sm text-neutral-200">
            Be the first to get the latest news, updates, and offers we’re bringing to the market.
          </p>
          <form className="flex flex-col gap-y-2">
            <input
              type="email"
              placeholder="Enter Email Address"
              className="flex-1 py-3 px-3  border border-gray-50
              rounded-md text-white focus:outline-none text-sm"
            />
            <span className='max-w-2xl'>
            <Button title="Subscribe" />
            </span>
          </form>
          <p className="text-sm">
            By subscribing, you agree to our Privacy Policy and consent to 
            receive updates.
          </p>
        </div>
      </div>

      {/* Bottom bar */}
<div className="border-t border-white/10 text-xs text-neutral-50 mx-3 py-2">
  <div className="flex justify-center md:justify-end gap-4 md:pr-5 mb-1">
    <span className={`${listStyles} underline`}>Privacy Policy</span>
    <span className={`${listStyles} underline`}>Terms & Conditions</span>
    <span className={`${listStyles} underline`}>Cookies Settings</span>
  </div>
  <p className="text-center py-5">
    &copy; {new Date().getFullYear()} Eden Cloudwave. All rights reserved.
  </p>
</div>

    </footer>
  )
}

export default Footer
