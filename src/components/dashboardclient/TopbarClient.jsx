import React, { useState } from 'react'
import './TopbarClient.css'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faBell, faMagnifyingGlass, faUserCircle } from '@fortawesome/free-solid-svg-icons'
const TopbarClient = ({toggleSidebar}) => {
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
            <h2>Client<br/> Dashboard</h2>
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
           <Link to="Clientprofile">Profile</Link>
           <Link to="SettingsC">Settings</Link>
           <Link to="#logout">Logout</Link>
         </div>
       )}
    </div>
    </div>
    </div>
)
}



export default TopbarClient