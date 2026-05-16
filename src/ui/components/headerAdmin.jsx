import React from 'react'
import './header.css'

const Header = () => {
return (
    <div className="header">
        <div className="header-logo">
            <a href="/">
                <img src="/imgs/logotipo.png" alt="Logo" className="logo" />
            </a>
        </div>
        <div>
            <nav className="header-nav">
                <a href="/admin/sucursales">Sucursales</a>
                <a href="/statds">Estadisticas</a>
                <a href="/logout">Cerrar Sesion</a>
            </nav>
        </div>
    </div>
)
}

export default Header
