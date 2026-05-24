import React, {useState, useEffect} from 'react'
import './selector.css'

const Selector = () => {
  const [data, setdata] = useState(0);
  useEffect(() => {
    fetch('http://localhost:3001/todasSuc')
    .then((res) => res.json())
    .then((response) => {
      setdata(response);
    }
    )
  }, [])

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