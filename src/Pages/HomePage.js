import React, { useState, useEffect } from "react";
import "./HomePage.css";


function HomePage() {

  return (
    <div className="home">
      
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

export default HomePage;
