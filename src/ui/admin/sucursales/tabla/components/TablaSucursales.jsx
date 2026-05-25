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
  
  return (
    <>
    <div className="cont-tablas-sucursales">
      <div className="sucursales-header-row">
        <h3 className="sucursales-title">Gestión de sucursales</h3>
        <Boton />
      </div>
    </div>
    </>
  )
}

export default TablaSucursales