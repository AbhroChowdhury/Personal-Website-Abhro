import React from 'react'
import './experience.css'
import {BiCodeAlt} from 'react-icons/bi'

const Experience = () => {
  return (
    <section id='experience'>
      <h2>PROFESSIONAL EXPERIENCE</h2>
      
      <div className='container experience__container'>
        <div className='CANEIL__experience'> 
          <h3>CANEIL</h3>
          <div className='CANEIL__content'>
            <article className='CANEIL__details'>
              <BiCodeAlt className='experience__icon'/>
              <h4>Software Engineer, Intern</h4>
              <small className='text-light'> At Canadian Engineering and Inspection Ltd (CANEIL), I developed software to automate several internal tasks, such as optimizing the time tracking system for employees and contractors and auto-generating corresponding documents. Additionally, I created data analysis software using Pandas, OpenPyxl, and Matplotlib for a major client, allowing efficient analysis of over 4,000 spreadsheets. I also coded Python scripts to analyze and manage pipeline and rotating equipment data, reducing the time required for process engineer's analysis. I also wrote software to automate the reporting process for large-scale projects, bringing the average report writing time down by 50%. Lastly, I implemented significant front-end changes to the company website with the goal of revamping the design to modern industry standards. I started at CANEIL in May of 2022, and completed this 4-month internship by August 2022.
              </small>
            </article>
          </div>
        </div>

        <div className='48HD__experience'> 
          <h3>48HourDiscovery</h3>
          <div className='48HD__content'>
            <article className='48HD__details'>
              <BiCodeAlt className='experience__icon'/>
              <h4>Full-Stack Engineer, Intern</h4>
              <small className='text-light'>At 48HourDiscovery, I have experience in building web applications and implementing new features within cloud website utilizing technologies such as React.js, Node.js, and Flask. I was responsible for debugging issues within internal cloud platform to mitigate site downtime and boost company workflow. Additionally, I was responsible for evaluating code to maintain compatibility with varying browsers, devices, and operating systems. I also had the responsibility of creating new functionality to enable users to share data from protected company sites, while ensuring proper user access levels through the use of MySQL databases and python. I was also involved in deploying features allowing users to leverage select data on protected company sites, ensuring smooth connection between MySQL database and front-end. Lastly, I was responsible for designing program that enable users to automatically tabulate sequencing data from lab results. I currently work here part-time in addition to my studies at school, and have been working here since September 2022.</small>
            </article>
          </div>
        </div>

      </div>

    </section>

  )
}

export default Experience