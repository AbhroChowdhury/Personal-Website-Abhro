import React from 'react'
import './portfolio.css'
import IMG1 from '../../graphics/thumbnailHACKED.png'
import IMG2 from '../../graphics/receiptPHOTO.png'
import IMG3 from '../../graphics/dumbells.webp'
import IMG4 from '../../graphics/mywebsite.png'
import IMG5 from '../../graphics/opencv1.jpeg'
import IMG6 from '../../graphics/speech.png'

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
            portfolio item title
          </h3>
          <a href="https://github.com/AbhroChowdhury/Company-Stocker" className='btn'>GITHUB REPO</a>
        </article>

        <article className='portfolio__items'>
          <div className='portfolio__image'>
            <img src={IMG1} alt=""/>
          </div>
          <h3>
            portfolio item title
          </h3>
          <a href="https://github.com/AbhroChowdhury/Company-Stocker" className='btn'>GITHUB REPO</a>
        </article>

        <article className='portfolio__items'>
          <div className='portfolio__image'>
            <img src={IMG1} alt=""/>
          </div>
          <h3>
            portfolio item title
          </h3>
          <a href="https://github.com/AbhroChowdhury/Company-Stocker" className='btn'>GITHUB REPO</a>
        </article>

        <article className='portfolio__items'>
          <div className='portfolio__image'>
            <img src={IMG1} alt=""/>
          </div>
          <h3>
            portfolio item title
          </h3>
          <a href="https://github.com/AbhroChowdhury/Company-Stocker" className='btn'>GITHUB REPO</a>
        </article>

        <article className='portfolio__items'>
          <div className='portfolio__image'>
            <img src={IMG1} alt=""/>
          </div>
          <h3>
            portfolio item title
          </h3>
          <a href="https://github.com/AbhroChowdhury/Company-Stocker" className='btn'>GITHUB REPO</a>
        </article>

        <article className='portfolio__items'>
          <div className='portfolio__image'>
            <img src={IMG1} alt=""/>
          </div>
          <h3>
            portfolio item title
          </h3>
          <a href="https://github.com/AbhroChowdhury/Company-Stocker" className='btn'>GITHUB REPO</a>
        </article>
      </div>




    </section>
  )
}

export default Portfolio