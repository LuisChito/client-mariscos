import React from 'react'
import './imagenBanner.css'

const imagenBanner = ({ children }) => {
  return (
    <div className='banner-fondo'>
      <img src="/imgs/layout/banner-menu.png" alt="Banner" className='banner-imagen' />
      <div className='banner-content'>
        {children}
      </div>
    </div>
  )
}

export default imagenBanner
