import React from 'react'
import '../styles/skills.css'

const Skills = () => {
  return (
    <div className='skills-container'>
      <div className='skills-box'>
        <div className='skills-items'>
        <i className='bx bxl-html5'></i>
          <span>HTML5</span>
        </div>
        <div className='skills-items'>
        <i className='bx bxl-css3' ></i>
          <span>CSS</span>
        </div>
        <div className='skills-items'>
        <i className='bx bxl-javascript' ></i>
          <span>JAVASCRIPT</span>
        </div>
        <div className='skills-items'>
        <i className='bx bxl-react' ></i>
          <span>REACTJS</span>
        </div>
        <div className='skills-items'>
        <i className='bx bxl-redux' ></i>
          <span>REDUX</span>
        </div>
        <div className='skills-items'>
        <i className='bx bxl-bootstrap'></i>
          <span>BOOSTRAP</span>
        </div>
        <div className='skills-items'>
        <i className='bx bxl-nodejs' ></i>
          <span>NODEJS</span>
        </div>
        <div className='skills-items'>
        <i className='bx bxl-postgresql' ></i>
          <span>POSTGRESQL</span>
        </div>
      </div>
    </div>
  )
}

export default Skills