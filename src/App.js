import React from "react";

import Navbar from "./components/navbar";
import Home from "./pages/home";
import About from "./pages/about";
import Error from "./pages/error";
import SingleCocktail from "./pages/singleCocktail";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/kabab/:id'>
            <SingleCocktail />
          </Route>
          <Route path='*' component={Error} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
