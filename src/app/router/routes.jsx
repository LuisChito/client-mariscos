import { createBrowserRouter } from 'react-router-dom'

import Dashboard from '@ui/dashboard/pages/dashboard'
import Sucursales from '@ui/sucursales/pages/sucursales'

// Login
import Login from '@ui/auth/login/pages/login'

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Dashboard />,
	},
	{
		path: '/sucursales',
		element: <Sucursales />,
	},

	//Login
	{
		path: '/login',
		element: <Login />,
	}
])
