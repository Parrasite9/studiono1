import '../CSS/TeamMember.css'
import React from 'react'

// REDUX 
import { useSelector } from 'react-redux'

// COMPONENTS 
import Navbar from './Global_Components/Navbar'
import Footer from './Global_Components/Footer'


function TeamMember() {

  const teamMemberData = useSelector(state => state.teamMember.teamMemberData)


  // Get current time in CST (UTC-6)
  const currentTime = new Date();
  currentTime.setHours(currentTime.getHours() - 6);

  // Check if it's before 6:00 PM CST
  const isBefore6PM = currentTime.getHours() < 18;


  return (
    <>
    <Navbar />
    
    <div className='TeamMember'>
      {/* TEAM MEMBER IMG  */}
      <div className="member__Img">
        <img src={teamMemberData.image} alt={teamMemberData.name} />
      </div>


      {/* TEAM MEMBER NAME  */}
      <div className="member__Name">
        <h2>{teamMemberData.name}</h2>
      </div>

      {/* MEMBER BIO */}
      <div className="member__Bio">
        {/* <p>{teamMemberData.bio.mobile.paragraph4}</p> */}
        <p>{teamMemberData.mobileBio.paragraph1}</p>
        {/* <p>{teamMemberData.bio.paragraph3}</p> */}
      </div>

      {/* BUTTON CONTAINER  */}
      <div className="button__Container">
        {/* CONTACT INFO  */}
        <div className="member__Contact">
          {!isBefore6PM ? (
            <>
              <a href={`tel:${teamMemberData.contactInfo}`} className="button-style"><button>Call Me</button></a>
            </>
          ) : (
            <>
              <a href={`sms:${teamMemberData.contactInfo}`} className="button-style"><button>Text Me</button></a>
            </>
          )}
        </div>
        <a href={teamMemberData.bookingLink} target='_blank' rel="noopener noreferrer"><button>Book a Service</button></a>
      </div>

      </div>

    <Footer />

    </>
  )
}

export default TeamMember
