import React from "react";
import Slider from "react-slick";
import { useSelector } from 'react-redux';
import '../../CSS/ReactSlick.css'

const MultipleItems = () => {
  const teamMemberData = useSelector(state => state.teamMember.teamMemberData);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    cssEase: 'linear',
    arrows: false,
  };

  return (
    <div className="ReactSlick">
        <h2> Beauty Highlights </h2>
        <Slider {...settings}>
            <div>
                <img className="slider__img" src={teamMemberData.gallery.photo1} alt="gallery_img_1" />
            </div>
            <div>
                <img className="slider__img" src={teamMemberData.gallery.photo2} alt="gallery_img_2" />
            </div>
            <div>
                <img className="slider__img" src={teamMemberData.gallery.photo3} alt="gallery_img_3" />
            </div>
            <div>
                <img className="slider__img" src={teamMemberData.gallery.photo4} alt="gallery_img_4" />
            </div>
            <div>
                <img className="slider__img" src={teamMemberData.gallery.photo5} alt="gallery_img_5" />
            </div>
            <div>
                <img className="slider__img" src={teamMemberData.gallery.photo6} alt="gallery_img_6" />
            </div>
            <div>
                <img className="slider__img" src={teamMemberData.gallery.photo7} alt="gallery_img_7" />
            </div>
            <div>
                <img className="slider__img" src={teamMemberData.gallery.photo8} alt="gallery_img_8" />
            </div>
            <div>
                <img className="slider__img" src={teamMemberData.gallery.photo9} alt="gallery_img_9" />
            </div>
        </Slider>
    </div>
  );
}

export default MultipleItems;