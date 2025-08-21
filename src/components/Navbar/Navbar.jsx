import React from 'react'
import {useState} from "react";
import './Navbar.css'
import {Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import  {faBars} from '@fortawesome/free-solid-svg-icons'
const Navbar = () => {
  const [active, setActive] = useState("nav-item");
  const navToggle =() =>{
    active === "nav-item"
    ? setActive("nav-item nav-active")
    : setActive("nav-item");
  };
  return (
    <>
    <nav className="navbar flex">
      <Link to='/'>
        <div className="logo">
         <img src="assets/img1.jpg" alt=" "/>
        </div>
        </Link>
        <div className={active}>
            <Link to='/'> Home </Link> 
            <Link to='/About'> About </Link>
            <Link to='/Service'> Service</Link>
            <Link to='/Contact'>Contact</Link>

            </div>
            <div onClick={navToggle} className='Nav-toggler'>
            <FontAwesomeIcon icon={faBars} />
            </div>

    </nav>
    </>
  )
}

export default Navbar