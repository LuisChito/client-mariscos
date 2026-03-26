import React from 'react'
import Header from '../../dashboard/header/components/header'
import ImagenBanner from '../header/components/imagenBanner'
import TarjetasSucursales from '../tarjetas/components/tarjetasSucursales'
import './sucursales.css'

const sucursales = () => {
  return (
    <div className='sucursales-page'>
      <ImagenBanner>
        <Header />
      </ImagenBanner>
      <TarjetasSucursales />
    </div>
  )
}

export default sucursales
