import React from 'react'
import './Sidebar.css'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faCalendarCheck, faCaretRight, faCreditCard,  faDashboard,  faFire, faFolderOpen, faGear, faUser } from '@fortawesome/free-solid-svg-icons'
const Sidebar = () => {
  return (
    <div className="Sidebar">
        <div className="list-content">
        <ul>
         <li>
            <Link to="Dashboard"><FontAwesomeIcon icon={faDashboard}width='50px' className="icon"/>Dashboard</Link>
            </li>
            <li>
            <Link to="Profile"><FontAwesomeIcon icon={faUser}width='50px' className="icon"/> Profile</Link>
            </li>
            <li>
             <Link to="ClientM"><FontAwesomeIcon icon={faFire}width='50px' className="icon"/> 
                Client Management </Link>
            </li>
            <li>
                <Link to="Appointment"><FontAwesomeIcon icon={faCalendarCheck}width='50px' className="icon"/> 
                Appointment Scheduling </Link>
            </li>
            <li>
                <Link to="Casemanage"><FontAwesomeIcon icon={faCaretRight}width='50px' className="icon"/> 
                Case Management</Link>
            </li>
            <li>
                <Link to="Payment"><FontAwesomeIcon icon={faCreditCard}width='50px' className="icon"/> 
                Payment</Link>
            </li>
            <li>
                <Link to="Document"><FontAwesomeIcon icon={faFolderOpen}width='50px'  className="icon"/> 
                Documents </Link>
            </li>
            <li>
                <Link to="Notification"><FontAwesomeIcon icon={faBell} width='50px' className="icon"/> 
                Notification</Link>
            </li>
            <li>
                <Link to="Settings"> <FontAwesomeIcon icon={faGear} width='50px' className="icon"/> 
                Settings</Link>
            </li>
        </ul>
        </div>
    </div>
  )
}

export default Sidebar