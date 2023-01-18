import React, { useState } from 'react'
import '../styles/contact.css'

const Contact = () => {

  const [input, setInput] = useState({})
  const [messages, setMessage] = useState(null)

  function handleSubmit(e) {
    e.preventDefault()
    const email = 'luisern29@gmail.com'
    // alert ('Enviado')
    const URL_BASE = `https://formsubmit.co/ajax/${email}`

    fetch(URL_BASE, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(input)
    })
      .then(response => response.json())
      .then(data => {
        if (data) {
          setMessage('Tu mensaje se ha enviado correctamente')
          setInput({})
          setTimeout(() => {
            setMessage(null)
          }, 3000)
        }
      })
      .catch(error => {
        if (error) {
          setMessage('Sucedio un error, intentalo mas tarde por favor')
          setInput({})
          setTimeout(() => {
            setMessage(null)
          }, 3000)
        }
      })
  }


  function handleChange({ name, value }) {
    setInput({ ...input, [name]: value })
  }

  return (
    <div className='contact-container'>
      <div className='contact-box'>
        <div className='contact-info'>
          <h1>Contactame</h1>
          <h5>Hola si tienes alguna idea personal o para tu negocio que quisieras que cobre vida puedes contactarme por este medio y sera un placer ayudarte.</h5>
        </div>
        <form className='contact-form' onSubmit={handleSubmit}>
          <div className='contact-name'>
            <label className='contact-label' htmlFor="nombre">Nombre:</label><br />
            <input
              id='nombre'
              type="text"
              name='nombre'
              value={input.nombre || ''}
              onChange={(e) => handleChange(e.target)}
              required
            />
          </div>
          <div className='contact-email'>
            <label className='contact-label' htmlFor="correo">Correo:</label><br />
            <input
              id='correo'
              type="email"
              name='correo'
              value={input.correo || ''}
              onChange={(e) => handleChange(e.target)}
              required
            />
          </div>
          <div className='contact-message'>
            <div className='message-box'>
              <label className='contact-label' htmlFor="mensaje">Mensaje:</label><br />
              <textarea
                id='mensaje'
                name='mensaje'
                value={input.mensaje || ''}
                onChange={(e) => handleChange(e.target)}
                cols="30"
                rows="10">
              </textarea>
            </div>
            <div className='input-box'>
            <input 
            class="btn btn-primary" 
            type="submit" 
            value="Enviar"
              />
              {
                messages ? <p className='contact-msn'>
                  <span className='contact-msn-container'>{messages}<br /><i class='bx bx-check-circle'></i></span>
                </p> : null
              }
            </div>
          </div>
        </form>
        {/* <div className='contact-footer'>
          <div className='contact-media'>
          <i class='bx bx-envelope' ></i>
          <span>Correo : luisern29@gmail.com</span>
          <i class='bx bxl-whatsapp' ></i>
          <span>Telefono : +52 99 81838461</span>
          </div>
        </div> */}
            <span className='social-title'>Social</span>
          <div className='contact-social'>
            <a className='btn-repo' href="https://github.com/SirUlrich1988?tab=repositories" target={'_blank'}><i class='bx bxl-github'></i></a>
            <a className='btn-social' href="https://www.linkedin.com/in/luis-ernesto-vallejo-mata-246037245/" target={'_blank'}><i class='bx bxl-linkedin-square' ></i></a>
            <a className='btn-social' href="https://www.facebook.com/Angmistico" target={'_blank'}><i class='bx bxl-facebook-square'></i></a>
          </div>
            <span>Todos los derechos reservados 2023</span>
      </div>
    </div>
  )
}

export default Contact