import React, { useEffect, useState } from 'react'
import Footer from '../Global_Components/Footer'
import Navbar from '../Global_Components/Navbar'

import '../../CSS/AboutPage.css'
import { Link } from 'react-router-dom';
function AboutPage() {

  // State to determine if the device is mobile based on screen width
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1000);

  // Effect to listen for window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 900);
    };

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <Navbar />

      <div className='AboutPage'>

          {isMobile ? (
              <div className="mobile__image__container">
                  <img src="/images/about/group_mobile.jpg" alt="Group Mobile" />
              </div>
              ) : (
                  <div className="desktop__image__container">
                      <img src="/images/about/group_desk.jpg" alt="Group Desktop" />
                  </div>
              )
            }

          <div className="about__text">

              <h3>About Studio No. 1</h3>

              <p><strong>Welcome to Studio No. 1,</strong> where timeless beauty and modern elegance converge in the heart of our vibrant city. More than just a beauty salon, we are a sanctuary for rejuvenation, offering a blend of traditional and contemporary styles. Our team, with over a century of combined experience, is a tapestry of expertise, passion, and dedication, committed to delivering an unparalleled beauty experience.</p>

              <p><strong>Our Services</strong> are designed to cater to the unique needs of each client, embracing both men and women in our comprehensive range. Indulge in our expertly delivered massages, where skilled masseuses and therapists work to dissolve stress, or pamper your hands and feet with our luxurious manicure and pedicure services. Elevate your skincare routine with our personalized facials, incorporating the finest products and techniques to enhance your natural glow. Our estheticians offer a range of services, from consultations to advanced treatments, ensuring your skin is cared for exquisitely.</p>

              <p><strong>Our Commitment</strong> to your satisfaction is unwavering. Studio No. 1 is not just a salon; it's a place where creativity, individual beauty, and a passion for excellence converge. We strive to create an environment that's not only welcoming but also invigorating and inspiring, ensuring every visit leaves you feeling refreshed and revitalized.</p>

              <p><strong>Join us at Studio No. 1</strong> for an experience that transcends the ordinary. Each visit is an opportunity to immerse yourself in the pinnacle of beauty and relaxation. We're not just your salon; we're your partners on a journey to a more radiant and confident you.</p>
              <Link to="/Book-Now"><button>Book Now</button></Link>

          </div>
      </div>

      <Footer />
    </>
  )
}

export default AboutPage
