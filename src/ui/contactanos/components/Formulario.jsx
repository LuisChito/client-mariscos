import React from 'react'
import './Formulario.css'

const Formulario = () => {
    const enviarFormulario = async (e) => {
        e.preventDefault()
        const data = new FormData(e.currentTarget)

        const respuesta = await fetch('http://localhost:3001/contacto', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                nombre: data.get('nombre'),
                motivo: data.get('motivo'),
                mensaje: data.get('mensaje')
            })
        })
        if (respuesta.ok) {
            alert('Mensaje enviado')
            e.currentTarget.reset()
            } else {
            alert('Error al enviar')
            }
        }

  return (
    <div className="contenedorFormulario">
      <div className="textoPq">
        <p>Contactanos</p>
      </div>

      <form onSubmit={enviarFormulario}>
        <label htmlFor="nombre">Nombre completo:</label>
        <input type="text" id="nombre" name="nombre" required />

        <label htmlFor="motivo">Motivo de contacto:</label>
        <select id="motivo" name="motivo" required>
          <option value="">Selecciona</option>
          <option value="Comida">Comida</option>
          <option value="Servicio">Servicio</option>
          <option value="Ventas">Ventas</option>
        </select>

        <label htmlFor="mensaje">Redacta tu mensaje</label>
        <textarea id="mensaje" name="mensaje" required />

        <button type="submit">Enviar</button>
      </form>
    </div>
  )
}

export default Formulario