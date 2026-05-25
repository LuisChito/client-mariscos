import React from 'react'
import './FormularioModal.css'

const FormularioModal = ({ onClose }) => {
  const enviarFormulario = async (event) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const imagen = data.get('imagen')

    if (!imagen || imagen.type !== 'image/webp' || !imagen.name.toLowerCase().endsWith('.webp')) {
      alert('La imagen debe ser un archivo .webp')
      return
    }

    const respuesta = await fetch('http://localhost:3001/sucursales', {
      method: 'POST',
      body: data
    })

    if (respuesta.ok) {
      alert('Sucursal creada')
      event.currentTarget.reset()
      if (onClose) onClose()
    } else {
      const error = await respuesta.json().catch(() => ({}))
      alert(error.message || 'Error al crear la sucursal')
    }
  }

  return (
    <div className="contenedorFormularioSucursal">
      <form onSubmit={enviarFormulario}>
        <label htmlFor="nombre">Nombre de la sucursal:</label>
        <input type="text" id="nombre" name="nombre" required />

        <label htmlFor="imagen">Imagen:</label>
        <input type="file" id="imagen" name="imagen" accept=".webp,image/webp" required />

        <label htmlFor="direccion">Dirección:</label>
        <input type="text" id="direccion" name="direccion" required />

        <label htmlFor="mapa">Iframe:</label>
        <textarea id="mapa" name="mapa" required />

        <button type="submit">Guardar sucursal</button>
      </form>
    </div>
  )
}

export default FormularioModal