import React from 'react'
import './Imagenes.css'

const Imagenes = () => {
  const images = [
    '/imgs/menu/menu.png',
    '/imgs/menu/menu2.png',
    '/imgs/menu/menubebidas.png',
    '/imgs/menu/menubebidas2.png',
  ]

  return (
    <div className='contImgs'>
      {images.map((img) => (
        <div className="card">
          <img src={img} alt="" />
        </div>
      ))}
    </div>
  )
}

export default Imagenes