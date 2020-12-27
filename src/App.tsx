import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { ContextProvider } from './context';
import { theme } from './styles';
import { Home } from './containers';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ContextProvider>
        <Router>
          <Switch>
            <Route path={['/', '/bookmark', '*']}>
              <Home />
            </Route>
          </Switch>
        </Router>
      </ContextProvider>
    </ThemeProvider>
  );
}

export default App;
