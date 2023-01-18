import React from 'react'
import '../styles/proyects.css'

const Proyects = () => {

  return (
    <div className='proyects-container'>
      <div className='proyects-box'>
        <div className='proyects-item'>
          <span className='proyect-title'>Quotebox App</span>
          <a href="https://primer-entregable-react.netlify.app/" target='_blank'>
            <img className='proyects-img' src="assets/quotebox.png" alt="proyecto quote" />
          </a>
          <span className='proyect-description'>Una aplicacion hecha con ReactJs, JavaScript y Css para mostrar una frase aleatoria de algun autor con un cambio de color diferente cada vez.</span>
          <a className='btn-repo' href="https://github.com/SirUlrich1988/QuoteBox-App-React" target='_blank'><i className='bx bxl-github'></i></a>
        </div>
        <div className='proyects-item'>
        <span className='proyect-title'>Weather App</span>
          <a href="https://we4ther4pp-re4ct.netlify.app/" target='_blank'>
            <img className='proyects-img' src="assets/weatherapp.png" alt="proyecto weatherapp" />
          </a>
          <span className='proyect-description'>Una aplicacion creada con ReactJs, JavaScript, Css y el consumo de una API para mostrar el clima de la ubicacion del dispositivo o la opcion de una busqueda personalizada para el usuario.</span>
          <a className='btn-repo' href="https://github.com/SirUlrich1988/WatherApp-React" target='_blank'><i className='bx bxl-github'></i></a>
        </div>
        <div className='proyects-item'>
        <span className='proyect-title'>Rick and Morty App</span>
          <a href="https://tercer-entregable-r3act.netlify.app/" target='_blank'>
            <img className='proyects-img' src="assets/rickandmorty.png" alt="proyecto rickandmorty" />
          </a>
          <span className='proyect-description'>Una pagina realizada con ReactJs, JavaScript, Css, Hooks y el consumo de la API Rick and Morty ademas de poderse ver en dispositivos mobiles. En base en la serie se puede mostrar los habitantes de cada planeta segun la busqueda del usuario.</span>
          <a className='btn-repo' href="https://github.com/SirUlrich1988/App-RickAndMorty-React/tree/main/src" target='_blank'><i className='bx bxl-github'></i></a>
        </div>
        <div className='proyects-item'>
        <span className='proyect-title'>Pokedex</span>
          <a href="https://pokedex-4pp-re4ct.netlify.app/" target='_blank'>
            <img className='proyects-img' src="assets/pokedex.png" alt="proyecto pokedex" />
          </a>
          <span className='proyect-description'>Una app creada con ReactJs, JavaScript, Css, Redux y el consumo de una Api de Pokemon. En este pokedex nos permite visualizar los pokemon por orden, ademas de poder filtrarlos por tipo, nombre o id y poder ver un poco de la informacion de cada uno.</span>
          <a className='btn-repo' href="https://github.com/SirUlrich1988/PokeApp-React" target='_blank'><i className='bx bxl-github'></i></a>
        </div>
      </div>
    </div>
  )
}

export default Proyects