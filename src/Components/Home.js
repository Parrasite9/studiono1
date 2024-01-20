import '../CSS/Home.css'
import React from 'react'
import Navbar from './Global_Components/Navbar'
import Hero from './HomePage/Hero'
import Footer from './Global_Components/Footer'
import AboutUs from './HomePage/AboutUs'
import MeetOurTeam from './HomePage/MeetOurTeam'
import Services from './HomePage/Services'
import Email from './HomePage/Email'

function Home() {
  return (
    <div className='Home'>
      <Navbar />
      <Hero />
      <MeetOurTeam />

      <AboutUs />
      <Services />
      <Email />
      <Footer />
    </div>
  )
}

export default Home
