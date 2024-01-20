import '../CSS/Home.css'
import React from 'react'
import Navbar from './Global_Components/Navbar'
import Hero from './Hero'
import Footer from './Global_Components/Footer'
import AboutUs from './AboutUs'
import MeetOurTeam from './MeetOurTeam'
import Services from './Services'

function Home() {
  return (
    <div className='Home'>
      <Navbar />
      <Hero />
      <MeetOurTeam />

      <AboutUs />
      <Services />

      <Footer />
    </div>
  )
}

export default Home
