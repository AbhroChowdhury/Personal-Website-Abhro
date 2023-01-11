import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../graphics/SelfieAbhro.PNG'
import HeaderExtras from './HeaderExtras'

const header = () => {
  return (
    <header>  
      <div className="container header__container">
        <h5>Hello, my name is</h5>
        <h1>Abhro Chowdhury</h1>
        <h5 className="text-light">Software Engineering Student at Ualberta</h5>
        <CTA />
        <HeaderExtras />

        <div className="me">
          <img src={ME} alt='me' />
        </div>

        <a href="#contact" className='scroll__down'> Scroll </a>

      </div>
    </header>
  )
}

export default header