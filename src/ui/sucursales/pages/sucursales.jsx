import React from 'react'
import Header from '../../dashboard/header/components/header'
import ImagenBanner from '../header/components/imagenBanner'
import TarjetasSucursales from '../tarjetas/components/tarjetasSucursales'

const sucursales = () => {
  return (
    <>
    <ImagenBanner>
      <Header />
    </ImagenBanner>
    <TarjetasSucursales/>
    </>
  )
}

export default sucursales
