import React from 'react'
import './navbar.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {MdOutlineWorkOutline} from 'react-icons/md'
import {AiOutlineCreditCard} from 'react-icons/ai'
import {AiOutlineMail} from 'react-icons/ai'

const Navbar = () => {
  return (
    <nav>
      <a href="#header"><AiOutlineHome/> </a>
      <a href="#about"><AiOutlineUser/> </a>
      <a href="#experience"><MdOutlineWorkOutline/> </a>
      <a href="#services"><AiOutlineCreditCard/> </a>
      <a href="#contact"><AiOutlineMail/> </a>
    </nav>
  )
}

export default Navbar