import React, {useReducer} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import TokenContext, { tokenReducer } from "./TokenContext";
import Book from './components/book';
import Gallery from './components/gallery';
import Home from './components/home';
import Login from './components/login';
import Navbar from './components/navbar';

function App() {
  const [token, tokenDispatch] = useReducer(
      tokenReducer,
      {token: localStorage.token}
  );

  return (
      <div className="App">
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <TokenContext.Provider value={{ token, tokenDispatch }}>
              <Route path="/book/:id">
                <Book />
              </Route>
              <Route path="/gallery">
                <Gallery />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
            </TokenContext.Provider>
          </Switch>
        </Router>
      </div>
  );
}

export default App;
