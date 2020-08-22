import React from "react";
import "../styles/App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navbar, Product } from "../components";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="blank-nav"></div>
        <Navbar />
        <div className="blank-progress-bar"></div>
        <Switch>
          <Route to="/" exact component={Product} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
