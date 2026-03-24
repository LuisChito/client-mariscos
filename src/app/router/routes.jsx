import { createBrowserRouter } from 'react-router-dom'
import Dashboard from '@ui/dashboard/pages/dashboard'
import Sucursales from '@ui/sucursales/pages/sucursales'

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Dashboard />,
	},
	{
		path: '/sucursales',
		element: <Sucursales />,
	}
])
