import React, {useState,useEffect} from "react";
import "./App.css";

function App() {

  const [navbar, setNavbar] = useState(false);
  
  const changeNavColor = () => {
    if(window.scrollY >= 80 * (window.innerHeight/100)){
      setNavbar(true);
    }
    else{
      setNavbar(false);
    }
  }

  window.addEventListener('scroll', changeNavColor);

  
  return (
    <div className="App">
      <div className={navbar ? "header sticky" : "header"}>
        <a className="logo">Logo</a>
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
    </div>
  );
}

export default App;
