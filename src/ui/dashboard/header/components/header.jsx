import React from 'react'
import './header.css'

const Header = () => {
return (
    <div className="header">
        <div className="header-logo">
            <img src="/imgs/favicon.png" alt="Logo" className="logo" />
        </div>
        <div>
            <nav className="header-nav">
                <a href="/">INICIO</a>
                <a href="/menu">MENÚ</a>
                <a href="/reservas">SUCURSALES</a>
                <a href="/contacto">CONTACTANOS</a>
            </nav>
        </div>
    </div>
)
}

export default Header
