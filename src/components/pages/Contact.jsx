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
      <div className='contact-box2'>
        <div className='contact-info'>
          <h1>Contactame</h1>
          <h5>Hola si tienes alguna idea personal o para tu negocio que quisieras que cobre vida puedes contactarme por este medio y sera un placer ayudarte.</h5>
        </div>
        <form className='contact-form' onSubmit={handleSubmit}>
          <div className='contact-name'>
            <label htmlFor="nombre">Nombre:</label><br />
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
            <label htmlFor="correo">Correo:</label><br />
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
              <label htmlFor="mensaje">Mensaje:</label><br />
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
                  <span className='contact-msn--container'>{messages}</span>
                </p> : null
              }
            </div>
          </div>
        </form>
        <div className='contact-box1'>
            <span>Social</span>
          <div className='contact-social'>
            <div className='icon-box'>
            <a className='btn-social' href="https://github.com/SirUlrich1988?tab=repositories" target={'_blank'}><box-icon name='github' type='logo' color='#ffffff' ></box-icon></a>
            </div>
            <div className='icon-box'>
            <a className='btn-social' href="https://www.linkedin.com/in/luis-ernesto-vallejo-mata-246037245/" target={'_blank'}><box-icon name='linkedin-square' type='logo' color='#220bef' ></box-icon></a>
            </div>
            <div className='icon-box'>
            <a className='btn-social' href="https://www.facebook.com/Angmistico" target={'_blank'}><box-icon name='facebook-square' type='logo' color='#1a00ff' ></box-icon></a>
            </div>
          </div>
            <span>Todos los derechos reservados 2023</span>
        </div>
      </div>
    </div>
  )
}

export default Contact