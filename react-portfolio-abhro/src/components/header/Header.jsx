import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../graphics/SelfieAbhro.PNG'
import HeaderExtras from './HeaderExtras'

const header = () => {
  return (
    <header id='header'>  
      <div className="container header__container">
        <h1>Abhro Chowdhury</h1>
        <h5 className="text-light">Software Engineering Student at University of Alberta</h5>
        <CTA />
        <HeaderExtras />



      </div>
    </header>
  )
}

export default header