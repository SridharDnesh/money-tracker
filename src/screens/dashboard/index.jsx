import React, { useEffect } from 'react';
import { useLocation } from 'wouter';
import { routes } from '../../router/routes';

const token = localStorage.getItem('auth_token');
const { login } = routes;

function Dashboard() {
	const [location, setLocation] = useLocation();

	useEffect(() => {
		if (!token) {
			setLocation(login);
		}
	}, [token]);
	return <div> Dashboard</div>;
}

export default Dashboard;
