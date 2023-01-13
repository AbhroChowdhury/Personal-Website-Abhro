import React from 'react'
import './contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {AiOutlineLinkedin} from 'react-icons/ai'
import {FiGithub} from 'react-icons/fi'
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_e10wncj', 'template_89t1uww', form.current, 'nAslTcVzQQKedcjJ0')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset()
  };

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
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name='name' placeholder='Enter your name' required />
            <input type="text" name='Email' placeholder='Enter your email address' />
            <textarea name="message" rows="7" placeholder='Enter a message' required></textarea>
            <a type='Submit' className='btn'>send message</a>  
          </form>
 

        </div>



    </section>
  )
}

export default Contact

/* ------------------------
ERRORS TO FIX: 

<a type='Submit' className='btn'>send message</a>   

needs to be:

<button type='Submit' className='btn'>send message</button>   

then the functionality will actually work

but for some reason the class on button wont change to btn and so it looks like shit

--------------------------*/
