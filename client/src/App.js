
import { Welcome } from './components/Welcome'
import {Home} from './components/Home'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
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
        {/* <Route path="/">
          <Welcome />
        </Route> */}
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
