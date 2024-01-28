import '../CSS/ContactUs.css'
import Navbar from './Global_Components/Navbar'
import Footer from './Global_Components/Footer'

// MUI ICONS 
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import PublicIcon from '@mui/icons-material/Public';

// EMAILJS 
import emailjs from 'emailjs-com'

function ContactUs() {

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_xmakkyh', 'template_v7eovxp', e.target, 'C1NQS6PIhSTNngfAj')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
  };

  return (
    <>
      <div className='ContactUs'>
        <Navbar />
        <div className="contactUs__container">
          <div className="contact__form__container">
            <form className='contact__form' onSubmit={sendEmail}>
              <h2>Contact Us</h2>
              <input type="text" id='name' name='name' placeholder='Name' required/>

              <input type="email" id='email' name='email'placeholder='Email' required />

              <input type="text" id='subject' name='subject' placeholder='Subject' required />
              
              <textarea name="message" id="message" cols="30" rows="10" placeholder='My service was amazing!!' required></textarea>

              <button type='submit'>Submit</button>
            </form>
          </div>


          <div className="contact__info">
            <h3>Contact Information</h3>
            <p>We're open for any suggestions or just to have a chat!</p>

            <div className="icon__and__text">
              <LocationOnIcon />
              <p><strong>Address: </strong>107 W Hornbeck Blvd. Fort Stockton, TX 79735</p>
            </div>

            <div className="icon__and__text">
              <LocalPhoneIcon />
              <p><strong>Phone: </strong>888-888-8888</p>
            </div>

            <div className="icon__and__text">
              <EmailIcon />
              <p><strong>Email: </strong>Support@StudioOneFs.com</p>
            </div>

            <div className="icon__and__text">
              <PublicIcon />
              <p><strong>Website: </strong><a href="StudioOneFs.com">StudioOneFs.com</a></p>
            </div>
          </div>

        </div>
        <Footer />
      </div>
    </>
  )
}

export default ContactUs
