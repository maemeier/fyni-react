import React from "react";
import { Link } from "react-router-dom";
import fullstackLogo from "../img/fullstack.png";
import designLogo2 from "../img/designLogo2.png";
import Logo1 from "../img/LOGO.svg";
import Footer from "./footer";
import Header from "./header";
import ThaiAir from "../img/thaiAir.png";
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

      <div className="content-center1">
        <div className="thaiAir"></div>
        <div>
          <h2 className="designText">
            Design won't save the world, but it makes you app looks good
          </h2>
          <p className="mobileText1">
            I have been working in a design filed for 5 years and mostly
            interested in frontend developer, web design. Moreover I also open
            to learn from any good challenge that comes up which best challenges
            my intellect, creativity, problem sloving. If you are looking for
            junior front-end developer who loves to use react and capable of
            spending whole day fixing bugs. Just scroll a little bit down to the
            end of the page. You will find my contact. Hope to hear from you
            soon.--
          </p>
        </div>
      </div>
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
              <li>HTML & CSS</li>
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
