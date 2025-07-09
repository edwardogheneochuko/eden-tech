
import React from 'react'
import { Route, Routes } from 'react-router'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Footer from './components/Footer'
import Contact from './pages/Contact'
import Fevai from './components/Fevai'
import BotpressWebchat from './components/BotpressWebchat'


const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/fevai' element={<Fevai />} />
      </Routes>
      <BotpressWebchat />
      <Footer />
    </div>
  )
}

export default App