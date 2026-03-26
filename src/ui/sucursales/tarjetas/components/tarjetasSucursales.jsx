import React from 'react'
import './tarjetasSucursales.css'

const sucursales = [
  {
    nombre: 'Arboledas',
    imagen: '/imgs/layout/sucursales/bolivia.webp',
    direccion: 'Tlalnepantla, Estado de Mexico'
  },
  {
    nombre: 'Acapulco',
    imagen: '/imgs/layout/sucursales/acapulco.webp',
    direccion: 'Zona Acapulco'
  },
  {
    nombre: 'Campeche',
    imagen: '/imgs/layout/sucursales/campeche.webp',
    direccion: 'Zona Campeche'
  },
  {
    nombre: 'Merida',
    imagen: '/imgs/layout/sucursales/merida.webp',
    direccion: 'Zona Merida'
  },
  {
    nombre: 'Monterrey',
    imagen: '/imgs/layout/sucursales/monterrei.webp',
    direccion: 'Zona Monterrey'
  }
]

const TarjetasSucursales = () => {
  return (
    <section className='sucursales-tarjetas'>
      <div className='sucursales-tarjetas-grid'>
        {sucursales.map((sucursal) => (
          <article className='sucursal-card' key={sucursal.nombre}>
            <div className='sucursal-card-imagen-container'>
              <img
                src={sucursal.imagen}
                alt={`Sucursal ${sucursal.nombre}`}
                className='sucursal-card-imagen'
              />
            </div>
            <div className='sucursal-card-contenido'>
              <h3>{sucursal.nombre}</h3>
              <p>{sucursal.direccion}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default TarjetasSucursales