import React from 'react'
import './Horario.css'

const Horario = () => {
  return (
    <div className="horario-container">
      <table className="horario-table">
        <thead>
          <tr>
            <th>Servicio</th>
            <th>Días Disponibles</th>
            <th>Horario</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Atención al cliente</td>
            <td rowSpan="2">Lunes a Viernes</td>
            <td>9:00 AM - 6:00 PM</td>
          </tr>
          <tr>
            <td>Pedidos especiales de mariscos</td>
            <td>10:00 AM - 5:00 PM</td>
          </tr>
          <tr>
            <td>Reservaciones para eventos</td>
            <td>Lunes a Domingo</td>
            <td>9:00 AM - 7:00 PM</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Horario