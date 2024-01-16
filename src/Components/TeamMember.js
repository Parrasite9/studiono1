import '../CSS/TeamMember.css'
import React from 'react'
import { useLocation, useParams } from 'react-router-dom'
import Navbar from './Global_Components/Navbar'
import Footer from './Global_Components/Footer'


function TeamMember() {

  // THIS IS THE ID FROM THE URL 
  const { id } = useParams()
  const location = useLocation()
  const { name, image, bio, bookingLink } = location.state || {}
  console.log(location.state);

  return (
    <>
    <Navbar />
    
    <div className='TeamMember'>
      <h2>This page is for {name}</h2>
      <img src={image} alt={id} />
      <p>{bio}</p>
      <a href={bookingLink} target='_blank' rel="noopener noreferrer"><button>Book a Service</button></a>
    </div>

    <Footer />

    </>
  )
}

export default TeamMember
