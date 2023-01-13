import React from 'react'
import './contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {AiOutlineLinkedin} from 'react-icons/ai'
import {FiGithub} from 'react-icons/fi'

const Contact = () => {
  return (
    <section id='contact'>
        <h2>GET IN TOUCH</h2>

        <div className="container contact__container"> 
          <div className="contact__options">
            <article className='contact__option'>
              <AiOutlineMail className='contact-icon'/>
              <h4>Email</h4>
              <h5>abhrajyo@ualberta.ca</h5>
              <a href="mailto: abhrajyo@ualberta.ca" target='blank'>Email me</a>
            </article>

            <article className='contact__option'>
              <AiOutlineLinkedin/>
              <h4>LinkedIn</h4>
              <h5>Abhro Chowdhury</h5>
              <a href="https://www.linkedin.com/in/abhro-chowdhury-29a269203/" target='_blank'>Connect with me</a>
            </article>

            <article className='contact__option'>
              <FiGithub/>
              <h4>Github</h4>
              <h5>AbhroChowdhury</h5>
              <a href="https://github.com/AbhroChowdhury" target='_blank'>Collaborate with me</a>
            </article>

          </div>
          <form action="">
            <input type="text" name='name' placeholder='Enter your name' required />
            <input type="text" name='Email' placeholder='Your Email required' />
            <textarea name="message" rows="7" placeholder='Enter a message' required></textarea>
            <a type='Submit' className='btn'>send message</a>
          </form>
        </div>



    </section>
  )
}

export default Contact