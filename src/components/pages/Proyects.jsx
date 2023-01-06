import React from 'react'
import '../styles/proyects.css'

const Proyects = () => {
  return (
    <div className='proyects-container'>
      <div className='proyects-box'>
        <div className='quote-box'>
          <a href="https://primer-entregable-react.netlify.app/" target={'_blank'}>
            <img className='proyects-img' src="../public/proyect/quotebox.png" alt="proyecto quote" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Proyects