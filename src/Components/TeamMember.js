import '../CSS/TeamMember.css'
import React from 'react'

// REDUX 
import { useSelector } from 'react-redux'

// COMPONENTS 
import Navbar from './Global_Components/Navbar'
import Footer from './Global_Components/Footer'


function TeamMember() {

  const teamMemberData = useSelector(state => state.teamMember.teamMemberData)

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
