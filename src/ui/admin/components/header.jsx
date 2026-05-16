import React from 'react'
import BannerImagen from './bannerImagen'
import './header.css'

const Header = () => {
  return (
    <BannerImagen>
      <div className="headerContainer">
        <div className="logo">
          <img src="/imgs/logotipo.png" alt="logo" className="logo" />
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
    </BannerImagen>
  )
}

export default Header