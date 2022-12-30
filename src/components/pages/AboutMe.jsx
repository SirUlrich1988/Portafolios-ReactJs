import React from 'react'
import '../styles/aboutMe.css'

const AboutMe = () => {
  return (
    <div className='about-container'>
      <div className='about-img'>
        <img className='profile-img' src="https://img.freepik.com/vector-premium/perfil-avatar-hombre-icono-redondo_24640-14044.jpg" alt="imagen de perfil" />
      </div>
      <div className='about-info'>
        <div className='about-box'>
          <span className='about-data'>
            Soy una persona comprometida con mi trabajo, me gustan los desafíos nuevos que exigen perseverancia de mi parte para lograrlos, tengo facilidad para relacionarme con las personas.
          </span>
          <span className='about-data'>
            En los lugares que pretendo trabajar siempre dare lo mejor de mi buscando
            todos los dias aprender y dar el 100% con el fin de que mi trabajo sirva
            para el exito de mi equipo de trabajo, mio y de mi empresa.
            Todo lo que logro aprender siempre busco perfecionarlo con el fin de
            generar una mejora que pueda facilitar y mejorar el desempeño de mis
            actividades.
          </span>
        </div>

      </div>

    </div>
  )
}

export default AboutMe