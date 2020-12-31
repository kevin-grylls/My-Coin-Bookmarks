import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { ContextProvider } from './context';
import { theme } from './styles';
import { Home, Details } from './containers';
import { ROUTES } from './constants';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ContextProvider>
        <Router>
          <Switch>
            <Route path={`${ROUTES.DETAILS}/:id`}>
              <Details />
            </Route>
            <Route path={[`${ROUTES.HOME}`, `${ROUTES.BOOKMARK}`, '*']}>
              <Home />
            </Route>
          </Switch>
        </Router>
      </ContextProvider>
    </ThemeProvider>
  );
}

export default App;
