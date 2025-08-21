import React from 'react'
import './Clientsidebar.css'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faCalendarCheck, faComment, faCreditCard, faDashboard, faFolderOpen, faGear, faUser } from '@fortawesome/free-solid-svg-icons'
const Clientsidebar = () => {
  return (
    <div className="Clientsidebar">
        <div className="list-item">
        <ul>
            <li>
                <Link to="DashboardC"> <FontAwesomeIcon icon={faDashboard} width='50px' className="icon"/>Dashboard</Link>
            </li>
            <li>
                <Link to="Clientprofile"> <FontAwesomeIcon icon={faUser} width='50px' className="icon"/>Profile</Link>
            </li>
            <li>
                <Link to="AppointmentScheduling"> <FontAwesomeIcon icon={faCalendarCheck}width='50px' className="icon"/>Appointment Scheduling</Link>
            </li>
            <li>
                <Link to="CaseTracking"> <FontAwesomeIcon icon={faComment}width='50px'  className="icon"/>Case Tracking</Link>
            </li>
            <li>
                <Link to="ClientNotification"> <FontAwesomeIcon icon={faBell} width='50px' className="icon"/>Notifications</Link>
            </li>
            <li>
                <Link to="PaymentC"> <FontAwesomeIcon icon={faCreditCard}width='50px' className="icon"/> Payment</Link>
            </li>
            <li>
                <Link to="SettingsC"><FontAwesomeIcon icon={faGear} width='50px' className="icon"/> Settings</Link>
            </li>
            <li>
                <Link to="Doc"><FontAwesomeIcon icon={faFolderOpen}width='50px'  className="icon"/>Documents</Link>
            </li>
        </ul>
        </div>
    </div>
  )
}

export default Clientsidebar