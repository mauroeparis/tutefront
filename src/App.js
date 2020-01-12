import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from './components/home';
import Gallery from './components/gallery';
import Book from './components/book';
import Navbar from './components/navbar';
import Login from './components/login';

function App() {

  return (
      <div className="App">
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/gallery">
              <Gallery />
            </Route>
            <Route path="/book">
              <Book />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
          </Switch>
        </Router>
      </div>
  );
}

export default App;
