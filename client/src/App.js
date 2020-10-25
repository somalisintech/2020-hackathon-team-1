
import { Welcome } from './components/Welcome'
import { Home } from './components/Home'
import React, { useState } from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  const [organization, setOrganization] = useState("");

  return (
    <Router>
      <div>
        {/* <nav>
        <ul>
          <li>
            <Link to="/welcome">Weok</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </nav> */}

        <Switch>
          <Route path="/">
            <Welcome organization={organization}
              setOrganization={setOrganization} />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          {/* <Route path="/">
          <Home />
        </Route>  */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
