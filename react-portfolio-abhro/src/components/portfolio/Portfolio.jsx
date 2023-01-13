import React from 'react'
import './portfolio.css'
import IMG1 from '../../graphics/thumbnailHACKED.png'
import IMG2 from '../../graphics/receiptPHOTO.png'
import IMG3 from '../../graphics/dumbells.webp'
import IMG4 from '../../graphics/mywebsite.png'
import IMG5 from '../../graphics/opencv1.jpeg'
import IMG6 from '../../graphics/speech2.png'

const Portfolio = () => {
  return (
    <section id='portfolio'> 
      <h2>MY PORTFOLIO</h2>

      <div className='container portfolio__container'>
        <article className='portfolio__items'>
          <div className='portfolio__image'>
            <img src={IMG1} alt=""/>
          </div>
          <h3>
            Company Stocker
          </h3>
          <div className="portfolio__items-cta">
          <a href="https://github.com/AbhroChowdhury/Company-Stocker" className='btn'>GITHUB REPO</a>
          </div>
        </article>

        <article className='portfolio__items'>
          <div className='portfolio__image'>
            <img src={IMG2} alt=""/>
          </div>
          <h3>
            Receipt Scanner with OCR
          </h3>
          <div className="portfolio__items-cta">
          <a href="https://github.com/AbhroChowdhury/ReceiptScannerFullProject" className='btn'>GITHUB REPO</a>
          </div>
        </article>

        <article className='portfolio__items'>
          <div className='portfolio__image'>
            <img src={IMG3} alt=""/>
          </div>
          <h3>
            Machine Learning Fitness Tracker
          </h3>
          <div className="portfolio__items-cta">
          <a href="https://github.com/AbhroChowdhury/Machine-Learning-Fitness-Tracker" className='btn'>GITHUB REPO</a>
          </div>
        </article>

        <article className='portfolio__items'>
          <div className='portfolio__image'>
            <img src={IMG4} alt=""/>
          </div>
          <h3>
            Personal Website
          </h3>
          <div className="portfolio__items-cta">
          <a href="https://github.com/AbhroChowdhury/Personal-Website-Abhro" className='btn'>GITHUB REPO</a>
          </div>
        </article>

        <article className='portfolio__items'>
          <div className='portfolio__image'>
            <img src={IMG5} alt=""/>
          </div>
          <h3>
            OpenCV Projects
          </h3>
          <div className="portfolio__items-cta">
          <a href="https://github.com/AbhroChowdhury/Messing-around-with-opencv" className='btn'>GITHUB REPO</a>
          </div>
        </article>

        <article className='portfolio__items'>
          <div className='portfolio__image'>
            <img src={IMG6} alt=""/>
          </div>
          <h3>
            Speech to Text AI
          </h3>
          <div className="portfolio__items-cta">
          <a href="https://github.com/AbhroChowdhury/Company-Stocker" className='btn'>GITHUB REPO</a>
          </div>
        </article>
      </div>

    </section>
  )
}

export default Portfolio