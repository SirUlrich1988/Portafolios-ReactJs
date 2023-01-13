import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {


  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-black">
        <div className="container-fluid">
          <Link to='/'>
            <img src="https://w0.peakpx.com/wallpaper/579/715/HD-wallpaper-data-brain-number-science-tech.jpg" width='50' />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
              <Link className="navbar-brand" to='/aboutMe'>Acerca de Mi</Link>
              </li>              
              <li className="nav-item">
              <Link className="navbar-brand" to='/skills'>Habilidades</Link>
              </li>
              <li className="nav-item">
              <Link className="navbar-brand" to='/proyects'>Proyectos</Link>
              </li>
              <li className="nav-item">
              <Link className="navbar-brand" to='/contact'>Contacto</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar