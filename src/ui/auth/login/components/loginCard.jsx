import React from 'react'
import './loginCard.css'
import favicon from '../../../../../public/imgs/favicon.png'

const LoginCard = () => {

let iniciarSesion = () => {
  
}
  return (
    <div className='contenedor-login'>
      <p className='txt'>Inicia sesión</p>
      <form>
        <label htmlFor="username">Usuario: </label>
        <input type="text" id="usuario" name="usuario" />
        <br />
        <label htmlFor="password">Contraseña: </label>
        <input type="password" id="password" name="password" />
      </form>
      <p className="info">Dale click a la imagen para iniciar sesión</p>
      <img src={favicon} alt="Logo" className='logo' onClick={iniciarSesion} />
    </div>
  )
}

export default LoginCard
