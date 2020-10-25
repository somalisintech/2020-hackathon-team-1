
import { Welcome } from './components/Welcome'
import {Home} from './components/Home'
import {NavigationDrawer} from './components/NavigationDrawer'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const DefaultContainer = () => (
  <div>
    <NavigationDrawer/>
 <Route path="/home">
        <Home />
      </Route> 
  </div>
)

function App() {
  return (
    <Router>
    <div>
      <Switch>
        <Route path="/welcome">
          <Welcome />
        </Route>
        <Route component={DefaultContainer}/>
      
      </Switch>
    </div>
  </Router>
  );
}

export default App;


 