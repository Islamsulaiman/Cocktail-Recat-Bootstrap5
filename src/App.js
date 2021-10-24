import React from "react";

import Home from "./pages/home";
import About from "./pages/about";
import Error from "./pages/error";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />

          <Route path='*' component={Error} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
