import React from 'react'
import './carrucel.css'

const images = [
  '/imgs/layout/header/mariscos.jpg',
  '/imgs/layout/header/molcajete.jpg',
  '/imgs/layout/header/pasta.jpg',
  '/imgs/layout/header/plato.jpg',
]

const Carrucel = ({ children }) => {

  return (
    <section className="carrucel">
      <div className="carrucel-slides">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            className="carrucel-image"
          />
        ))}
      </div>
      <div className="carrucel-content">{children}</div>
    </section>
  )
}

export default Carrucel
