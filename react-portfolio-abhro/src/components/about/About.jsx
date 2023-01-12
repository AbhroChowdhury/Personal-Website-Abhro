import React from 'react'
import './about.css'
import ME from '../../graphics/abhropic2EIC.jpg'

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
      </div>
    </section> 
  )
}

export default About