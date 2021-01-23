import './App.css';

//Les differents composants
import NavBar from './Components/NavBar';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from './Components/Home'
import Login from './Components/Login';
import About from './Components/About';
import SignUp from './Components/SignUp';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component = { Home }/>
        <Route exact path="/login" component = { Login } />
        <Route exact path="/signup" component = { SignUp } />
        <Route exact path="/about" component = { About } />
      </Switch>
    </Router>
  );
}

export default App;
