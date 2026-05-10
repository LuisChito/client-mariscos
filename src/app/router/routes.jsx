import { createBrowserRouter, Navigate } from 'react-router-dom'

import Dashboard from '@ui/dashboard/pages/dashboard'
import Sucursales from '@ui/sucursales/pages/sucursales'

// admin
import FormularioQuejas from '@ui/dashboard/formulario/pages/formulario'

// Login
import Login from '@ui/auth/login/pages/login'


const rutasProtegidas = ({children}) => {
	const sesion = localStorage.getItem('user_session');
	// si no hay una sesion lo redirigimos al login
	if (!sesion) {
		return <Navigate to="/login" replace />;
	}
	// si hay sesion mostramos el elemento children
    return children;
}

export const router = createBrowserRouter([
	// Rutas Normales
	{
		path: '/',
		element: <Dashboard />,
	},
	{
		path: '/sucursales',
		element: <Sucursales />,
	}, 

	// Rutas admin
	{
		path: 'admin/sucursales',
		element: (
			<rutasProtegidas>
				<FormularioQuejas/>
			</rutasProtegidas>
		)
	},

	//Login
	{
		path: '/login',
		element: <Login />,
	}

])
