import '../../CSS/Global_Components/Footer.css'
import React from 'react'
import { Link } from 'react-router-dom'

// FONT AWESOME 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

function Footer() {

  const year = new Date().getFullYear(); // Gets the current year

  return (
    <div className='Footer'>
      <div className="logo">
        <Link to='/'>STUDIO NO. 1</Link>
      </div>

      <div className="link__container">
        <div className="location" >
          <h4 className='footer__header'>Location</h4>
          <h5>107 W Hornbeck Blvd <br /> Fort Stockton, TX <br /> 79735</h5>
        </div>

        <div className="pages">
            <h4 className='footer__header'>Pages</h4>
            <Link className="footer-link" to="/">Home</Link>
            <Link className="footer-link" to="/About-Us">About Us</Link>
            <Link className="footer-link" to="/Services">Services</Link>
            <Link className="footer-link" to="/FAQ">FAQ</Link>
            <Link className="footer-link" to="/ContactUs">Contact Us</Link>
        </div>

        <div className="privacy_and_legal">
            <h4 className='footer__header'>Privacy & Legal</h4>
            <Link className="footer-link" to="/privacy-policy">Privacy Policy</Link>
            <Link className="footer-link" to="/terms-of-service">Terms of Service</Link>
        </div>

        <div className="follow__us">
          <h4 className='footer__header'>Follow Us!</h4>
          <a href="https://www.facebook.com/StudioNo1FS" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook} style={{color: "#1e7ec8", fontSize: "20px"}} /></a>
    </div>
      </div>


      <div className="payment">
        <h4 className='footer__header'>Acceptable Forms of Payment</h4>
        <img src="/images/footer/payment.png" alt="payment" />
      </div>

      <div className="copyright">
        <p>© {year} Studio No. 1. All Rights Reserved.</p>
      </div>
      
    </div>
  )
}

export default Footer