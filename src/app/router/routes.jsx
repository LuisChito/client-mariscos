import { createBrowserRouter } from 'react-router-dom'
import Dashboard from '@ui/dashboard/index.jsx'

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Dashboard />,
	},
])
