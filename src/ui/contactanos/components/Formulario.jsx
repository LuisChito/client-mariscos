import React from 'react'
import './Formulario.css'

const Formulario = () => {
  return (
    <div className="contenedorFormulario">
        <div className="textoPq">
            <p>Contactanos</p>
        </div>
        <form action="">
            <div className="">
                <label htmlFor="nombre">Nombre completo:</label>
                <input type="text" id="nombre" required />
                <br />
                <label htmlFor="motivo">Motivo de contacto: </label>
                <select name="" id="motivo" required>
                    <option value="">Selecciona</option>
                    <option value="Comida">Comida</option>
                    <option value="Servicio">Servicio</option>
                    <option value="Ventas">Ventas</option>
                </select>
                <br />
                <label htmlFor="mensaje">Redacta tu mensaje</label>
                <br />
                <textarea name="name" id="mensaje" required ></textarea>
                <br />
                <button type='submit'>Enviar</button>
            </div>
        </form>
    </div>
  )
}

export default Formulario