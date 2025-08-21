import React, { useState } from 'react'
import './Ltopbar.css'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell,faMagnifyingGlass, faUserCircle,faBars} from '@fortawesome/free-solid-svg-icons'
const Ltopbar = ({ toggleSidebar }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };
  return (
    <div className="Ltopbar">
       <div className="Left_side" >
       <div className="logo1">
            <img src="assets/img3.jpg" alt=" "/>
        </div>
        <div className="text_head">
            <h2>Lawyer<br/> Dashboard</h2>
        </div>
        <FontAwesomeIcon icon={faBars} className="HamburgerIcon" onClick={toggleSidebar} />
         <div className="SearchContainer">
         <FontAwesomeIcon icon={faMagnifyingGlass} className="SearchIcon" />
         <input type="text" className="SearchBar"placeholder="Search..." />
         </div>
         <FontAwesomeIcon icon={faBell} className='Icons'/>
         <div className="ProfileContainer">
         <FontAwesomeIcon icon={faUserCircle} className='Icons1' onClick={toggleMenu}/>
         {menuOpen && (
            <div className="ProfileMenu">
              <Link to="Profile">Profile</Link>
              <Link to="Settings">Settings</Link>
              <Link to="#">Logout</Link>
            </div>
          )}
       </div>
       </div>
       </div>
  )
}

export default Ltopbar