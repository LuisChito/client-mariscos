import React, { useState, useEffect } from 'react'
import './tarjetasSucursales.css'

const TarjetasSucursales = () => {
  const [data, setdata] = useState([])
  
  useEffect(() => {
    fetch("http://localhost:3001/sucursales")
    .then(res => res.json())
    .then(response => {
      setdata(response)
    })
  }, [])

  return (
    <section className='sucursales'>
      <div className='sucursales-tarjetas'>
        {data.map((sucursal) => (
          <article className='sucursal-card'>
            <div className='sucursal-imagen-cont'>
              <img
                src={sucursal.imagen}
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
                  />
                </div>
              ) : null} 
              {/* 
                este operador ":" con el "null" sirve para indicar que 
                si el mapa existe lo renderiza, si no no muestra nada:)
              */}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default TarjetasSucursales