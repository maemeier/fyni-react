import React from "react";
import { Link } from "react-router-dom";
import fullstackLogo from "../img/fullstack.png";
import designLogo2 from "../img/designLogo2.png";
import Logo1 from "../img/LOGO.svg";
import Footer from "./footer";
import Header from "./header";
import Middle from "./middle";

import "../homepage.css";

const Homepage = () => {
  return (
    <div className="container">
      <Header />

      <div>
        <img className="logo" src={Logo1} alt="logo" />
      </div>

      <div className="banner">
        <h1 className="banner"> DESIGN AND CODE</h1>
        <div className="banner"></div>
      </div>

      <Middle />

      <div className="banner">
        <h1 className="banner"> Projects</h1>
        <div className="banner"></div>
      </div>

      <div className="content-center">
        <div>
          <Link to="/coding">
            <img
              className="fullstackLogo skyLeft"
              src={fullstackLogo}
              alt="logo"
            />
          </Link>
        </div>
        <div>
          <Link to="/NotFound">
            <img className="designLogo skyLeft" src={designLogo2} alt="logo" />
          </Link>
        </div>
        <div>
          <div className="firstBlock skyLeft">
            <p>The technologies that I always use to build my projects</p>
            <ul>
              <li>HTML & CSS, styled components</li>
              <li>React.js</li>
              <li>Semantic UI</li>
              <li>MongoDb</li>
              <li>Javascript</li>
              <li>Git</li>
              <li>Affinity Designer and Sketch</li>
            </ul>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Homepage;
