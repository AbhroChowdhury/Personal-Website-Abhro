import React from 'react'
import './about.css'
import ME from '../../graphics/abhropic2EIC.jpg'
import {FaLaptopCode} from 'react-icons/fa'
import {TbSchool} from 'react-icons/tb'
import {AiOutlineFund} from 'react-icons/ai'

const About = () => {
  return (
    <section id='about'>
      <h5> Some more </h5>
      <h2> About Me </h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me_image'>
            <img src={ME} alt="About me image" />
          </div> 
        </div>

        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaLaptopCode className="about__icon"/>
              <h5>Experience</h5>
              <small>~9 months professional experience</small>
            </article>

            <article className='about__card'>
              <TbSchool className="about__icon"/>
              <h5>Software Engineering</h5>
              <small>University of Alberta</small>
            </article>

            <article className='about__card'>
              <AiOutlineFund className="about__icon"/>
              <h5>CO-OP Availability</h5>
              <small>4 months / Starting May</small>
            </article>

          </div>

          <p>
            FILL THIS IN LATER
          </p>

          <a href="#contact" className='btn'>Reach out to me</a>
        </div>
      </div>
    </section> 
  )
}

export default About