import React from 'react'
import Portfolio from './Portfolio';
import '../styles/Projects.css';

function Projects() {
  return (
    <section className='work-section'>
      <h2 className='section-title'>Portfolio</h2>
      <span className='section-subtitle'>Check My Portfolio</span>
      <Portfolio />
    </section>
  )
}

export default Projects