import React from 'react'
import './selector.css'

const Selector = () => {
  return (
    <>
    <section className='opciones'>
        <h3 className='title'>Selecciona las acciones que vas a hacer</h3>
        <div className="selector">
            <nav>
                <a href="agregar" className='verde'>Agregar sucursales</a>
                <a href="editar" className='amarillo'>Editar status</a>
                <a href="borrar" className='rojo'>Borrar sucursales</a>
            </nav>
        </div>
    </section>
    </>
  )
}

export default Selector