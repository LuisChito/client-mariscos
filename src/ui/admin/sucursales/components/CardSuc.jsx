import React, { useState, useEffect } from 'react'
import './CardSuc.css'

const CardSuc = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // consumimos la api
        fetch('http://localhost:3001/todasSuc')
          .then((res) => res.json())
          .then((resultado) => {
            setData(resultado);
            setLoading(false);
          })
          .catch((error) => {
            console.error("Error al traer los datos del dashboard:", error);
            setLoading(false);
          });
      }, []);
    
    return (
  <section className='sucursales'>
    <div className='sucursales-tarjetas'>
      {loading ? (
        <p>Cargando sucursales...</p>
      ) : (
        data.map((sucursal) => (
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
            </div>
            
          </article>
        ))
      )}
    </div>
  </section>
);
}

export default CardSuc