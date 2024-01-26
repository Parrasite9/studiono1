import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../../CSS/Hero.css'

function Hero() {

  // SHOWS DESKTOP MENU AS NEEDED 
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 1000)

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 1000);
    };

    // Set up the event listener
    window.addEventListener('resize', handleResize);

    // Call handleResize initially to set the correct state based on the current window size
    handleResize();

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
    <div className='Hero'>
      {isLargeScreen ? (
        <>
        <div className="hero__container">
          <div className="context">
            <h3>Elevate your Style</h3>
            <h1>WHERE BEAUTY KNOWS NO BOUNDARIES</h1>
            {/* <Link to='/#Services'><button className='hero__button'>Explore Our Services</button></Link> */}
            <a href="#Services"><button className='hero__button'>Explore Our Services</button></a>
          </div>

          <div className="hero__img">
            <img src="/images/test.png" alt="" />
          </div>
        </div>
        </>
      ) : (
        <>
            <h3>Elevate your Style</h3>
            <h1>WHERE BEAUTY KNOWS NO BOUNDARIES</h1>
            {/* <Link to='/#Services'><button className='hero__button'>Explore Our Services</button></Link> */}
            <a href="#Services"><button className='hero__button'>Explore Our Services</button></a>
        </>
      )}
    </div>
  )
}

export default Hero
