import React, { useState } from 'react';
import '../../CSS/MeetOurTeam.css'

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
import { setTeamMemberData } from '../../Redux/Reducers/TeamMemberReducer'

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
                <div className="section__text">
                    <p>Select Your Team Member</p>
                </div>
                <div className="employee__icons">
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
                        image: '/images/allison/pro-photo/allison.png',
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
                        contactInfo: '888-888-8888',
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
                    <Link to={'/meet-our-team/allison'}>
                        <img className='personal__img' src="/images/allison/pro-photo/allison.png" alt="" />                                  
                    </Link> 
                    <p>Allison</p>
                </div>

                {/* Clara || INDIVIDUAL STYLIST  */}
                <div className="stylist__icon"
                    onClick={() => handleTeamMemberClick({
                        name: 'Clara',
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
                        contactInfo: '888-888-8888',
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
                    <Link to={'/meet-our-team/janedoe1'}>
                        <img className='personal__img' src="/images/clara/pro-photo/clara.png" alt="" />                         
                    </Link> 
                    <p>Clara</p>
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
                        contactInfo: '888-888-8888',
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
                    <Link to={'/meet-our-team/janedoe2'}>
                        <img className='personal__img' src="/images/leo/pro-photo/leo.png" alt="" /> 
                    </Link> 
                    <p>Leo</p>
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
                        contactInfo: '888-888-8888',
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
                        contactInfo: '888-888-8888',
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
                    <Link to={'/meet-our-team/ruby'}>
                        <img className='personal__img' src="/images/ruby/pro-photo/ruby.png" alt="" />
                    </Link> 
                    <p>Ruby</p>
                </div>

                {/* YARITZA C. || INDIVIDUAL STYLIST  */}
                <div className="stylist__icon"
                    onClick={() => handleTeamMemberClick({
                        name: 'Yara B.',
                        title: 'Barber | Child Friendly',
                        image: '/images/y2.png',
                        desktopBio: {
                                paragraph1: "Meet Yaritza Bislar, a proficient and artistic barber at Studio No. 1, known for her exceptional skill in male grooming and hairstyling. With a rich experience of four years in the industry, Yaritza has honed her expertise in a variety of barbering services. Her specialties include crafting sleek skin fades, classic gentlemen's haircuts, playful and comfortable kids' haircuts, and meticulous beard grooming. Her proficiency with the straight razor for hot facial shaves is particularly noteworthy, making each visit a relaxing and rejuvenating experience.",
                                paragraph2: "Yaritza's approach to barbering is client-centric, focusing on understanding and meeting the individual needs of each customer. She believes that every client deserves a personalized experience, and she excels in customizing her services to suit their unique preferences and styles. Her commitment to her craft is evident in the precision and care she brings to every cut and shave.",
                                paragraph3: "Beyond her technical abilities, Yaritza's warm and welcoming demeanor makes every appointment a pleasant and enjoyable encounter. Her dedication to ensuring client satisfaction resonates in the loyalty of her customers who trust her not only for their grooming needs but also for the friendly and professional atmosphere she creates. Yaritza looks forward to welcoming you to Studio No. 1, where your grooming needs are met with skill, care, and a personal touch."    
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
                        contactInfo: '888-888-8888',
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
                    <Link to={'/meet-our-team/yara-c'}>
                        <img className='personal__img' src="/images/yara_c/pro-photo/y2.png" alt="" />
                    </Link> 
                    <p>Yara C.</p>
                </div>

                {/* DALETH || INDIVIDUAL STYLIST  */}
                <div className="stylist__icon"
                    onClick={() => handleTeamMemberClick({
                        name: 'Daleth',
                        title: 'Barber | Child Friendly',
                        image: '/images/daleth/pro-photo/daleth.png',
                        desktopBio: {
                                paragraph1: "Meet Daleth Vargas, a talented cosmetologist at our salon, known for her exceptional skill and dedication to the art of hair styling. With five years of experience in the beauty industry, Daleth has honed her expertise, specializing in men's and children's haircuts. Her approach to cosmetology blends classic techniques with contemporary style, ensuring each client leaves looking their best.",
                                paragraph2: "Daleth's journey in the world of cosmetology is marked by a passion for bringing out the best in her clients, regardless of their age or style preferences. Her ability to connect with children and make them comfortable during their haircuts is particularly noteworthy. She understands that a haircut can be more than just a routine grooming experience; it's an opportunity to boost confidence and express individuality.",
                                paragraph3: "Clients appreciate Daleth for her friendly demeanor and attentive service. She takes the time to understand each client's needs and preferences, ensuring a personalized and enjoyable salon experience. Whether you're looking for a trendy new look or a classic cut, Daleth's precision and attention to detail make her a trusted stylist for all ages."    
                        },
                        mobileBio: {          
                            paragraph1: `Introducing Daleth Vargas, a skilled cosmetologist at Studio No. 1 with a special flair for men’s and children’s haircuts. With 5 years of experience, Daleth excels in crafting tailored styles that range from classic to contemporary. Her gentle approach with kids makes her a hit among our younger clientele, while her expertise in men’s grooming has earned her a loyal following. Daleth’s passion for hairstyling and her friendly, engaging personality make every salon visit a delightful experience.`
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
                        contactInfo: '888-888-8888',
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
                    <Link to={'/meet-our-team/rajani'}>
                        <img className='personal__img' src="/images/daleth/pro-photo/daleth.png" alt="daleth" />
                    </Link>
                    <p>Daleth</p>
                </div>

              </div>
              </div>
            </Typography>
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
                <div className="section__text">
                    <p>Select Your Team Member</p>
                </div>
                <div className="spa__employee__icons">

                    {/* ROBIN || INDIVIDUAL STYLIST  */}
                    <div className="stylist__icon" 
                        onClick={() => handleTeamMemberClick({
                        name: 'Robin',
                        title: 'Nail Tech | Esthetician | Wax Specialist | Eyelashes',
                        image: '/images/robin/pro-photo/robin_mobile.jpg',
                        desktopBio: {
                                paragraph1: "Meet Robin McKinney, a multi-talented and seasoned professional at Studio No. 1, where she brings her extensive expertise as a wax specialist, eyelash tech, esthetician, and nail tech. With an impressive journey spanning over 20 years in the spa and beauty industry, Robin has honed her skills through dedicated training and hands-on experience. Her career is marked by an unwavering commitment to excellence, evident in her comprehensive training in facial techniques, Brazilian waxing, eyelash application, and the art of eyebrow mapping.",
                                paragraph2: "Robin's array of services caters to a diverse clientele, offering everything from precise eyebrow waxing and threading, tinting, and stunning eyelash extensions to indulgent nail and pedicure services. Her proficiency in Brazilians and eyelash lifts, coupled with rejuvenating facials, ensures a holistic beauty experience. Robin's approach goes beyond mere technical skill; she believes that beauty treatments are transformative, not just for the body but for the spirit as well. Her philosophy centers around the idea that everyone deserves to feel their best. Robin finds joy in brightening her clients' days, understanding that a trip to the salon is more than a beauty routine—it's an opportunity for relaxation, self-care, and a momentary escape from the hustle of daily life.",
                                paragraph3: "In Robin's chair, clients find a haven of kindness and empathy. She values these qualities both in her professional and personal life, striving to create a welcoming and understanding atmosphere where clients can unwind, share their stories, and leave feeling refreshed and confident. Robin's dedication to her craft and her clients' well-being makes her not just a stylist but a trusted confidant and friend in beauty care."    
                        },
                        mobileBio: {          
                            paragraph1: `Robin McKinney, a versatile and seasoned expert at Studio No. 1, brings over 20 years of experience as a wax specialist, eyelash tech, esthetician, and nail tech. Her expertise spans a range of services including eyebrow waxing/threading, eyelash extensions, nail and pedicure services, Brazilians, eyelash lifts, and facials, honed through dedicated training in facial and Brazilian techniques, eyelash application, and eyebrow mapping. Embodying a philosophy that intertwines kindness and empathy with beauty, Robin believes in uplifting each client's spirit through her treatments. Her approach creates a unique blend of technical skill and a nurturing environment, making every salon visit a rejuvenating experience of self-care and personal transformation.`
                        },
                        gallery: {
                            photo1: '/images/robin/gallery/gal1.jpg',
                            photo2: '/images/robin/gallery/gal2.jpg',
                            photo3: '/images/robin/gallery/gal3.jpg',
                            photo4: '/images/robin/gallery/gal4.jpg',
                            photo5: '/images/robin/gallery/gal5.jpg',
                            photo6: '/images/robin/gallery/gal6.jpg',
                            photo7: '/images/robin/gallery/gal7.jpg',
                            photo8: '/images/robin/gallery/gal8.jpg',
                            photo9: '/images/robin/gallery/gal4.jpg',
                        },
                        bookingLink: 'http://www.yahoo.com',
                        contactInfo: '888-888-8888',
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
                        <Link to='/meet-our-team/robin'>
                            <img className='personal__img' src="/images/robin/pro-photo/robin.png" alt="" />
                        </Link>
                        <p>Robin</p>
                    </div>

                    {/* TORI || INDIVIDUAL STYLIST  */}
                    <div className="stylist__icon"
                        onClick={() => handleTeamMemberClick({
                            name: 'Tori',
                            title: 'Massage Therapist',
                            image: '/images/tory/pro-photo/tory.png',
                            desktopBio: {
                                    paragraph1: "1",
                                    paragraph2: "2",
                                    paragraph3: "3"    
                            },
                            mobileBio: {          
                                paragraph1: `Meet Tori, this is her Bio...`
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
                            contactInfo: '888-888-8888',
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
                        <Link to={'/meet-our-team/tori'}>
                            <img className='personal__img' src="/images/tori/pro-photo/tory.png" alt="" />
                        </Link>
                        <p>Tori</p>
                    </div>

                    {/* RAJANI || INDIVIDUAL STYLIST  */}
                    <div className="stylist__icon"
                        onClick={() => handleTeamMemberClick({
                            name: 'Rajani',
                            title: 'Hair Stylist | Makeup Artist',
                            image: '/images/rajani/pro-photo/rajani.png',
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
                            contactInfo: '888-888-8888',
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
                        <Link to={'/meet-our-team/rajani'}>
                            <img className='personal__img' src="/images/rajani/pro-photo/rajani.png" alt="" />
                        </Link>
                        <p>Rajani</p>
                    </div>
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