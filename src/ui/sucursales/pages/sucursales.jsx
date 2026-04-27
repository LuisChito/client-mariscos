import React, { Suspense } from 'react'
import Header from '../../dashboard/header/components/header'
import ImagenBanner from '../header/components/imagenBanner'
import TarjetasSucursales from '../tarjetas/components/tarjetasSucursales'

const sucursales = () => {
  return (
    <>
    <ImagenBanner>
      <Header />
    </ImagenBanner>
    <Suspense fallback={<div>Cargando sucursales...</div>}>
      <TarjetasSucursales/>
    </Suspense>
    </>
  )
}

export default sucursales
