import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import '../../CSS/DeskTeam.css';
import { setTeamMemberData } from '../../Redux/Reducers/TeamMemberReducer'


function DesktopTeam() {
  const [activeButton, setActiveButton] = useState('Barbers & Beauticians');
  const dispatch = useDispatch();

  const handleTeamMemberClick = (teamMember) => {
    dispatch(setTeamMemberData(teamMember));
  };
  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  const barberTeamMembers = [
    {
        name: 'Yara L.',
        personal__img: '/images/yara_l/pro-photo/yara.png',
        title: 'Salon Owner | Beautician | Men Services | Makeup Artist | Child Friendly',
        image: '/images/yara_l/pro-photo/y_hero.jpeg',
        desktopBio: {
                paragraph1: "Meet Yara, the dynamic and passionate owner of Studio No. 1, a vibrant salon that has been redefining style and elegance since its inception in 2021. With a decade of experience in the beauty industry, Yara brings a wealth of knowledge, skill, and creativity to the salon floor. Her journey began with a dream to create a space that not only offers top-notch hair and beauty services but also provides a warm, welcoming atmosphere for every client who walks through the doors.",
                paragraph2: "Yara's expertise spans a wide range of services, ensuring that every client need is met with the utmost attention to detail. Whether it's crafting stunning up-dos for weddings, creating memorable looks for birthdays and special events, or providing everyday styling needs like men's, women's, and children's cuts, Yara's precision and flair are evident. Her passion particularly shines in women's services, where she excels in delivering trend-setting balayage, vibrant hair colors, and other bespoke hair treatments that truly reflect each client's personality and style.",
                paragraph3: "Beyond hair services, Yara is also an accomplished makeup artist and waxing specialist, making Studio No. 1 a one-stop destination for complete beauty care. Her vision for the salon goes beyond mere aesthetics; it's about creating a place where clients can relax, rejuvenate, and feel their absolute best. Yara's dedication to excellence, coupled with her warm and approachable demeanor, has earned her a loyal clientele who trust her not just as their stylist but as a confidant and friend."    
        },
        mobileBio: {          
            paragraph1: `Meet Yara, the dynamic owner of Studio No. 1, a stylish salon established in 2021. With over a decade in the beauty industry, Yara offers an array of services, specializing in hair and makeup. Her salon is renowned for eye-catching haircuts, innovative baleyage, and vivid hair colors, catering to men, women, and children. As a skilled makeup artist and waxing specialist, Yara ensures Studio No. 1 is a one-stop destination for all beauty needs. Her approach goes beyond aesthetics; she creates a welcoming, rejuvenating space where clients feel valued and beautiful. Known for her warm personality, Yara has built a loyal clientele who see her as both a talented stylist and a trusted confidante.`
        },
        gallery: {
            photo1: '/images/yara_l/gallery/y1.png',
            photo2: '/images/yara_l/gallery/y2.png',
            photo3: '/images/yara_l/gallery/y3.png',
            photo4: '/images/yara_l/gallery/y4.png',
            photo5: '/images/yara_l/gallery/y5.png',
            photo6: '/images/yara_l/gallery/y6.png',
            photo7: '/images/yara_l/gallery/y4.png',
            photo8: '/images/yara_l/gallery/y3.png',
            photo9: '/images/yara_l/gallery/y2.png',
        },
        bookingLink: 'http://www.yahoo.com',
        contactInfo: '432-290-6756',
        services: {
            test: 'hello',
            womens: {
                haircut: 'Haircut',
                haircutPrice: 'XX',
                balyage: 'Balyage',
                balyagePrice: 'XX',
                waxing: 'Waxing',
                waxingPrice: 'XX',
                color: 'Hair Color',
                colorPrice: 'FC',
                highlights: 'Highlights',
                highlightsPrice: 'FC',
                rootTouchUp: 'Root Touch-Ups',
                rootTouchUpPrice: 'XX',
                perm: 'Perm',
                permPrice: 'XX',
                relaxer: 'Relaxer',
                relaxerPrice: 'XX',
                whiteout: 'White Out',
                whiteoutPrice: 'FC',
            }
        }

    }
  ]

  return (
    <div className='DesktopTeam'>
      <div className="category__container">
        <button 
          style={{ 
            opacity: activeButton === 'Barbers & Beauticians' ? '1' : '0.5',
            color: activeButton === 'Barbers & Beauticians' ? '#ffd700' : '#f2f2f2'
          }}
          onClick={() => handleButtonClick('Barbers & Beauticians')}
        >
          Barbers & Beauticians
        </button>
        <button 
          style={{ 
            opacity: activeButton === 'Spa Services' ? '1' : '0.5',
            color: activeButton === 'Spa Services' ? '#ffd700' : '#f2f2f2'
          }}
          onClick={() => handleButtonClick('Spa Services')}
        >
          Spa Services
        </button>
        <button 
          style={{ 
            opacity: activeButton === 'Special Services' ? '1' : '0.5',
            color: activeButton === 'Special Services' ? '#ffd700' : '#f2f2f2'
          }}
          onClick={() => handleButtonClick('Special Services')}
        >
          Special Services
        </button>
      </div>


      <div className="barber__TeamMembers">
        {activeButton === 'Barbers & Beauticians' && barberTeamMembers.map((member, index) => (
            <div key={index} className="stylist__icon" onClick={() => handleTeamMemberClick(member)}>
            <Link to={`/meet-our-team/${member.name.toLowerCase().replace(/\s/g, '-')}`}>
                <img className='personal__img' src={member.personal__img} alt={member.name} />
            </Link>
            <p>{member.name}</p>
            </div>
      ))}
</div>


    </div>
  );
}

export default DesktopTeam;
