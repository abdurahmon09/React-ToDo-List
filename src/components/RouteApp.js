import React, { useContext } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import AuthContext from '../context';
import { privateRoutes, publicRoutes } from '../router/Router';

function RouteApp(props) {
  // eslint-disable-next-line no-unused-vars
  const {isAuth, setIsAuth} = useContext(AuthContext)

  return (
    isAuth 
      ?  <Switch>
          {privateRoutes.map(route => (
          <Route 
            path={route.path}
            component={route.component}
            exact={route.exact}
            key={route.path}
          />
          ))}
          <Redirect to="/posts" />
        </Switch>
      :
      <Switch>
        {publicRoutes.map(route => (
          <Route 
            path={route.path}
            component={route.component}
            exact={route.exact}
            key={route.path}
          />
        ))}
        <Redirect to="/login" />
      </Switch>
  );
}

export default RouteApp;