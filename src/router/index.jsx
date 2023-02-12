import React from "react";
import { Route, Switch } from "wouter";
import { SignIn, SignUp } from "../screens";

export function PublicRoutes() {
  return (
    <Switch>
      <Route path="/signup" component={SignUp} />
      <Route path="/" component={SignIn} />
      <Route>404 Page not found</Route>
    </Switch>
  );
}

export function PrivateRoutes() {
  return (
    <Switch>
      <Route path="/dashboard">Dashboard</Route>
    </Switch>
  );
}
