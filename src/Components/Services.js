import '../CSS/Services.css'
import React from 'react'

function Services() {
  return (
    <div className='Services'>
      <div className="service__section">

        {/* LEFT SERVICE | BEAUTY SERVICE */}
        <div className="service__left service">
          <img src="" alt="" />
          <h2>Personalized Beauty Services</h2>
          <p>Embrace your individuality with our bespoke beauty services. 
            This includes hair styling, makeup, and other aesthetic treatments, 
            each tailored by our team members to reflect your personal style and 
            preferences.</p>
        </div>

        {/* RIGHT SERVICE | BARBER */}
        <div className="service__right service">
          <img src="/images/services/barber.jpg" alt="barber" />
          <h2>Men's Grooming</h2>
          <p>Our services for men range from haircuts and styling to grooming treatments, 
            all designed to enhance your personal style and ensure you look and feel great.</p>
        </div>

        {/* LEFT SERVICE | MANI/PEDI  */}
        <div className="service__left service">
          <img src="/images/services/pedi.jpg" alt="" />
          <h2> Manicures and Pedicures</h2>
          <p>Indulge in our nail services where beauty meets relaxation. From 
            classic manicures to luxurious spa pedicures, our nail experts use 
            the finest products to ensure your hands and feet look and feel 
            their best.</p>
        </div>

        {/* RIGHT SERVICE | FACIALS  */}
        <div className="service__right service">
          <img src="/images/services/facials.jpg" alt="facials" />
          <h2>Skincare and Facials</h2>
          <p>Our estheticians are artisans of the skin. Delight in our range of 
            facial treatments, from hydrating to anti-aging, each designed to 
            enhance your natural beauty and promote glowing, healthy skin.</p>
        </div>

        {/* LEFT SERVICE | MASSAGE */}
        <div className="service__left service">
          <img src="/images/services/massage.jpg" alt="massage" />
          <h2>Massage Therapy</h2>
          <p>Surrender to the healing touch of our skilled massage therapists. 
            Whether it's a deep tissue massage to relieve tension or a soothing 
            Swedish massage for relaxation, each session is a journey towards 
            tranquility and rejuvenation.</p>
        </div>

        {/* RIGHT SERVICE | BODY SCULPTING */}
        <div className="service__right service">
          <img src="/images/services/body.jpg" alt="massage" />
          <h2>Body Scultiping</h2>
          <p>At Studio No. 1, we're excited to offer cutting-edge body sculpting 
            services, designed to refine and enhance your natural contours. Our skilled 
            professionals use the latest techniques and technologies to deliver 
            personalized treatments that target your specific needs. Whether it's 
            toning, contouring, or cellulite reduction, our non-invasive procedures 
            provide a safe and effective way to achieve your body goals. Experience a 
            new level of confidence and embrace a rejuvenated self with our bespoke body 
            sculpting services.</p>
        </div>

        {/* LEFT SERVICE | SPECIAL EVENT */}
        <div className="service__right service">
          <img src="/images/services/wedding.jpg" alt="massage" />
          <h2>Special Events</h2>
          <p>Your special day deserves extraordinary care, and that's exactly 
            what we provide. Our team offers bespoke beauty and grooming services 
            for weddings and special events, ensuring that every bride, groom, and 
            party member looks and feels their absolute best. From elegant hair 
            styling and exquisite makeup to sophisticated grooming for gentlemen, we 
            cater to every detail. With options for group bookings and on-site services, we 
            make your convenience and comfort our top priority. Let us add a touch of Studio No. 1 
            magic to your memorable occasions.</p>
        </div>
      </div>

    </div>
  )
}

export default Services
