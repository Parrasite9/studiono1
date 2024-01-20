import React from 'react'
import Footer from '../Global_Components/Footer'
import Navbar from '../Global_Components/Navbar'

import '../../CSS/AboutPage.css'
function AboutPage() {
  return (
    <div className='AboutPage'>
        <Navbar />

        <div className="image__container">
            <img src="/images/about/group_mobile.jpg" alt="" />
        </div>

        <div className="about__text">

            <h3>About Studio No. 1</h3>

            <p><strong>Welcome to Studio No. 1,</strong>where timeless beauty meets modern elegance. Nestled in the heart of our vibrant city, we're more than just a beauty salon; we're a sanctuary for those seeking to rejuvenate their spirit and revitalize their look.
            <br />
            <br />
            With over a century of combined experience, our team at Studio No. 1 is a tapestry of expertise, passion, and dedication. We pride ourselves on our rich heritage in the beauty industry, seamlessly blending traditional techniques with contemporary styles to offer you an unparalleled beauty experience.</p>

            <p><strong>Our Services: </strong>At Studio No. 1, we understand that beauty is not one-size-fits-all. That's why we offer a comprehensive range of services tailored to meet the unique needs of each client. Our salon caters to both men and women, providing a wide array of beauty and spa services. Indulge in our expertly delivered massages, where our skilled masseuses and massage therapists work to melt away your stress and tension, leaving you refreshed and revitalized. Treat your hands and feet to a luxurious journey with our manicure and pedicure services, designed to pamper and perfect.
            <br />
            <br />
            For those seeking to elevate their skincare routine, our facials are a must-try, incorporating the finest products and techniques to bring out your skin's natural glow. Our estheticians are masters of their craft, offering personalized services that range from skincare consultations to advanced treatments, ensuring your skin receives the care it deserves.
            </p>

            <p><strong>Our Commitment: </strong>At Studio No. 1, your satisfaction is our highest priority. We're committed to providing an environment that is not just welcoming, but also invigorating and inspiring. Our salon is a space where creativity flourishes, and individual beauty is celebrated.
            <br />
            <br />
            Join us at Studio No. 1, where every visit is an opportunity to experience the pinnacle of beauty and relaxation. We're not just a salon; we're your partners in the journey towards a more radiant and confident you.</p>

        </div>
        <Footer />
    </div>
  )
}

export default AboutPage
