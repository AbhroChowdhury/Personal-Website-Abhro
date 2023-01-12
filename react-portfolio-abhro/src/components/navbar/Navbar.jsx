import React from 'react'
import './navbar.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {MdOutlineWorkOutline} from 'react-icons/md'
import {AiOutlineBook} from 'react-icons/ai'
import {AiOutlineMail} from 'react-icons/ai'
import {useState} from 'react'

const Navbar = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/> </a> 
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser/> </a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><MdOutlineWorkOutline/> </a>
      <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><AiOutlineBook/> </a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><AiOutlineMail/> </a>
    </nav>
  )
}

export default Navbar

/* <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/> </a>
basically says: if the active state is now #, then we want to set the classname to active */