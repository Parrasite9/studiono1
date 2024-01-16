import React, { useState } from 'react';
import '../CSS/MeetOurTeam.css'

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function MeetOurTeam() {
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

                {/* INDIVIDUAL STYLIST  */}
                <div className="stylist__icon">
                    <img className='personal__img' src="/images/yara.png" alt="" />
                    <p>Yara L.</p>
                </div>

                {/* INDIVIDUAL STYLIST  */}
                <div className="stylist__icon">
                    <img className='personal__img' src="/images/a.png" alt="" />
                    <p>Jane Doe</p>
                </div>

                {/* INDIVIDUAL STYLIST  */}
                <div className="stylist__icon">
                    <img className='personal__img' src="/images/allison.png" alt="" />
                    <p>Allison</p>
                </div>

                {/* INDIVIDUAL STYLIST  */}
                <div className="stylist__icon">
                    <img className='personal__img' src="/images/b.png" alt="" />
                    <p>Jane Doe</p>
                </div>

                {/* INDIVIDUAL STYLIST  */}
                <div className="stylist__icon">
                    <img className='personal__img' src="/images/c.png" alt="" />
                    <p>Jane Doe</p>
                </div>

                {/* INDIVIDUAL STYLIST  */}
                <div className="stylist__icon">
                    <img className='personal__img' src="/images/crystal.png" alt="" />
                    <p>Crystal</p>
                </div>

                {/* INDIVIDUAL STYLIST  */}
                <div className="stylist__icon">
                    <img className='personal__img' src="/images/ruby.png" alt="" />
                    <p>Ruby</p>
                </div>

                {/* INDIVIDUAL STYLIST  */}
                <div className="stylist__icon">
                    <img className='personal__img' src="/images/y2.png" alt="" />
                    <p>Yara C.</p>
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget.
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
            <Typography>Massage Therapist</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget.
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
