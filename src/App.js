import React, { useState, useEffect } from "react";
import "./App.css";
import image from "./favicon.png";

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

  return (
    <div className="App">
      <div className={navbar ? "header sticky" : "header"}>
        <a className="logo">
        ⠀
          {/* <img className="image" src={image} /> */}
        </a>
        <ul>
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Services</a>
          </li>
          <li>
            <a>Portfolio</a>
          </li>
          <li>
            <a>Team</a>
          </li>
        </ul>
      </div>
      <div className="banner"></div>
      <div class="wrapper">
        <div class="static-txt">I'm </div>
        <ul class="dynamic-txts">
          <li>
            <span>Tirupati Raman Mishra</span>
          </li>
          <li>
            <span>a Frontend Developer</span>
          </li>
          <li>
            <span>a Moon Lover</span>
          </li>
          <li>
            <span>also Down to Earth</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
