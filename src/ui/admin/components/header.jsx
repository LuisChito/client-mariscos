import React from 'react'
import logotipo from '../../../../public/imgs/logotipo.png'
import './header.css'

const header = () => {
  return (
    <div className="headerContainer">
        <div className="logo">
        <img src={logotipo} alt="logo" className='logo' />
        </div>
        <div className="opciones">
         <nav className="header-nav">
                <a href="/">SUCURSALES</a>
                <a href="/menu">VER STADS</a>
                <a href="/sucursales">CERRAR SESION</a>
                <a href="/contacto">CONTACTANOS</a>
            </nav>

        </div>
    </div>
  )
}

export default header