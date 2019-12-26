import React from "react";
import { Link } from "react-router-dom";
import fullstackLogo from "../img/fullstack.png";
import designLogo2 from "../img/designLogo2.png";
import Footer from "./footer";
import Header from "./headerNonSvg";
import NavBar from "./Navbar1";
import Middle from "./middle";

import "../homepage.css";

const Homepage = () => {
  return (
    <div className="container">
      <NavBar />
      <Header />
      <div className="centerLogo"></div>
      <div className="banner">
        <h1 className="banner"> CODE AND DESIGN</h1>
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
          <img className="designLogo skyLeft" src={designLogo2} alt="logo" />
        </div>
        <div>
          <div className="firstBlock skyLeft">
            <p className="projectText">
              Technologies that I use to build my projects
            </p>
            <ul>
              <li>HTML & CSS, Styled components</li>
              <li>React.js, Javascript</li>
              <li>Semantic UI</li>
              <li>MongoDb</li>
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
