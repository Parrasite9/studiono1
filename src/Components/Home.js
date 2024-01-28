import '../CSS/Home.css'
import React from 'react'
import Navbar from './Global_Components/Navbar'
import Hero from './HomePage/Hero'
import Footer from './Global_Components/Footer'
import AboutUs from './HomePage/AboutUs'
import MeetOurTeam from './HomePage/MeetOurTeam'
import Services from './HomePage/Services'
import Email from './HomePage/Email'
import Testimonials from './HomePage/Testimonials'
import DesktopTeam from './HomePage/DesktopTeam'
import FAQ from './TeamMemberPage/FAQ'
import Cred from './HomePage/Cred'

function Home() {
  return (
    <div className='Home'>
      <Navbar />
      <Hero />
      <MeetOurTeam />
      <Cred />
      <AboutUs />
      <Services />
      <Email />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  )
}

export default Home
