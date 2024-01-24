import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../../CSS/AboutUs.css'

function AboutUs() {

  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 1000);

    useEffect(() => {
        const handleResize = () => {
            setIsLargeScreen(window.innerWidth > 1000);
        };

        // Add event listener
        window.addEventListener('resize', handleResize);

        // Call handler right away so state gets updated with initial window size
        handleResize();

        // Remove event listener on cleanup
        return () => window.removeEventListener('resize', handleResize);
    }, []);

  return (
    <div className='AboutUs'>
      <div className="title__header">
        <h3>About Studio No. 1</h3>
      </div>

      <div className="section__image">
        {isLargeScreen ? (
          <>
            <img src="images/about/group_desktop.jpg" alt="Salon__img" />
          </>
        ) : (
          <>
            <img src="images/about/group_home.jpg" alt="Salon__img" />
          </>
        )}
      </div>

      <p>At Studio No. 1, we blend over 100 years of combined expertise in beauty and wellness to offer you an exceptional experience. Our salon, a haven for both men and women, specializes in a variety of services. From rejuvenating massages and skincare treatments by our expert estheticians to luxurious manicures, pedicures, and personalized beauty services, we cater to all your needs in a welcoming and refined environment.</p>

      <div className="about__button">
        <Link to="/About-Us"><button className='aboutUs__button'>Read More</button></Link>
      </div>


    </div>
  )
}

export default AboutUs
