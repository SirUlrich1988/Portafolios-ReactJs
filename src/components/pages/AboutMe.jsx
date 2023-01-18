import React from 'react'
import '../styles/aboutMe.css'

const AboutMe = () => {

  return (
    <div className='about-container'>
      <div className='about-img'>
          <img className='profile-img' src="./proyect/perfil.png" alt="imagen de perfil" />
      </div>
      <div className='about-info'>
        <div className='about-box'>
          <span className='about-data'>
            Durante mas de 10 años me desempeñe en posiciones relacionados a la industria de Alimentos y bebidas.
            He trabajado como Almacenista hasta llegar a cargos mas altos como Encargado de Almacen. Actualmente me capacite como Desarrollador Full Stack en Academlo, por lo cual me interesa poder desarrollarme como Programador Back End y poder aportar tanto las habilidades que adquiri como asi tambien crecer y tener la posibilidad de adquirir nuevos conocimientos.
          </span><br />
          <span className='about-data'>
            En los lugares que pretendo trabajar siempre dare lo mejor de mi buscando
            todos los dias aprender y dar el 100% con el fin de que mi trabajo sirva
            para el exito de mi equipo y de mi empresa.
            En todo lo que logro aprender siempre busco perfeccionarlo con el fin de
            crear una mejora que pueda facilitar y optimizar el desempeño de mis
            actividades.
          </span> <br />
        </div>
      </div>
      <div className='about-links'>
      <a className='links-items' href="./proyect/CV-Luis Ernesto Vallejo Mata.pdf" target={'_blank'}>Curriculum <br /> Desarrollador</a>
      <a className='links-items' href="./proyect/CV-Luis Ernesto Vallejo Mata.doc" target={'_blank'}>Curriculum <br /> Almacenista</a>
      </div>
    </div>
  )
}

export default AboutMe