import React from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './components/HomePage/Home';
import Accounting from './components/WorkingPage/Accounting';

import './App.css';

function App() {
  return (<>
    <h1>Hello</h1>
    <Router>
      <header>
        <nav>
          <ul className='navigation'>
            <li >
              <Link className='link' to="/">Home</Link>
            </li>
            <li>
              <Link className='link' to="/logIn">Log In</Link>
            </li>
            <li >
              <Link className='link' to="/accounting">System</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/logIn">

          </Route>
          <Route path="/accounting">
            <Accounting />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </header>   
    </Router>
  </>
    
  );
}

export default App;