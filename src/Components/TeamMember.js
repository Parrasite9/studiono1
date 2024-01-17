import '../CSS/TeamMember.css'
import React from 'react'

// REDUX 
import { useSelector } from 'react-redux'

// REACT ROUTER 
import { useLocation, useParams } from 'react-router-dom'

// COMPONENTS 
import Navbar from './Global_Components/Navbar'
import Footer from './Global_Components/Footer'


function TeamMember() {

  const teamMemberData = useSelector(state => state.teamMember.teamMemberData)

  // THIS IS THE ID FROM THE URL 
  const { id } = useParams()
  const location = useLocation()
  const { name, image, bio, bookingLink } = location.state || {}
  console.log(location.state);

  return (
    <>
    <Navbar />
    
    <div className='TeamMember'>
      <h2>This page is for {teamMemberData.name}</h2>
      <img src={teamMemberData.image} alt={teamMemberData.name} />
      <p>{teamMemberData.bio}</p>
      <a href={teamMemberData.bookingLink} target='_blank' rel="noopener noreferrer"><button>Book a Service</button></a>
    </div>

    <Footer />

    </>
  )
}

export default TeamMember
