import React, { Suspense } from 'react'
import Header from '../../components/header'
import ImagenBanner from '../header/components/imagenBanner'
import TarjetasSucursales from '../tarjetas/components/tarjetasSucursales'

const sucursales = () => {
  return (
    <>
    <Header/>
    <Suspense fallback={<div>Cargando sucursales...</div>}>
      <TarjetasSucursales/>
    </Suspense>
    </>
  )
}

export default sucursales
