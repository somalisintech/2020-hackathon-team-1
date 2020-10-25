
import { Welcome } from './components/Welcome'
import { ConfirmationPage } from './components/ConfirmationPage'
import { Home } from './components/Home'
import React, { useState } from 'react'

import { NavigationDrawer } from './components/NavigationDrawer'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const DefaultContainer = () => (
  <div>
    <NavigationDrawer />
    <Route path="/">
      <Home />
    </Route>
    <Route path="/confirmation">
      <ConfirmationPage />
    </Route>
  </div>
)

function App() {

  const [organization, setOrganization] = useState("Toronto General");

  function handleChange(org) {
    setOrganization(org);
  }
  return (
    <Router >
      <div>
        <Switch>
          <Route path="/welcome">
            <Welcome
              organization={organization}
              setOrganization={handleChange}
            />
          </Route>
          <Route component={DefaultContainer} />
        </Switch>
      </div>
    </Router >
  );
}

export default App;


