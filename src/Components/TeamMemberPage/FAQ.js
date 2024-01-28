import '../../CSS/FAQ.css'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faScissors } from '@fortawesome/free-solid-svg-icons';

function FAQ() {
  return (
    <div className='FAQ' id='FAQ'>
      <div className="faq__container">
        <div className="header__container">
          <FontAwesomeIcon icon={faScissors} />
          <h2>Frequently Asked Questions</h2>
          <FontAwesomeIcon className='mirror' icon={faScissors} />
        </div>
        <h3>How do I book a service?</h3>
        <p>To book a service, select a team member from our 'Team' page on our website. There you will find detailed information about each team member, including their services and pricing. Once you've made your choice, click the booking link on their page, which will redirect you to a third-party website to complete your booking.</p>

        <h3>Why am I being rerouted to a 3rd party website to book my service?</h3>
        <p>Although our team members work at Studio No. 1, our team members are all independent contractors. With that said, each team member has their own business hours, services, prices, and unique booking ways to book an apointment!</p>


        <h3>Can I book services with multiple team members?</h3>
        <p>Absolutely! Feel free to browse through the profiles of our diverse team members. If you wish to book services with more than one team member, you will need to book separately with each through their individual booking links.</p>

        <h3>What services are offered at the salon/barbershop?</h3>
        <p>Our team members offer a wide range of beauty and barber services. Each team member's page contains a detailed list of the services they offer, along with the prices.</p>

        <h3>Are the prices negotiable?</h3>
        <p>All prices are set by our independent contractors and are typically non-negotiable. However, for specific inquiries or special requests, please contact the team member directly through their provided contact details.</p>

        <h3>What is the cancellation policy?</h3>
        <p>Cancellation policies may vary between team members. Please refer to the information provided on the team member's booking page on the third-party website for their specific cancellation policies.</p>

        <h3>How do I provide feedback about my experience?</h3>
        <p>We value your feedback! You can leave feedback on the third-party booking website after your service. Additionally, feel free to contact us directly through our website with any comments or suggestions.</p>

        <h3>What measures are in place for health and safety?</h3>
        <p>Our salon/barbershop adheres to the highest standards of cleanliness and hygiene. Each independent contractor is responsible for maintaining these standards in their service area. For more specific information, please refer to the individual team member's page.</p>

        <h3>How can I get in touch with a team member directly?</h3>
        <p>Contact information for each team member is available on their personal page on our website. Feel free to reach out to them directly for specific questions or to discuss your service needs.</p>

      </div>
    </div>
  )
}

export default FAQ
