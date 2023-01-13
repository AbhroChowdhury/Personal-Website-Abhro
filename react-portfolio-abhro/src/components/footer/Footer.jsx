import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'

const footer = () => {
  return (
    <footer>
      <a href="#" className='footer__version'>ABHRO'S WEBSITE VERSION 1</a>
      <ul className='links'>
        <li> <a href="#">Home</a> </li>
        <li> <a href="#about">About</a> </li>
        <li> <a href="#experience">Experience</a> </li>
        <li> <a href="#portfolio">Portfolio</a> </li>
        <li> <a href="#contact">Contact</a> </li>
      </ul>
      <div className='footer__social'>
        <a href="https://github.com/AbhroChowdhury"><BsGithub/></a>
        <a href="https://www.linkedin.com/in/abhro-chowdhury-29a269203/"><BsLinkedin/></a>
        <a href="https://twitter.com/abhro_chowdhury"><BsTwitter/></a>
      </div>

    </footer>
  )
}

export default footer