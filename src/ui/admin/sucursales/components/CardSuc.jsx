import React, { useState, useEffect } from 'react'
import './CardSuc.css'

const CardSuc = () => {
  const [data, setdata] = useState([])
  
  useEffect(() => {
    fetch("http://localhost:3001/todasSuc")
    .then(res => res.json())
    .then(response => {
      setdata(response)
    })
    }, [])
  
    return (
    <section className='sucursalesAdmin'>
      <div className='sucursales-tarjetas'>
        {
          data.map((sucursal) => (
            <article className='sucursal-card'>
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
              <div className="status">
              <select
                value={sucursal.status ? 'true' : 'false'}
                onChange={(e) => {
                  const status = e.target.value === 'true';

                  fetch(`http://localhost:3001/sucursales/${sucursal.nombre}`, {
                    method: 'PUT',
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ status }),
                  }).then(() => {
                    setData((prev) =>
                      prev.map((item) =>
                        item.nombre === sucursal.nombre ? { ...item, status } : item
                      )
                    );
                  });
                }}
              >
                <option value="true">Activo</option>
                <option value="false">Inactivo</option>
              </select>
            </div>
            </article>
          ))}
      </div>
    </section>
  );
}

export default CardSuc