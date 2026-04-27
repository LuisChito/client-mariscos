import React, { use } from 'react'
import './tarjetasSucursales.css'

const sucursalesPromise = fetch('http://localhost:3001/sucursales')
  .then((response) => {
    if (!response.ok) {
      throw new Error('Error al obtener sucursales')
    }
    return response.json()
  })
  .then((data) => (Array.isArray(data) ? data : []))

const TarjetasSucursales = () => {
  const sucursales = use(sucursalesPromise)

  return (
    <section className='sucursales'>
      <div className='sucursales-tarjetas'>
        {sucursales.map((sucursal) => (
          <article className='sucursal-card' key={sucursal.nombre}>
            <div className='sucursal-imagen-cont'>
              <img
                src={sucursal.imagen}
                alt={`Sucursal ${sucursal.nombre}`}
                className='sucursal-card-imagen'
              />
            </div>
            <div className='sucursal-card-contenido'>
              <h3>{sucursal.nombre}</h3>
              <p>{sucursal.direccion}</p>
              {sucursal.mapa ? (
                <div className='sucursal-card-mapa'>
                  <iframe
                    src={sucursal.mapa}
                    allowFullScreen
                    loading='lazy'  
                    referrerPolicy='no-referrer-when-downgrade'
                    title={`Mapa de ${sucursal.nombre}`}
                  />
                </div>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default TarjetasSucursales