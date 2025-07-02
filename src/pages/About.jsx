

import React from 'react'
import Introduction from '../components/AboutPage/Introduction'
import Aboutus from '../components/AboutPage/Aboutus'
import Mission from '../components/AboutPage/Mission'
import Values from '../components/AboutPage/Values'
import Transform from '../components/Homepage/Transform'
import Meet from '../components/AboutPage/Meet'


const About = () => {
  return (
    <div>
      <Introduction />
      <Aboutus />
      <Mission />
      <Values />
      <Meet />
      <Transform />
    </div>
  )
}

export default About