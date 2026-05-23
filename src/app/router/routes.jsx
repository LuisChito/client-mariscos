import { createBrowserRouter, Navigate } from 'react-router-dom'

import Dashboard from '@ui/dashboard/pages/dashboard'
import Sucursales from '@ui/sucursales/pages/sucursales'

// admin
import DashboardAdmin from '@ui/admin/dashboard/pages/dashboard'
import PlatosAdmin from '@ui/admin/platos/pages/platos'
import AdminSucursales from '../../ui/admin/sucursales/pages/AdminSucursales'

// Login
import Login from '@ui/auth/login/pages/login'


const RutasProtegidas = ({children}) => {
	const sesion = localStorage.getItem('user_session');
	// si no hay una sesion lo redirigimos al login
	if (!sesion) {
		return <Navigate to="/login" replace />;
	}
	// concertimos el json a objeto para leer sus propiedades
	const sesionUsuario = JSON.parse(sesion);
	// leemos si es admin 'usuario' 
	if (sesionUsuario.usuario === 'admin') {
		return children;	
	} else {
		localStorage.removeItem('user_session');
		alert('No eres admin');
		// Si hay sesion pero no es admin lo mandamos pa fuera
		return <Navigate to="/login" replace />;
	}
}

const Logout = () => {
    localStorage.clear(); // borrar el localStorage
    return <Navigate to="/login" replace />; // redirigir de inmediato al login
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
		path: 'admin/dashboard',
		element: (
			<RutasProtegidas>
				<DashboardAdmin/>
			</RutasProtegidas>
		)
	},
	{
		path: 'admin/platos',
		element: (
			<RutasProtegidas>
				<PlatosAdmin/>
			</RutasProtegidas>
		)
	},
	{
		path: 'admin/sucursales',
		element: (
			<RutasProtegidas>
				<AdminSucursales/>
			</RutasProtegidas>
		)
	},

	//Login
	{
		path: '/login',
		element: <Login />,
	},
	{
        path: '/logout',
        element: <Logout />,
    }
])
