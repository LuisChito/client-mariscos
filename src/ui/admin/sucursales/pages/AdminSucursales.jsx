import React , {Suspense} from 'react'
import HeaderAdmin from '../../../components/headerAdmin'
import Selector from '../components/Selector'
import PagesTable from '../tabla/pages/PagesTable'

const AdminSucursales = () => {
  return (
    <>
    <HeaderAdmin/>
    <PagesTable/>
    </>
  )
}

export default AdminSucursales