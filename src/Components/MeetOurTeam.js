import React, { useState } from 'react';
import '../CSS/MeetOurTeam.css'

// MUI
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// REACT ROUTER DOM 
import { Link } from 'react-router-dom';

// REDUX 
import { useDispatch } from 'react-redux';
import { setTeamMemberData } from '../Redux/Reducers/TeamMemberReducer'

function MeetOurTeam() {

  const dispatch = useDispatch()

  const handleTeamMemberClick = (teamMember) => {
    dispatch(setTeamMemberData(teamMember))
  }

  // State to track the currently expanded panel
  const [expanded, setExpanded] = useState('panel1'); // Default to first panel

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className='MeetOurTeam'>
      <div className='accordion__container'>

        {/* FIRST PANEL  */}
        <Accordion 
          expanded={expanded === 'panel1'} 
          onChange={handleChange('panel1')}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
            className='panel-header'
          >
            <Typography>Barbers & HairStylists</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget. */}

              <div className="barber__and__stylist__container">

                {/* YARA L. || INDIVIDUAL STYLIST  */}
                <div className="stylist__icon" 
                    onClick={() => handleTeamMemberClick({
                    name: 'Yara L.',
                    title: 'Salon Owner | Barber | Hair Stylist | Makeup Artist',
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
                        photo1: '/images/allison/gallery/a1.jpeg',
                        photo2: '/images/allison/gallery/a2.jpeg',
                        photo3: '/images/allison/gallery/a3.jpeg',
                        photo4: '/images/allison/gallery/a4.jpeg',
                        photo5: '/images/allison/gallery/a5.jpeg',
                        photo6: '/images/allison/gallery/a6.jpeg',
                        photo7: '/images/allison/gallery/a7.jpeg',
                        photo8: '/images/allison/gallery/a8.jpeg',
                        photo9: '/images/allison/gallery/a9.jpeg',
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
                })}>
                    <Link to='/meet-our-team/yara-l'>
                        <img className='personal__img' src="/images/yara_l/pro-photo/yara.png" alt="" />
                    </Link>
                    <p>Yara L.</p>
                </div>

                {/* ALLISON || INDIVIDUAL STYLIST  */}
                <div className="stylist__icon"
                    onClick={() => handleTeamMemberClick({
                        name: 'Allison',
                        title: 'Hair Stylist | Makeup Artist',
                        image: '/images/allison.png',
                        desktopBio: {
                                paragraph1: "1",
                                paragraph2: "2",
                                paragraph3: "3"    
                        },
                        mobileBio: {          
                            paragraph1: `Meet Allison, this is her Bio...`
                        },
                        gallery: {
                            photo1: '/images/allison/gallery/a2.jpeg',
                            photo2: '/images/allison/gallery/a3.jpeg',
                            photo3: '/images/allison/gallery/a4.jpeg',
                            photo4: '/images/allison/gallery/a5.jpeg',
                            photo5: '/images/allison/gallery/a6.jpeg',
                            photo6: '/images/allison/gallery/a6.jpeg',
                            photo7: '/images/allison/gallery/a2.jpeg',
                            photo8: '/images/allison/gallery/a1.jpeg',
                            photo9: '/images/allison/gallery/a3.jpeg',
                        },
                        bookingLink: 'http://www.yahoo.com',
                        contactInfo: '888-888-8888'
                    })}> 
                    <Link to={'/meet-our-team/allison'}>
                        <img className='personal__img' src="/images/allison/pro-photo/allison.png" alt="" />                                  
                    </Link> 
                    <p>Allison</p>
                </div>

                {/* Clara || INDIVIDUAL STYLIST  */}
                <div className="stylist__icon"
                    onClick={() => handleTeamMemberClick({
                        name: 'JANE DOE 1',
                        title: 'Hair Stylist | Makeup Artist',
                        image: '/images/b.png',
                        desktopBio: {
                                paragraph1: "1",
                                paragraph2: "2",
                                paragraph3: "3"    
                        },
                        mobileBio: {          
                            paragraph1: `Meet Clara, this is her Bio...`
                        },
                        gallery: {
                            photo1: '/images/allison/gallery/a2.jpeg',
                            photo2: '/images/allison/gallery/a3.jpeg',
                            photo3: '/images/allison/gallery/a4.jpeg',
                            photo4: '/images/allison/gallery/a5.jpeg',
                            photo5: '/images/allison/gallery/a6.jpeg',
                            photo6: '/images/allison/gallery/a6.jpeg',
                            photo7: '/images/allison/gallery/a2.jpeg',
                            photo8: '/images/allison/gallery/a1.jpeg',
                            photo9: '/images/allison/gallery/a3.jpeg',
                        },
                        bookingLink: 'http://www.yahoo.com',
                        contactInfo: '888-888-8888'
                    })}> 
                    <Link to={'/meet-our-team/janedoe1'}>
                        <img className='personal__img' src="/images/clara/pro-photo/clara.png" alt="" />                         
                    </Link> 
                    <p>Jane Doe</p>
                </div>

                {/* LEO || INDIVIDUAL STYLIST  */}
                <div className="stylist__icon"
                    onClick={() => handleTeamMemberClick({
                        name: 'Leo',
                        title: 'Hair Stylist | Makeup Artist',
                        image: '/images/c.png',
                        desktopBio: {
                                paragraph1: "1",
                                paragraph2: "2",
                                paragraph3: "3"    
                        },
                        mobileBio: {          
                            paragraph1: `Meet Leo, this is her Bio...`
                        },
                        gallery: {
                            photo1: '/images/allison/gallery/a2.jpeg',
                            photo2: '/images/allison/gallery/a3.jpeg',
                            photo3: '/images/allison/gallery/a4.jpeg',
                            photo4: '/images/allison/gallery/a5.jpeg',
                            photo5: '/images/allison/gallery/a6.jpeg',
                            photo6: '/images/allison/gallery/a6.jpeg',
                            photo7: '/images/allison/gallery/a2.jpeg',
                            photo8: '/images/allison/gallery/a1.jpeg',
                            photo9: '/images/allison/gallery/a3.jpeg',
                        },
                        bookingLink: 'http://www.yahoo.com',
                        contactInfo: '888-888-8888'
                    })}> 
                    <Link to={'/meet-our-team/janedoe2'}>
                        <img className='personal__img' src="/images/leo/pro-photo/leo.png" alt="" /> 
                    </Link> 
                    <p>Jane Doe</p>
                </div>

                {/* CRYSTAL || INDIVIDUAL STYLIST  */}
                <div className="stylist__icon"
                    onClick={() => handleTeamMemberClick({
                        name: 'Crystal',
                        title: 'Barber | Hair Stylist | Makeup Artist',
                        image: '/images/crystal.png',
                        desktopBio: {
                                paragraph1: "1",
                                paragraph2: "2",
                                paragraph3: "3"    
                        },
                        mobileBio: {          
                            paragraph1: `Meet Crystal, this is her Bio...`
                        },
                        gallery: {
                            photo1: '/images/allison/gallery/a2.jpeg',
                            photo2: '/images/allison/gallery/a3.jpeg',
                            photo3: '/images/allison/gallery/a4.jpeg',
                            photo4: '/images/allison/gallery/a5.jpeg',
                            photo5: '/images/allison/gallery/a6.jpeg',
                            photo6: '/images/allison/gallery/a6.jpeg',
                            photo7: '/images/allison/gallery/a2.jpeg',
                            photo8: '/images/allison/gallery/a1.jpeg',
                            photo9: '/images/allison/gallery/a3.jpeg',
                        },
                        bookingLink: 'http://www.yahoo.com',
                        contactInfo: '888-888-8888'
                    })}> 
                    <Link to={'/meet-our-team/crystal'}>
                        <img className='personal__img' src="/images/crystal/pro-photo/crystal.png" alt="" />
                    </Link> 
                    <p>Crystal</p>
                </div>

                {/* RUBY || INDIVIDUAL STYLIST  */}
                <div className="stylist__icon"
                    onClick={() => handleTeamMemberClick({
                        name: 'Ruby',
                        title: 'Hair Stylist | Makeup Artist',
                        image: '/images/ruby.png',
                        desktopBio: {
                                paragraph1: "1",
                                paragraph2: "2",
                                paragraph3: "3"    
                        },
                        mobileBio: {          
                            paragraph1: `Meet Allison, this is her Bio...`
                        },
                        gallery: {
                            photo1: '/images/allison/gallery/a2.jpeg',
                            photo2: '/images/allison/gallery/a3.jpeg',
                            photo3: '/images/allison/gallery/a4.jpeg',
                            photo4: '/images/allison/gallery/a5.jpeg',
                            photo5: '/images/allison/gallery/a6.jpeg',
                            photo6: '/images/allison/gallery/a6.jpeg',
                            photo7: '/images/allison/gallery/a2.jpeg',
                            photo8: '/images/allison/gallery/a1.jpeg',
                            photo9: '/images/allison/gallery/a3.jpeg',
                        },
                        bookingLink: 'http://www.yahoo.com',
                        contactInfo: '888-888-8888'
                    })}> 
                    <Link to={'/meet-our-team/ruby'}>
                        <img className='personal__img' src="/images/ruby/pro-photo/ruby.png" alt="" />
                    </Link> 
                    <p>Ruby</p>
                </div>

                {/* YARA C. || INDIVIDUAL STYLIST  */}
                <div className="stylist__icon"
                    onClick={() => handleTeamMemberClick({
                        name: 'Yara C.',
                        title: 'Barber | Hair Stylist | Makeup Artist',
                        image: '/images/y2.png',
                        desktopBio: {
                                paragraph1: "1",
                                paragraph2: "2",
                                paragraph3: "3"    
                        },
                        mobileBio: {          
                            paragraph1: `Meet Yara C., this is her Bio...`
                        },
                        gallery: {
                            photo1: '/images/allison/gallery/a2.jpeg',
                            photo2: '/images/allison/gallery/a3.jpeg',
                            photo3: '/images/allison/gallery/a4.jpeg',
                            photo4: '/images/allison/gallery/a5.jpeg',
                            photo5: '/images/allison/gallery/a6.jpeg',
                            photo6: '/images/allison/gallery/a6.jpeg',
                            photo7: '/images/allison/gallery/a2.jpeg',
                            photo8: '/images/allison/gallery/a1.jpeg',
                            photo9: '/images/allison/gallery/a3.jpeg',
                        },
                        bookingLink: 'http://www.yahoo.com',
                        contactInfo: '888-888-8888'
                    })}> 
                    <Link to={'/meet-our-team/yara-c'}>
                        <img className='personal__img' src="/images/yara_c/pro-photo/y2.png" alt="" />
                    </Link> 
                    <p>Yara C.</p>
                </div>

                {/* DALETH || INDIVIDUAL STYLIST  */}
                <div className="stylist__icon"
                    onClick={() => handleTeamMemberClick({
                        name: 'Daleth',
                        title: 'Hair Stylist | Makeup Artist',
                        image: '/images/daleth/pro-photo/daleth.png',
                        desktopBio: {
                                paragraph1: "1",
                                paragraph2: "2",
                                paragraph3: "3"    
                        },
                        mobileBio: {          
                            paragraph1: `Meet Rajani, this is her Bio...`
                        },
                        gallery: {
                            photo1: '/images/allison/gallery/a2.jpeg',
                            photo2: '/images/allison/gallery/a3.jpeg',
                            photo3: '/images/allison/gallery/a4.jpeg',
                            photo4: '/images/allison/gallery/a5.jpeg',
                            photo5: '/images/allison/gallery/a6.jpeg',
                            photo6: '/images/allison/gallery/a6.jpeg',
                            photo7: '/images/allison/gallery/a2.jpeg',
                            photo8: '/images/allison/gallery/a1.jpeg',
                            photo9: '/images/allison/gallery/a3.jpeg',
                        },
                        bookingLink: 'http://www.yahoo.com',
                        contactInfo: '888-888-8888'
                    })}>                    
                    <Link to={'/meet-our-team/rajani'}>
                        <img className='personal__img' src="/images/daleth/pro-photo/daleth.png" alt="daleth" />
                    </Link>
                    <p>Daleth</p>
                </div>

              </div>

            </Typography>
          </AccordionDetails>
        </Accordion>

        {/* SECOND PANEL  */}
        <Accordion 
          expanded={expanded === 'panel2'} 
          onChange={handleChange('panel2')}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
            className='panel-header'
          >
            <Typography>Esthetician</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
                {/* RAJANI || INDIVIDUAL STYLIST  */}
                <div className="stylist__icon"
                    onClick={() => handleTeamMemberClick({
                        name: 'Rajani',
                        title: 'Hair Stylist | Makeup Artist',
                        image: '/images/a.png',
                        desktopBio: {
                                paragraph1: "1",
                                paragraph2: "2",
                                paragraph3: "3"    
                        },
                        mobileBio: {          
                            paragraph1: `Meet Rajani, this is her Bio...`
                        },
                        gallery: {
                            photo1: '/images/allison/gallery/a2.jpeg',
                            photo2: '/images/allison/gallery/a3.jpeg',
                            photo3: '/images/allison/gallery/a4.jpeg',
                            photo4: '/images/allison/gallery/a5.jpeg',
                            photo5: '/images/allison/gallery/a6.jpeg',
                            photo6: '/images/allison/gallery/a6.jpeg',
                            photo7: '/images/allison/gallery/a2.jpeg',
                            photo8: '/images/allison/gallery/a1.jpeg',
                            photo9: '/images/allison/gallery/a3.jpeg',
                        },
                        bookingLink: 'http://www.yahoo.com',
                        contactInfo: '888-888-8888'
                    })}>                    
                    <Link to={'/meet-our-team/rajani'}>
                        <img className='personal__img' src="/images/rajani/pro-photo/rajani.png" alt="" />
                    </Link>
                    <p>Rajani</p>
                </div>            </Typography>
          </AccordionDetails>
        </Accordion>

        {/* THIRD PANEL  */}
        <Accordion 
          expanded={expanded === 'panel3'} 
          onChange={handleChange('panel3')}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3-content"
            id="panel3-header"
            className='panel-header'
          >
            <Typography>Spa Services</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
                <div className="spa__services__container">
                    {/* ROBIN || INDIVIDUAL STYLIST  */}
                    <div className="stylist__icon" 
                        onClick={() => handleTeamMemberClick({
                        name: 'Robin',
                        title: 'Nail Tech | Facials',
                        image: '/images/robin.png',
                        desktopBio: {
                                paragraph1: "1",
                                paragraph2: "2",
                                paragraph3: "3"    
                        },
                        mobileBio: {          
                            paragraph1: `Meet Robin, this is her Bio...`
                        },

                        bookingLink: 'http://www.yahoo.com',
                        contactInfo: '888-888-8888'
                    })}>
                        <Link to='/meet-our-team/robin'>
                            <img className='personal__img' src="/images/robin/pro-photo/robin.png" alt="" />
                        </Link>
                        <p>Robin</p>
                    </div>

                    {/* RAJANI || INDIVIDUAL STYLIST  */}
                    <div className="stylist__icon"
                        onClick={() => handleTeamMemberClick({
                            name: 'Tori',
                            title: 'Massage Therapist',
                            image: '/images/tory.png',
                            desktopBio: {
                                    paragraph1: "1",
                                    paragraph2: "2",
                                    paragraph3: "3"    
                            },
                            mobileBio: {          
                                paragraph1: `Meet Tori, this is her Bio...`
                            },

                            bookingLink: 'http://www.yahoo.com',
                            contactInfo: '888-888-8888'
                        })}>                    
                        <Link to={'/meet-our-team/tori'}>
                            <img className='personal__img' src="/images/tori/pro-photo/tory.png" alt="" />
                        </Link>
                        <p>Tori</p>
                    </div>
                </div>
            </Typography>
          </AccordionDetails>
        </Accordion>

        {/* FOURTH PANEL  */}
        <Accordion 
          expanded={expanded === 'panel4'} 
          onChange={handleChange('panel4')}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4-content"
            id="panel4-header"
            className='panel-header'
          >
            <Typography>Special Services</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget.
            </Typography>
          </AccordionDetails>
        </Accordion>




        {/* Add more accordion items here if needed */}
      </div>
    </div>
  );
}

export default MeetOurTeam;


// gallery: {
//     photo1: 1,
//     photo1: 1,
//     photo1: 1,
//     photo1: 1,
//     photo1: 1,
//     photo1: 1,
//     photo1: 1,
//     photo1: 1,
// },