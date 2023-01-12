import React from 'react'
import Resume from '../../graphics/AbhroChowdhuryResumeJan09_COOP.pdf'

const CTA = () => {
  return (
    <div className="CTA">
        <a href={Resume} download className='btn'>Resume / CV</a>
        <a href="#contact" className='btn'>Contact Me </a>
    </div>
  )
}

export default CTA