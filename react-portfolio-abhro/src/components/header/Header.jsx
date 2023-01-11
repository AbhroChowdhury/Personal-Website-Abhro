import React from 'react'
import './header.css'
import CTA from './CTA'

const header = () => {
  return (
    <header>  
      <div className="container header__container">
        <h5>Hello, my name is</h5>
        <h1>Abhro Chowdhury</h1>
        <h5 className="text-light">Software Engineering Student at Ualberta</h5>
        <CTA />

      </div>
    </header>
  )
}

export default header