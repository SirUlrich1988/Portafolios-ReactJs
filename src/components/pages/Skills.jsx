import React from 'react'
import '../styles/skills.css'

const Skills = () => {
  return (
    <div className='skills-container'>
      <div className='skills-box'>
        <div className='skills-img-html'>
          <img className='tecno-img' src="../public/img/html.png" alt="logo html" />
          <span>HTML5</span>
        </div>
        <div className='skills-img-css'>
          <img className='tecno-img' src="../public/img/css.png" alt="logo css" />
          <span>CSS</span>
        </div>
        <div className='skills-img-javascript'>
          <img className='tecno-img' src="../public/img/javascript.png" alt="logo javascript" />
          <span>JAVASCRIPT</span>
        </div>
        <div className='skills-img-react'>
          <img className='tecno-img' src="../public/img/react.png" alt="logo react" />
          <span>REACTJS</span>
        </div>
        <div className='skills-img-redux'>
          <img className='tecno-img' src="../public/img/redux.png" alt="logo redux" />
          <span>REDUX</span>
        </div>
        <div className='skills-img-boostrap'>
          <img className='tecno-img' src="../public/img/boostrap.png" alt="logo boostrap" />
          <span>BOOSTRAP</span>
        </div>
        <div className='skills-img-node'>
          <img className='tecno-img' src="../public/img/node.png" alt="logo node" />
          <span>NODEJS</span>
        </div>
        <div className='skills-img-postgresql'>
          <img className='tecno-img' src="../public/img/postgresql.png" alt="logo postgresql" />
          <span>POSTGRESQL</span>
        </div>
      </div>
    </div>
  )
}

export default Skills