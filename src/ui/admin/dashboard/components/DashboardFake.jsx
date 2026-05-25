import React, {useState, useEffect} from 'react'
import './DashboardFake.css'

const DashboardFake = () => {

    const [data, setData] = useState({});

    useEffect(() => {
        // consumimos la api
        fetch('http://localhost:3001/dashboard')
        .then((res) => res.json())
        .then((resultado) => {
            setData(resultado);
        })
    }, []);

  return (
    <div className="dashboard-fake">
       <p>Sucursales activas: {data.sucActivas ?? '-'}</p>
       <p>Sucursales totales: {data.sucTotales ?? '-'}</p>
       <p>Contador comida: {data.contComida ?? '-'}</p>
       <p>Contador servicio: {data.contServicio ?? '-'}</p>
       <p>Contador ventas: {data.contVentas ?? '-'}</p>
    </div>
  )
}

export default DashboardFake