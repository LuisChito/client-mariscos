import React from 'react'
import './formularioQuejas.css'

const FormularioQuejas = () => {
  return (
    <section className="formulario-wrapper">
      <h2>Quejas y sugerencias</h2>
      <p>Tu opinion nos ayuda a mejorar el servicio de la marisqueria.</p>

      <form className="formulario-quejas">
        <label htmlFor="nombre">Nombre</label>
        <input
          id="nombre"
          name="nombre"
          type="text"
          placeholder="Ej. Laura Salinas"
          required
        />

        <label htmlFor="correo">Correo electronico</label>
        <input
          id="correo"
          name="correo"
          type="email"
          placeholder="correo@ejemplo.com"
          required
        />

        <label htmlFor="tipo">Tipo de comentario</label>
        <select id="tipo" name="tipo" defaultValue="sugerencia">
          <option value="sugerencia">Sugerencia</option>
          <option value="queja">Queja</option>
        </select>

        <label htmlFor="categoria">Categoria</label>
        <select id="categoria" name="categoria" defaultValue="servicio">
          <option value="servicio">Servicio</option>
          <option value="comida">Comida</option>
          <option value="tiempo">Tiempo de espera</option>
          <option value="higiene">Higiene</option>
        </select>

        <label htmlFor="visita">Fecha de visita</label>
        <input
          id="visita"
          name="visita"
          type="date"
          required
        />

        <label htmlFor="resena">Resena</label>
        <textarea
          id="resena"
          name="resena"
          rows="4"
          placeholder="Cuentanos tu experiencia..."
          required
        />

        <label>Calificacion (maximo 5 estrellas)</label>
        <div className="rating-stars" role="radiogroup" aria-label="Calificacion en estrellas">
          <input id="estrella-5" type="radio" name="rating" value="5" required />
          <label htmlFor="estrella-5" title="5 estrellas">★</label>

          <input id="estrella-4" type="radio" name="rating" value="4" />
          <label htmlFor="estrella-4" title="4 estrellas">★</label>

          <input id="estrella-3" type="radio" name="rating" value="3" />
          <label htmlFor="estrella-3" title="3 estrellas">★</label>

          <input id="estrella-2" type="radio" name="rating" value="2" />
          <label htmlFor="estrella-2" title="2 estrellas">★</label>

          <input id="estrella-1" type="radio" name="rating" value="1" />
          <label htmlFor="estrella-1" title="1 estrella">★</label>
        </div>

        <label className="checkbox-row" htmlFor="aceptaContacto">
          <input
            id="aceptaContacto"
            name="aceptaContacto"
            type="checkbox"
          />
          Acepto que me contacten para seguimiento
        </label>

        <button type="submit">Enviar comentario</button>
      </form>
    </section>
  )
}

export default FormularioQuejas
