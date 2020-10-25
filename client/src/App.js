import { Welcome } from './components/Welcome';
import Preview from './components/Preview';
import { Home } from './components/Home';
import React, { useState } from 'react';

import { NavigationDrawer } from './components/NavigationDrawer';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const DefaultContainer = () => (
  <div>
    <NavigationDrawer />
    <Route path="/home">
      <Home />
    </Route>
  </div>
);

function App() {
  const [organization, setOrganization] = useState('');

  return (
    <Router>
      <div>
        <Switch>
          <Route path="/welcome">
            <Welcome />
          </Route>
          <Route path="/preview">
            <NavigationDrawer title="Customers" />
            <Preview />
          </Route>
          <Route component={DefaultContainer} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
