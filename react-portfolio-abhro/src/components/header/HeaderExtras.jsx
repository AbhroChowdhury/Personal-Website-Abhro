import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'

const HeaderExtras = () => {
  return (
    <div classname='header__extras'> 
        <a href="https://www.linkedin.com/in/abhro-chowdhury-29a269203/" target='_blank'><BsLinkedin/> </a>
        <a href="https://github.com/AbhroChowdhury" target='_blank'><BsGithub/> </a>
        <a href="https://twitter.com/abhro_chowdhury" target='_blank'><BsTwitter/> </a>
    </div>
  )
}

export default HeaderExtras