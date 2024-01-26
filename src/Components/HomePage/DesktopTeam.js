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

    },
    {
        name: 'Allison',
        personal__img: '/images/allison/pro-photo/allison.png',
        title: 'Beautician | Makeup Artist',
        image: '/images/allison/pro-photo/allison_desktop.jpg',
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
        contactInfo: '#',
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

    },
    {
        name: 'Clara',
        personal__img: '/images/clara/pro-photo/clara.png',
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
            photo1: '/images/clara/gallery/a2.jpeg',
            photo2: '/images/clara/gallery/a3.jpeg',
            photo3: '/images/clara/gallery/a4.jpeg',
            photo4: '/images/clara/gallery/a5.jpeg',
            photo5: '/images/clara/gallery/a6.jpeg',
            photo6: '/images/clara/gallery/a6.jpeg',
            photo7: '/images/clara/gallery/a2.jpeg',
            photo8: '/images/clara/gallery/a1.jpeg',
            photo9: '/images/clara/gallery/a3.jpeg',
        },
        bookingLink: 'http://www.yahoo.com',
        contactInfo: '#',
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
    },
    {
        name: 'Leonela',
        personal__img: '/images/leo/pro-photo/leo.png',
        title: 'Hair Stylist | Makeup Artist',
        image: '/images/c.png',
        desktopBio: {
                paragraph1: "Meet Leonela, a versatile and talented stylist at Studio No. 1, who has quickly become known for her expertise in men's grooming, women's beauty services, and family haircuts. With a robust experience of 5 years in the industry, Leonela's journey is marked by continuous learning and skill enhancement. She is a certified hand-tied extension expert and has participated in several barber competitions, showcasing her flair and precision. Her dedication to her craft is further evidenced by her participation in prestigious events and training, including a 2-day training with Roman Master in Mechas Level 1 and attending Premiere San Antonio 2023.",
                paragraph2: "Leonela's range of services caters to everyone. For men, she offers a VIP treatment that includes haircuts, beard trims, lineups, and more, ensuring each client leaves looking and feeling their best. Women flock to Leonela for her exceptional skills in highlights, coloring, face waxing, and other beauty treatments, appreciating her keen eye for style and detail. Families love her for her gentle approach with kids, making every haircut a fun and comfortable experience.",
                paragraph3: "Her professional philosophy centers around a bespoke approach to beauty and hair care. Leonela believes in understanding her clients' unique needs and tailoring her services to suit their individual style. Her friendly demeanor and attentive service make every salon visit a delightful experience. Leonela's commitment to excellence, combined with her warm and approachable personality, makes her a cherished stylist among her clientele."    
        },
        mobileBio: {          
            paragraph1: `Leonela, a dynamic stylist at Studio No. 1, brings a blend of creativity and precision to her role as a Men's Grooming Specialist, Women's Beauty Services Expert, and Family Haircut Professional. With 5 years of rich experience and specialized training, including a certification in hand-tied extensions and extensive barber competition participation, Leonela excels in providing a range of services. From VIP men's treatments to stylish women's hair coloring and face waxing, to delightful haircuts for kids, her approach is all about personalized care and style. Clients appreciate her bespoke services, warm demeanor, and the ability to turn every salon visit into a memorable, tailored beauty experience.`
        },
        gallery: {
            photo1: '/images/leo/gallery/a2.jpeg',
            photo2: '/images/leo/gallery/a3.jpeg',
            photo3: '/images/leo/gallery/a4.jpeg',
            photo4: '/images/leo/gallery/a5.jpeg',
            photo5: '/images/leo/gallery/a6.jpeg',
            photo6: '/images/leo/gallery/a6.jpeg',
            photo7: '/images/leo/gallery/a2.jpeg',
            photo8: '/images/leo/gallery/a1.jpeg',
            photo9: '/images/leo/gallery/a3.jpeg',
        },
        bookingLink: 'http://www.yahoo.com',
        contactInfo: '#',
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
    },
    {
        name: 'Crystal',
        personal__img: '/images/crystal/pro-photo/crystal.png',
        title: 'Men Services | Hair Stylist | Makeup Artist',
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
            photo1: '/images/crystal/gallery/a2.jpeg',
            photo2: '/images/crystal/gallery/a3.jpeg',
            photo3: '/images/crystal/gallery/a4.jpeg',
            photo4: '/images/crystal/gallery/a5.jpeg',
            photo5: '/images/crystal/gallery/a6.jpeg',
            photo6: '/images/crystal/gallery/a6.jpeg',
            photo7: '/images/crystal/gallery/a2.jpeg',
            photo8: '/images/crystal/gallery/a1.jpeg',
            photo9: '/images/crystal/gallery/a3.jpeg',
        },
        bookingLink: 'http://www.yahoo.com',
        contactInfo: '#',
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
    },
    {       
        name: 'Ruby',
        personal__img: '/images/ruby/pro-photo/ruby.png',
        title: 'Beautician | Men Services | Child Friendly',
        image: '/images/ruby.png',
        desktopBio: {
                paragraph1: "Meet Ruby Armendariz, an inspired beautician with over a decade of experience in the realm of hair aesthetics. Ruby's journey in the beauty industry is marked by her passion for aligning fashion trends with each client's unique inspiration. With a keen eye for style and a commitment to individuality, she specializes in creating signature looks that resonate with the personal flair of each client, whether they are women, men, or children.",
                paragraph2: "Ruby's expertise extends across a wide spectrum of hair services. She is a specialist in hair color and bleaching, adept at transforming your hair to align with the latest fashion trends. Her skills in hair extensions are backed by professional certification, allowing her to craft looks that embody your desired aesthetic. Additionally, Ruby offers perms and hairstyles tailored to complement your vibe, ensuring that each visit leaves you feeling refreshed and confident. Her proficiency isn't just limited to styling; she's equally dedicated to hair health, providing treatments and personalized after-care advice suited to your hair type.",
                paragraph3: "At the core of Ruby's approach is a belief in self-expression through hair styling. She sees each client's hair as a canvas for creativity, a means to 'craft your hair to your own style' and add a 'shine to your style.' Ruby is committed to meeting and exceeding your hair expectations, ensuring that every experience at the salon is more than just a haircut or color – it's a step towards expressing your individuality and feeling your best. So, treat yourself and let Ruby guide you in crafting a look that's uniquely yours."    
        },
        mobileBio: {          
            paragraph1: `Introducing Ruby, an inspired beautician with over ten years of experience in hair aesthetics, Ruby is your go-to expert for transforming fashion trends into personalized hairstyles. She excels in a range of services from haircuts for women, men, and children to color and bleaching, ensuring each look aligns with your individual style. Ruby's expertise extends to hair extensions, perms, and specialized treatments, complemented by tailored after-care advice to maintain your hair's health and vibrancy. At the heart of her approach is a dedication to crafting unique styles that not only meet but exceed your expectations, making every salon visit a step towards self-expression and confidence.`
        },
        gallery: {
            photo1: '/images/ruby/gallery/a2.jpeg',
            photo2: '/images/ruby/gallery/a3.jpeg',
            photo3: '/images/ruby/gallery/a4.jpeg',
            photo4: '/images/ruby/gallery/a5.jpeg',
            photo5: '/images/ruby/gallery/a6.jpeg',
            photo6: '/images/ruby/gallery/a6.jpeg',
            photo7: '/images/ruby/gallery/a2.jpeg',
            photo8: '/images/ruby/gallery/a1.jpeg',
            photo9: '/images/ruby/gallery/a3.jpeg',
        },
        bookingLink: 'http://www.yahoo.com',
        contactInfo: '#',
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
    },
    {        
        name: 'Yara B.',
        personal__img: '/images/yara_c/pro-photo/y2.png',
        title: 'Barber | Child Friendly',
        image: '/images/y2.png',
        desktopBio: {
                paragraph1: "Meet Yaritza Bislar, a proficient and artistic barber at Studio No. 1, known for her exceptional skill in male grooming and hairstyling. With a rich experience of four years in the industry, Yaritza has honed her expertise in a variety of barbering services. Her specialties include crafting sleek skin fades, classic gentlemen's haircuts, playful and comfortable kids' haircuts, and meticulous beard grooming. Her proficiency with the straight razor for hot facial shaves is particularly noteworthy, making each visit a relaxing and rejuvenating experience.",
                paragraph2: "Yaritza's approach to barbering is client-centric, focusing on understanding and meeting the individual needs of each customer. She believes that every client deserves a personalized experience, and she excels in customizing her services to suit their unique preferences and styles. Her commitment to her craft is evident in the precision and care she brings to every cut and shave.",
                paragraph3: "Beyond her technical abilities, Yaritza's warm and welcoming demeanor makes every appointment a pleasant and enjoyable encounter. Her dedication to ensuring client satisfaction resonates in the loyalty of her customers who trust her not only for their grooming needs but also for the friendly and professional atmosphere she creates. Yaritza looks forward to welcoming you to Studio No. 1, where your grooming needs are met with skill, care, and a personal touch."    
        },
        mobileBio: {          
            paragraph1: `Yaritza Bislar is a talented barber at Studio No. 1, bringing four years of dedicated experience to her craft. Specializing in a variety of barbering services, including sleek skin fades, classic gentlemen's haircuts, kids' haircuts, and expert beard grooming with straight razor hot facial shaves, Yaritza is known for her meticulous attention to detail and client-focused approach. Her ability to tailor each service to the individual needs and styles of her clients, coupled with her warm and welcoming demeanor, makes every visit a uniquely satisfying experience. Yaritza's commitment to excellence and personalized care has earned her a loyal clientele who value not only her technical skills but also the friendly and professional atmosphere she creates.`
        },
        gallery: {
            photo1: '/images/yara_c/gallery/y1.png',
            photo2: '/images/yara_c/gallery/y2.png',
            photo3: '/images/yara_c/gallery/y3.png',
            photo4: '/images/yara_c/gallery/y4.png',
            photo5: '/images/yara_c/gallery/y5.png',
            photo6: '/images/yara_c/gallery/y6.png',
            photo7: '/images/yara_c/gallery/y7.png',
            photo8: '/images/yara_c/gallery/y8.png',
            photo9: '/images/yara_c/gallery/y9.png',
        },
        bookingLink: 'http://www.yahoo.com',
        contactInfo: '#',
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
    },
    {        
        name: 'Daleth',
        personal__img: '/images/daleth/pro-photo/daleth.png',
        title: 'Men Services | Child Friendly',
        image: '/images/daleth/pro-photo/daleth__mobile.png',
        desktopBio: {
                paragraph1: "Meet Daleth Vargas, a talented cosmetologist at our salon, known for her exceptional skill and dedication to the art of hair styling. With five years of experience in the beauty industry, Daleth has honed her expertise, specializing in men's and children's haircuts. Her approach to cosmetology blends classic techniques with contemporary style, ensuring each client leaves looking their best.",
                paragraph2: "Daleth's journey in the world of cosmetology is marked by a passion for bringing out the best in her clients, regardless of their age or style preferences. Her ability to connect with children and make them comfortable during their haircuts is particularly noteworthy. She understands that a haircut can be more than just a routine grooming experience; it's an opportunity to boost confidence and express individuality.",
                paragraph3: "Clients appreciate Daleth for her friendly demeanor and attentive service. She takes the time to understand each client's needs and preferences, ensuring a personalized and enjoyable salon experience. Whether you're looking for a trendy new look or a classic cut, Daleth's precision and attention to detail make her a trusted stylist for all ages."    
        },
        mobileBio: {          
            paragraph1: `Introducing Daleth Vargas, a skilled cosmetologist at Studio No. 1 with a special flair for men’s and children’s haircuts. With 5 years of experience, Daleth excels in crafting tailored styles that range from classic to contemporary. Her gentle approach with kids makes her a hit among our younger clientele, while her expertise in men’s grooming has earned her a loyal following. Daleth’s passion for hairstyling and her friendly, engaging personality make every salon visit a delightful experience.`
        },
        gallery: {
            photo1: '/images/daleth/gallery/2.jpeg',
            photo2: '/images/daleth/gallery/3.jpeg',
            photo3: '/images/daleth/gallery/4.jpeg',
            photo4: '/images/daleth/gallery/5.jpeg',
            photo5: '/images/daleth/gallery/6.jpeg',
            photo6: '/images/daleth/gallery/6.jpeg',
            photo7: '/images/daleth/gallery/2.jpeg',
            photo8: '/images/daleth/gallery/1.jpeg',
            photo9: '/images/daleth/gallery/3.jpeg',
        },
        bookingLink: 'http://www.yahoo.com',
        contactInfo: '#',
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
    },
  ]

//   personal__img: '/images/yara_l/pro-photo/yara.png',

  const spaTeamMembers = [
    {
        name: 'Robin',
        personal__img: '/images/robin/pro-photo/robin.png',
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
        bookingLink: 'https://robinmckinney.glossgenius.com',
        contactInfo: '432-290-2826',
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
    },
    {
        name: 'Tori',
        personal__img: '/images/tori/pro-photo/tory.png',
        title: 'Massage Therapist',
        image: '/images/tori/pro-photo/tory.png',
        desktopBio: {
                paragraph1: "1",
                paragraph2: "2",
                paragraph3: "3"    
        },
        mobileBio: {          
            paragraph1: `Meet Tori, this is her Bio...`
        },
        gallery: {
            photo1: '/images/tori/gallery/t2.jpeg',
            photo2: '/images/tori/gallery/t3.jpeg',
            photo3: '/images/tori/gallery/t4.jpeg',
            photo4: '/images/tori/gallery/t5.jpeg',
            photo5: '/images/tori/gallery/t6.jpeg',
            photo6: '/images/tori/gallery/t6.jpeg',
            photo7: '/images/tori/gallery/t2.jpeg',
            photo8: '/images/tori/gallery/t1.jpeg',
            photo9: '/images/tori/gallery/t3.jpeg',
        },
        bookingLink: 'http://www.yahoo.com',
        contactInfo: '#',
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
    },
    {
        name: 'Rajani',
        personal__img: '/images/rajani/pro-photo/rajani.png',
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
            photo1: '/images/rajani/gallery/a2.jpeg',
            photo2: '/images/rajani/gallery/a3.jpeg',
            photo3: '/images/rajani/gallery/a4.jpeg',
            photo4: '/images/rajani/gallery/a5.jpeg',
            photo5: '/images/rajani/gallery/a6.jpeg',
            photo6: '/images/rajani/gallery/a6.jpeg',
            photo7: '/images/rajani/gallery/a2.jpeg',
            photo8: '/images/rajani/gallery/a1.jpeg',
            photo9: '/images/rajani/gallery/a3.jpeg',
        },
        bookingLink: 'http://www.yahoo.com',
        contactInfo: '#',
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

  const specialTeamMembers = [
    {
        name: 'Nunu',
        personal__img: '/images/nunu/pro-photo/nunu.png',
        title: 'Barber | Child Friendly',
        image: '/images/nunu/pro-photo/nunu_mobile.jpg',
        desktopBio: {
                paragraph1: "...",
                paragraph2: "...",
                paragraph3: "..."    
        },
        mobileBio: {          
            paragraph1: `...`
        },
        gallery: {
            photo1: '/images/nunu/gallery/n1.jpg',
            photo2: '/images/nunu/gallery/n2.jpg',
            photo3: '/images/nunu/gallery/n3.jpg',
            photo4: '/images/nunu/gallery/n4.jpg',
            photo5: '/images/nunu/gallery/n5.jpg',
            photo6: '/images/nunu/gallery/n6.jpg',
            photo7: '/images/nunu/gallery/n7.jpg',
            photo8: '/images/nunu/gallery/n8.jpg',
            photo9: '/images/nunu/gallery/n9.jpg',
        },
        bookingLink: 'http://www.yahoo.com',
        contactInfo: '#',
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
    },
    {
        name: 'BOTOX',
        personal__img: '/images/robin/pro-photo/robin.png',
        title: 'Barber | Child Friendly',
        image: '/images/y2.png',
        desktopBio: {
                paragraph1: "Meet Yaritza Bislar, a proficient and artistic barber at Studio No. 1, known for her exceptional skill in male grooming and hairstyling. With a rich experience of four years in the industry, Yaritza has honed her expertise in a variety of barbering services. Her specialties include crafting sleek skin fades, classic gentlemen's haircuts, playful and comfortable kids' haircuts, and meticulous beard grooming. Her proficiency with the straight razor for hot facial shaves is particularly noteworthy, making each visit a relaxing and rejuvenating experience.",
                paragraph2: "Yaritza's approach to barbering is client-centric, focusing on understanding and meeting the individual needs of each customer. She believes that every client deserves a personalized experience, and she excels in customizing her services to suit their unique preferences and styles. Her commitment to her craft is evident in the precision and care she brings to every cut and shave.",
                paragraph3: "Beyond her technical abilities, Yaritza's warm and welcoming demeanor makes every appointment a pleasant and enjoyable encounter. Her dedication to ensuring client satisfaction resonates in the loyalty of her customers who trust her not only for their grooming needs but also for the friendly and professional atmosphere she creates. Yaritza looks forward to welcoming you to Studio No. 1, where your grooming needs are met with skill, care, and a personal touch."    
        },
        mobileBio: {          
            paragraph1: `Yaritza Bislar is a talented barber at Studio No. 1, bringing four years of dedicated experience to her craft. Specializing in a variety of barbering services, including sleek skin fades, classic gentlemen's haircuts, kids' haircuts, and expert beard grooming with straight razor hot facial shaves, Yaritza is known for her meticulous attention to detail and client-focused approach. Her ability to tailor each service to the individual needs and styles of her clients, coupled with her warm and welcoming demeanor, makes every visit a uniquely satisfying experience. Yaritza's commitment to excellence and personalized care has earned her a loyal clientele who value not only her technical skills but also the friendly and professional atmosphere she creates.`
        },
        gallery: {
            photo1: '/images/yara_c/gallery/y1.png',
            photo2: '/images/yara_c/gallery/y2.png',
            photo3: '/images/yara_c/gallery/y3.png',
            photo4: '/images/yara_c/gallery/y4.png',
            photo5: '/images/yara_c/gallery/y5.png',
            photo6: '/images/yara_c/gallery/y6.png',
            photo7: '/images/yara_c/gallery/y7.png',
            photo8: '/images/yara_c/gallery/y8.png',
            photo9: '/images/yara_c/gallery/y9.png',
        },
        bookingLink: 'http://www.yahoo.com',
        contactInfo: '#',
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
    <>
    <div className="DesktopTeam__grid__instruction">
        <p>Select A Team Member</p>
    </div>

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

        {/* BARBERS & BEAUTOLOGIST */}
        <div className="barber__TeamMembers" 
            style={{ zIndex: activeButton === 'Barbers & Beauticians' ? 99 : 1 }}>
            {activeButton === 'Barbers & Beauticians' && barberTeamMembers.map((member, index) => (
                <div key={index} className="stylist__icon" onClick={() => handleTeamMemberClick(member)}>
                <Link to={`/meet-our-team/${member.name.toLowerCase().replace(/\s/g, '-')}`}>
                    <img className='personal__img' src={member.personal__img} alt={member.name} />
                </Link>
                <p>{member.name}</p>
                </div>
            ))}
        </div>

        {/* SPA SERVICES */}
        <div className="spa__TeamMembers" 
            style={{ zIndex: activeButton === 'Spa Services' ? 99 : 1 }}>
            {activeButton === 'Spa Services' && spaTeamMembers.map((member, index) => (
                <div key={index} className="stylist__icon" onClick={() => handleTeamMemberClick(member)}>
                <Link to={`/meet-our-team/${member.name.toLowerCase().replace(/\s/g, '-')}`}>
                    <img className='personal__img' src={member.personal__img} alt={member.name} />
                </Link>
                <p>{member.name}</p>
                </div>
            ))}
        </div>

        {/* SPECIAL SERVICES */}
        <div className="special__TeamMembers" 
            style={{ zIndex: activeButton === 'Special Services' ? 99 : 1 }}>
            {activeButton === 'Special Services' && specialTeamMembers.map((member, index) => (
                <div key={index} className="stylist__icon" onClick={() => handleTeamMemberClick(member)}>
                <Link to={`/meet-our-team/${member.name.toLowerCase().replace(/\s/g, '-')}`}>
                    <img className='personal__img' src={member.personal__img} alt={member.name} />
                </Link>
                <p>{member.name}</p>
                </div>
            ))}
        </div>
    </div>
    </>
  );
}

export default DesktopTeam;
