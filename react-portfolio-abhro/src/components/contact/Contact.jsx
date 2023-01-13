import React from 'react'
import './contact.css'
import {AiOutlineMail} from 'react-icons/ai'

const Contact = () => {
  return (
    <section id='contact'>
        <h2>GET IN TOUCH</h2>

        <div className="container contact__container"> 
          <div className="contact__options">
            <article className='contact__option'>
              <AiOutlineMail/>
              <h4>Email</h4>
              <h5>abhrajyo@ualberta.ca</h5>
              <a href="mailto: abhrajyo@ualberta.ca">Email me</a>
            </article>
          </div>
          <form action=""></form>
        </div>



    </section>
  )
}

export default Contact