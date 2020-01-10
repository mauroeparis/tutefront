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
          </Switch>
        </Router>
      </div>
  );
}

export default App;
