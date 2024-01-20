import '../../CSS/TeamMember.css'
import React, { useEffect, useState } from 'react'

// REDUX 
import { useSelector } from 'react-redux'

// COMPONENTS 
import Navbar from '../Global_Components/Navbar'
import Footer from '../Global_Components/Footer'
import Gallery from './Gallery'

// MUI 
import CallIcon from '@mui/icons-material/Call';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SmsIcon from '@mui/icons-material/Sms';
import Prices from './Prices'

function TeamMember() {

  const teamMemberData = useSelector(state => state.teamMember.teamMemberData)

  const [isMobile, setIsMobile] = useState(window.innerWidth < 900);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 900);
    };

    // Set up event listener for window resize
    window.addEventListener('resize', handleResize);

    // Clean up event listener
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  // Get current time in UTC
  const currentTimeUTC = new Date();

  // Convert UTC time to CST (UTC-6)
  const currentTimeCST = new Date(currentTimeUTC);
  currentTimeCST.setHours(currentTimeCST.getHours() - 6);

  // Check if it's within business hours (8 AM to 6 PM CST)
  const hoursCST = currentTimeCST.getHours();
  const businessHours = hoursCST >= 8 && hoursCST < 18;



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

      {/* TEAM MEMBER TITLE  */}
      <div className="member__Title">
        <h5>{teamMemberData.title}</h5>
      </div>

      {/* MEMBER BIO */}
      <div className="member__Bio">
        {isMobile ? (
              <p>{teamMemberData.mobileBio.paragraph1}</p>
            ) : (
              <>
                <p>{teamMemberData.desktopBio.paragraph1}</p>
                <p>{teamMemberData.desktopBio.paragraph2}</p>
                <p>{teamMemberData.desktopBio.paragraph3}</p>
              </>
          )}
      </div>

      {/* BUTTON CONTAINER  */}
      <div className="button__Container">
        {/* CONTACT INFO  */}
        <div className="member__Contact">
          {businessHours ? (
            <>
              <a href={`tel:${teamMemberData.contactInfo}`} className="button-style">
                <button className='test'>
                  <CallIcon fontSize='small' style={{ marginRight: '10px' }} /> 
                  Call Me
                </button>
              </a>
            </>
          ) : (
            <>
              <a href={`sms:${teamMemberData.contactInfo}`} className="button-style">
                <button>
                  <SmsIcon fontSize='small' style={{ marginRight: '10px' }} />
                  Text Me
                </button>
              </a>
            </>
          )}
        </div>
        <a href={teamMemberData.bookingLink} target='_blank' rel="noopener noreferrer">
          <button>
            <CalendarMonthIcon fontSize='small' style={{ marginRight: '10px' }} />
            Book a Service
          </button>
        </a>
      </div>

      </div>

    <Gallery />

    <Prices /> 

    <Footer />

    </>
  )
}

export default TeamMember
