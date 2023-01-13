import React from 'react'
import './about.css'
import ME from '../../graphics/abhropic2EIC.jpg'
import {FaLaptopCode} from 'react-icons/fa'
import {TbSchool} from 'react-icons/tb'
import {AiOutlineFund} from 'react-icons/ai'

const About = () => {
  return (
    <section id='about'>
      <h2> ABOUT ME </h2>

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
              <h6>Experience:</h6>
              <small>~9 months professional experience</small>
            </article>

            <article className='about__card'>
              <TbSchool className="about__icon"/>
              <h6>Software Engineering:</h6>
              <small>University of Alberta</small>
            </article>

            <article className='about__card'>
              <AiOutlineFund className="about__icon"/>
              <h6>CO-OP Availability:</h6>
              <small>4 months / Starting May</small>
            </article>

          </div>

          <p>
          My name is Abhro Chowdhury and I am a second-year Software Engineering student at the University of Alberta. I created this website as a way to apply my skills in React.js and front-end development. The current version of the website was made in just two days, and I plan to continue refining and adding new features as I have time. In addition to programming, I am passionate about working out, soccer, and cars. I currently follow a push-pull-arnold workout split and have been enjoying the results. FC Barcelona is my favorite soccer team and I have a particular love for cars with V8 engines, with the W204 AMG C63 being my favorite. This is just a brief description of who I am, be sure to check out my LinkedIn for more!
          </p>

          <a href="#contact" className='btn'>Reach out to me</a>
        </div>
      </div>
    </section> 
  )
}

export default About