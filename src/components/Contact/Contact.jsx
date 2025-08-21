import React from 'react'
import './Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faLinkedin, faTwitter  } from '@fortawesome/free-brands-svg-icons'
const Contact = () => {
  return (
    <>
    <div className='Contact'>
        <div className="footer-content">
            <h3>Contact Us</h3>
            <p>E-mail: humnashin9955@gmail.com</p>
             <p>Phone: +9175678688</p>
             <p>Address: your address 123 street, delhi, India </p>
        </div>
        <div className="footer-content">
            <h3>Quick links</h3>
            <a href="#Home">Home </a>
            <a href="#About">About </a>
            <a href="#Service">Service </a>
            <a href="#Contact">Contact </a>


      </div>  
      <div className="footer-content">
        <h3>Follow Us</h3>
        <button className='btn1'><FontAwesomeIcon icon={faFacebook}  /></button>
          <button className='btn2'><FontAwesomeIcon icon={faLinkedin}  /></button>
          <button className='btn3'><FontAwesomeIcon icon={faInstagram}  /></button>
          <button className='btn4'><FontAwesomeIcon icon={faTwitter}  /></button>
      </div>
      <div className="footer-content">
      <img src="assets/img1.jpg" alt=" "/>
</div>
     </div>
     <div className="bottom-bar">
        <p>&copy; Your company . All right reserved </p>
    </div>
    </>  
  )
}

export default Contact