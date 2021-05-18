import React, { useState, useEffect } from "react";
import image from "./favicon.png";
import { Link } from 'react-router-dom'
import './Navbar.css';

function Navbar() {
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
      <div className="navbar">
        <div className={navbar ? "header sticky" : "header"}>
        {/* <div className="header" > */}
          <a className="logo">
            {/* ⠀ */}
            <img className="image" src={image} />
          </a>
          <ul>
            <li>
            <Link to="/">
              <a>Home</a>
              </Link>
            </li>
            <li>
            <Link to="/about" >
              <a>About</a>
              </Link>
            </li>
            <li>
            <Link to="/services" >
              <a>Services</a>
              </Link>
            </li>
            <li>
            <Link to="/portfolio" >
              <a>Portfolio</a>
              </Link>
            </li>
            <li>
            <Link to="/team" >
              <a>Team</a>
              </Link>
            </li>
          </ul>
        </div>
        </div>
        );
    }
    
    export default Navbar;