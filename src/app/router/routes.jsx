import { createBrowserRouter } from 'react-router-dom'
import Dashboard from '@ui/dashboard/pages/dashboard'

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Dashboard />,
	},
])
