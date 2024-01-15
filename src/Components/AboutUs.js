import React from 'react'
import { Link } from 'react-router-dom'
import '../CSS/AboutUs.css'

function AboutUs() {
  return (
    <div className='AboutUs'>
      <div className="title__header">
        <h3>About Studio No. 1</h3>
      </div>

      <div className="section__image">
        <img src="images/hero.jpeg" alt="Salon__img" />
      </div>

      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem, possimus qui rerum atque eius, vel deleniti quis exercitationem sequi dolores id eaque, doloremque sit quas.</p>

      <div className="about__button">
        <Link to="/About-Us"><button className='aboutUs__button'>Read More</button></Link>
      </div>


    </div>
  )
}

export default AboutUs
