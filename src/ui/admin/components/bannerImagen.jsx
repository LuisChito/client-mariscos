import React from 'react'
import './bannerImagen.css'

const BannerImagen = ({ children }) => {
  return (
    <div className='banner-fondo'>
      <img src="../../../../public/imgs/layout/banner-menu.png" className='banner-imagen' />
      <div className='banner-content'>
        {children}
      </div>
    </div>
  )
}

export default BannerImagen