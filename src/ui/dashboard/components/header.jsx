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
                <a href="/contact">Contactanos</a>
                <a href="#menu">Ver Menú</a>
                <a href="#reservations">Reservas</a>
            </nav>
        </div>
    </div>
)
}

export default Header
