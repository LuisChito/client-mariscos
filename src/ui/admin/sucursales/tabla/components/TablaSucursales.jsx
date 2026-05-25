import React, {useState, useEffect} from 'react'
import './TablaSucursales.css'
import Boton from '../../boton/components/Boton'

const TablaSucursales = () => {
  const [data, setdata] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/todasSuc')
    .then(res => res.json())
    .then(response => {
      setdata(response)
    })
  }, [])

  const cambiarStatus = async (nombre, statusActual) => {
    const nuevoStatus = !statusActual

    try {
      const res = await fetch(`http://localhost:3001/sucursales/${nombre}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: nuevoStatus }),
      })

      if (!res.ok) {
        throw new Error('No se pudo actualizar el status')
      }
    } catch (_error) {
      alert('Error al cambiar el status')
    }
  }

  const eliminarSucursal = async (nombre) => {
    const confirmar = window.confirm(`¿Eliminar ${nombre} de la tabla?`)
    if (!confirmar) return

    try {
      const res = await fetch(`http://localhost:3001/sucursales/${nombre}`, {
        method: 'DELETE',
      })

      if (!res.ok) {
        throw new Error('No se pudo eliminar la sucursal')
      }
    } catch (_error) {
      alert('Error al eliminar la sucursal')
    }
  }
  
  return (
    <>
    <div className="cont-tablas-sucursales">
      <div className="sucursales-header-row">
        <h3 className="sucursales-title">Gestión de sucursales</h3>
        <Boton />
      </div>

      <div className="tabla-sucursales-container">
        <table className="tabla-sucursales">
          <thead>
            <tr>
              <th>NOMBRE</th>
              <th>DIRECCIÓN</th>
              <th>STATUS</th>
              <th>ACCIONES</th>
            </tr>
          </thead>
          <tbody>
            {data.length > 0 ? (
              data.map((sucursal) => (
                <tr key={sucursal.nombre}>
                  <td>{sucursal.nombre}</td>
                  <td>{sucursal.direccion}</td>
                  <td>{sucursal.status ? 'Activo' : 'Inactivo'}</td>
                  <td>
                    <button
                      type="button"
                      onClick={() => cambiarStatus(sucursal.nombre, sucursal.status)}
                    >
                      Status
                    </button>
                    {' '}
                    <button
                      type="button"
                      onClick={() => eliminarSucursal(sucursal.nombre)}
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4">Sin sucursales</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
    </>
  )
}

export default TablaSucursales