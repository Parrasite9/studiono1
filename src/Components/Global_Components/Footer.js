import '../../CSS/Global_Components/Footer.css'
import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='Footer'>
      <div className="logo">
        STUDIO NO. 1
      </div>

      <div className="location">
        <h4 className='footer__header'>Location</h4>
        <h5>107 W Hornbeck Blvd Fort Stockton, TX 79735</h5>
      </div>

      <div className="pages">
          <h4 className='footer__header'>Pages</h4>
          <Link className="footer-link" to="/">Home</Link>
          <Link className="footer-link" to="/AboutUs">About Us</Link>
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
      </div>

      <div className="payment">
        <h4 className='footer__header'>Acceptable Forms of Payment</h4>
      </div>

      <div className="copyright">
        <p>© 2024 Studio No. 1. All Rights Reserved.</p>
      </div>
      
    </div>
  )
}

export default Footer
