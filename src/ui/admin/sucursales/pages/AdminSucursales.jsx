import React , {Suspense} from 'react'
import HeaderAdmin from '../../../components/headerAdmin'
import Cards from '../components/CardSuc'

const AdminSucursales = () => {
  return (
    <>
    <HeaderAdmin/>
    <Suspense fallback = {<div>Cargando sucursales...</div>}>
    <Cards/>
    </Suspense>
    </>
  )
}

export default AdminSucursales