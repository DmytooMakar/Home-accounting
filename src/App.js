import { useState } from "react"
import React from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Blog from "./components/Pages/Blogs/Blog/Blog.jsx";
import Blogs from "./components/Pages/Blogs/Blogs.jsx";
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import Home from './components/Pages/Home/Home.jsx';
import Accounting from './components/Pages/Accounting/Accounting.jsx';
import Authorization from './components/Pages/Authorization/Authorization.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [ user, setUser ] = useState({
    email : "",
    password : ""
  });

  return (<>
    <Router>
      <Header />
      <Switch>
        <Route path="/blogs/:blogId">
          <div className='wrapper' >
            <Blog />
            <Footer />
          </div>
        </Route>
        <Route path="/blogs">
          <div className='wrapper'>
            <Blogs />
            <Footer />
          </div>
        </Route>
        <Route path="/authorization">
          <div className='wrapper'>
            <Authorization setUser={setUser} user={user} />
            <Footer />
          </div>
        </Route>
        <Route path="/accounting">
          <div className='wrapper'>
            <Accounting />
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