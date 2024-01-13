import '../../CSS/Global_Components/Navbar.css'
import React, { useState } from 'react'

// MUI ICONS 
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

function Navbar() {

  const [showMenu, setShowMenu] = useState(false)

  const triggerMenu = () => {
    if (showMenu === false) {
      setShowMenu(true)
      console.log(showMenu);
    } else {
      setShowMenu(false)
      console.log(true);
    }
  }

  return (
    <div className='Navbar'>
      {showMenu ? (
        <>
        <h1>THIS IS A TEST</h1>
        <div className="close__menu">
          <CloseIcon onClick={triggerMenu}/>
        </div>
        </>
      ) : (
        <div className="navbar__container">
          {/* LOGO  */}
          <div className="logo">
            <h1>STUDIO NO. 1</h1>
          </div>

          {/* BUGER MENU  */}
          <div className="burger__menu">
            <MenuIcon onClick={triggerMenu} />
          </div>

      </div>
      )}
    </div>
  )
}

export default Navbar
