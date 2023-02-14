import React from 'react';
import { Route, Switch } from 'wouter';
import { SignIn, SignUp, Dashboard } from '../screens';
import { routes } from './routes';

const { dashboard, login, signup } = routes;
export function PublicRoutes() {
	console.log('PublicRoutes');
	return (
		<Switch>
			<Route path={signup} component={SignUp} />
			<Route path={login} component={SignIn} />
			<Route>404 Page not found</Route>
		</Switch>
	);
}

export function PrivateRoutes() {
	return (
		<Switch>
			<Route path={dashboard} component={Dashboard}></Route>
		</Switch>
	);
}
