import React, { useState, useEffect } from "react";
import "./App.css";
import {
  BrowserRouter,
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import AboutPage from "./Pages/About";
import HomePage from "./Pages/HomePage";
import Portfolio from "./Pages/Portfolio";
import Services from "./Pages/Services";
import TeamPage from "./Pages/Team";
import Navbar from "./Navbar";
import Navbar2 from "./Navbar2";

function App() {
  const [navbar, setNavbar] = useState(false);

  const changeNavColor = () => {
    if (window.scrollY >= 80 * (window.innerHeight / 100)) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeNavColor);

  let routes;
  routes = (
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/about" exact component={AboutPage} />
      <Route path="/services" exact component={Services} />
      <Route path="/portfolio" exact component={Portfolio} />
      <Route path="/team" exact component={TeamPage} />
    </Switch>
  );

  return (
    <Router>
      <div className="navbar-change">
      {/* {navbar ? <Navbar2 className="navbar-change"/> : <Navbar className="navbar-change"/>} */}
      </div>
      <Navbar />
      <div className="App">
        <main>{routes}</main>
      </div>
    </Router>
  );
}

export default App;
