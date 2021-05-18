import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import LocalLibraryIcon from "@material-ui/icons/LocalLibrary";
import InfoIcon from "@material-ui/icons/Info";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import AULogo from "./favicon.png";
import "./Navbar2.css";
import { Link } from "react-router-dom";

function Navbar2() {
  return (
    <div>
      <div className="navheader">
        <div className="navheader__icons">
        <Link to="/" className="navheader__icon">
            <HomeIcon />
            <p>Home</p>
          </Link>
          <Link to="/services" className="navheader__icon">
            <LocalLibraryIcon />
            <p>Services</p>
          </Link> 
          </div>
          <img  src={AULogo} alt="AU Logo"></img>
          <div className="navheader__icons">
          <Link to="/about" className="navheader__icon">
            <InfoIcon />
            <p>About</p>
          </Link>
          <Link to="/portfolio" className="navheader__icon">
            <AssignmentIndIcon />
            <p>Portfolio</p>
          </Link>
        </div>
        
      </div>
    </div>
  );
}

export default Navbar2;
