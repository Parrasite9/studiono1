import '../CSS/Home.css'
import React from 'react'
import Navbar from './Global_Components/Navbar'
import Hero from './Hero'
import Footer from './Global_Components/Footer'

function Home() {
  return (
    <div className='Home'>
      <Navbar />
      <Hero />

      <Footer />
    </div>
  )
}

export default Home
