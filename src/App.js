import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import routes from "./Config/routes"
import { AuthProvider } from './Context';
import AppRoutes from './Components/AppRoutes';


const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          {routes.map((route) => (
            <AppRoutes
              exact={route.exact}
              key={route.path}
              path={route.path}
              component={route.component}
              isProtected={route.isProtected}
            />
          ))}
        </Switch>
      </Router>
    </AuthProvider>

  )
}

export default App;
