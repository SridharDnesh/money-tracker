import { useEffect, useState } from 'react';
import { PublicRoutes, PrivateRoutes } from './router';

function App() {
	// const [token, setToken] = useState(null);

	// useEffect(() => {
	// 	const auth_token = localStorage.getItem('auth_token');
	// 	if (auth_token) {
	// 		setToken(auth_token);
	// 	}
	// }, []);

	return (
		<>
			<PrivateRoutes />;
			<PublicRoutes />;
		</>
	);
}

export default App;
