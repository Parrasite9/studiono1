import '../../CSS/Global_Components/Navbar.css';
import React, { useEffect, useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link, useLocation, useNavigate } from 'react-router-dom';

function Navbar() {
  // SHOWS DESKTOP MENU AS NEEDED 
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 1000)

  // TO SHOW MENU FOR MOBILE
  const [showMenu, setShowMenu] = useState(false);

  const triggerMenu = () => {
    setShowMenu(!showMenu);
  };

  const location = useLocation()
  const navigate = useNavigate(); // useNavigate for React Router v6
  
  const links = [
    { to: "/", text: "Home" },
    { to: "/About-us", text: "About Us" },
    { to: "#Services", text: "Services" },
    { to: "#FAQ", text: "FAQ" },
    { to: "/ContactUs", text: "Contact Us" },
  ];

  const handleLinkClick = (link) => {
    if (link.to.startsWith("#") && location.pathname === '/') {
      scrollToSection(link.to);
    } else if (link.to.startsWith("#")) {
      navigate('/');
      setTimeout(() => scrollToSection(link.to), 0);
    } else {
      navigate(link.to);
    }
  };

  const scrollToSection = (sectionId) => {
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 1000);
    };

    // Set up the event listener
    window.addEventListener('resize', handleResize);

    // Call handleResize initially to set the correct state based on the current window size
    handleResize();

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="Navbar">
      {isLargeScreen ? (
        <div className="navbar__container">
          <div className="logo">
            {/* <h3>STUDIO NO. 1</h3> */}
            <Link to='/'>Studio No. 1</Link>
          </div>

          <div className="desktop__navlinks">
              {links.map((link, index) => (
                <div 
                  key={index}
                  onClick={() => handleLinkClick(link)}
                  className={`nav-item ${location.pathname === link.to ? 'active' : ''}`}
                >
                  {link.text}
                </div>
              ))}
              <Link to="/Book-Now"><button>Book Now</button></Link>
            </div>

        </div>
      ) : (
        <div className={`Navbar ${showMenu ? 'menu-opened' : ''}`}>
        {showMenu ? (
          <div className="fullscreen__navbar">
            <div className="close__menu">
              <CloseIcon onClick={triggerMenu} />
            </div>

            <div className="navlinks">
              {links.map((link, index) => (
                <div 
                  key={index} 
                  onClick={() => {
                    handleLinkClick(link);
                    triggerMenu(); // Close the menu after clicking a link
                  }}
                  className={`nav-item ${location.pathname === link.to ? 'active' : ''}`}
                >
                  {link.text}
                </div>
              ))}
              <Link to="/Book-Now"><button>Book Now</button></Link>
            </div>
          </div>
        ) : (
          <div className="navbar__container">
            <div className="logo">
              <Link to='/'>Studio No. 1</Link>
            </div>

            <div className="burger__menu">
              <MenuIcon onClick={triggerMenu} />
            </div>
          </div>
        )}
      </div>
      )}
    </div> 

  );
}

export default Navbar;
