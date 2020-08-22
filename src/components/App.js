import React from "react";
import "../styles/App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navbar } from "../components";

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Working</h1>
        <Switch>
          <Route to="/" component={Navbar} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
