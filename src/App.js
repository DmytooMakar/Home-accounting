import React from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './components/HomePageMain/Home';
import Accounting from './components/WorkingPage/Accounting';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (<>
    <Router>
      <header>
        <nav className='navigation_container'>
          <div className='navigation'>
            <Link className='navigation_link' to="/">
              <img className='logo' src='./favicon.png' />
              Home&Accounting
            </Link>
            <Link className='navigation_link' to="/accounting">System</Link>
            <Link className='navigation_link' to="/logIn">Log In</Link>
          </div>
        </nav>
      </header>
      <Switch>
          <Route path="/logIn">
              <h1>Hello2</h1>
          </Route>
          <Route path="/accounting">
            <Accounting />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>   
    </Router>
  </>);
}

export default App;