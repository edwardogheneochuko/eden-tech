

import React from 'react'
import Introduction from '../components/Homepage/Introduction'
import Works from '../components/Homepage/Works'
import Question from '../components/Homepage/Question'
import Transform from '../components/Homepage/Transform'

const Home = () => {
  return (
    <div>
       <Introduction />
       <Works />
       <Question />
       <Transform />
    </div>
  )
}

export default Home