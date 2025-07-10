

import React from 'react'
import Button from '../shared/Button'
import BotpressWebchat from './BotpressWebchat'

const Fevai = () => {
  return (
    <div className='h-dvh bg-neutral-900'>
        <div className='p-10 text-white space-y-5'>
            <h1 className='text-4xl md:text-5xl font-medium'>
                Your AI Companion <br /> for Smarter <br />Money Decisions
            </h1>
            <p>Ask questions. Get answers. <br />
            Control your money effortlessly</p>
            <Button title='Start Chatting Now' />
        </div>
    </div>
  )
}

export default Fevai
