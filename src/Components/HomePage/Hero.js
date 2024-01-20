import React from 'react'
import { Link } from 'react-router-dom'
import '../../CSS/Hero.css'

function Hero() {
  return (
    <div className='Hero'>
      <h3>Elevate your Style</h3>
      <h1>WHERE BEAUTY KNOWS NO BOUNDARIES</h1>
      {/* <Link to='/#Services'><button className='hero__button'>Explore Our Services</button></Link> */}
      <a href="#Services"><button className='hero__button'>Explore Our Services</button></a>
</div>
  )
}

export default Hero
