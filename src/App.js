import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './components/Login';
import SignUp from './components/SignUp';
import Checkout from './components/Checkout';
import Home from './components/Home';
import Details from './components/Details';

function App() {
  return (
    <Router>
    <div>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/details">
            <Details />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </div>
    </Router>
  );
}

export default App;
