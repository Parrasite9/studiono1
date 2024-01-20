import '../../CSS/Global_Components/Navbar.css';
import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const triggerMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className={`Navbar ${showMenu ? 'menu-opened' : ''}`}>
      {showMenu ? (
        <div className="fullscreen__navbar">
          <div className="close__menu">
            <CloseIcon onClick={triggerMenu} />
          </div>

          <div className="navlinks">
            <Link to="/">Home</Link>
            <Link to="/About-us">About Us</Link>
            <Link to="/Services">Services</Link>
            <Link to="/FAQ">FAQ</Link>
            <Link to="/ContactUs">Contact Us</Link>
            <Link to="/Book-Now"><button>Book Now</button></Link>
          </div>
        </div>
      ) : (
        <div className="navbar__container">
          <div className="logo">
            {/* <h3>STUDIO NO. 1</h3> */}
            <Link to='/'>Studio No. 1</Link>
          </div>

          <div className="burger__menu">
            <MenuIcon onClick={triggerMenu} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
