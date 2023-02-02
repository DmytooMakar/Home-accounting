import React from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import Home from './components/Pages/Home/Home.jsx';
import Accounting from './components/Pages/Accounting/Accounting.jsx';
import Authorization from './components/Pages/Authorization/Authorization.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (<>
    <Router>
      <Header />
      <Switch>
          <Route path="/authorization">
            <div className='wrapper'>
              <Authorization />
              <Footer />
            </div>
          </Route>
          <Route path="/accounting">
            <div className='wrapper'>
              <Accounting />
              <Footer />
            </div>
          </Route>
          <Route path="/publication-of-articles">
            <div className='wrapper'>
              <main>
                <h2>Its mac test</h2>
              </main>
              <Footer />
            </div>
          </Route>
          <Route path="/">
            <div className='wrapper'>
              <Home />
              <Footer />
            </div>
          </Route>
        </Switch>   
    </Router>
  </>);
}

export default App;