import React from "react";
import Slider from "react-slick";
import '../../CSS/ReactSlick.css'
import '../../CSS/Testimonials.css'

// MUI 
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faScissors } from '@fortawesome/free-solid-svg-icons';

const testimonialSlider = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    arrows: true,
    cssEase: 'linear',
    arrows: false,
  };

  return (
    <div className="ReactSlick">
        <div className="header__container">
          <FontAwesomeIcon className='scissor__icon' icon={faScissors} />
          <h2> Beauty Highlights </h2>
          <FontAwesomeIcon className='mirror scissor__icon' icon={faScissors} />
        </div>
        <Slider {...settings}>

            {/* SLIDE 1  */}
            <div className="testimonial__slide">
                <div>
                    <FormatQuoteIcon />
                    <p>Crystal is my girl!!! Every time 💜</p>
                    <FormatQuoteIcon />
                </div>
                <h4>Anna F.</h4>
            </div>

            {/* SLIDE 2 */}
            <div className="testimonial__slide">
                <div>
                    <FormatQuoteIcon />
                    <p>Brand new salon with many accomodations. Spacious and inviting.</p>
                    <FormatQuoteIcon />
                </div>
                <h4>Tristian B.</h4>
            </div>

            {/* SLIDE 3 */}
            <div className="testimonial__slide">
                <div>
                    <FormatQuoteIcon />
                    <p>Yara is awesome</p>
                    <FormatQuoteIcon />
                </div>
                <h4>Macgallo G.</h4>
            </div>

            {/* SLIDE 4  */}
            <div className="testimonial__slide">
                <div>
                    <FormatQuoteIcon />
                    <p>Ruby is the best!!!</p>
                    <FormatQuoteIcon />
                </div>
                <h4>Elisa D.</h4>
            </div>

            {/* SLIDE 5  */}
            <div className="testimonial__slide">
                <div>
                    <FormatQuoteIcon />
                    <p>Crystal is my girl!!! Every time 💜</p>
                    <FormatQuoteIcon />
                </div>
                <h4>Anna F</h4>
            </div>


            {/* <div>
                <h4>Anna F</h4>
                <p>Crystal is my girl!!! Every time 💜</p>
              <img className="slider__img" src={teamMemberData.gallery.photo6} alt="gallery_img_6" />
            </div>
            <div>
                <h4>Anna F</h4>
                <p>Crystal is my girl!!! Every time 💜</p>
            </div>
            <div>
                <h4>Anna F</h4>
                <p>Crystal is my girl!!! Every time 💜</p>
            </div>
            <div>
                <h4>Anna F</h4>
                <p>Crystal is my girl!!! Every time 💜</p>
            </div> */}
        </Slider>
    </div>
  );
}

export default testimonialSlider;