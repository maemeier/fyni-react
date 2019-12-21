import React from "react";
import { Link } from "react-router-dom";
import fullstackLogo from "../img/fullstack.png";
import designLogo2 from "../img/designLogo2.png";
import Logo1 from "../img/LOGO.svg";
import Navbar1 from "./Navbar1";
import Footer from "./footer";
import LogoList from "./logoList";
import Header from "./header";
import "../homepage.css";

const Homepage = () => {
  return (
    <div className="container">
      <Navbar1 />
      <Header />

      <div>
        <img className="logo" src={Logo1} alt="logo" />
      </div>

      <div className="banner">
        <h1 className="banner"> DESIGN AND CODE</h1>
        <div className="banner"></div>
      </div>

      <LogoList />
      <div className="content-center">
        <p className="firstBlock">
          <strong>
            Hello World! Welcome to FYNI.DEV, My name is Mae Kangsadan, Junior
            Front-end Developer and Graphic Designer --
          </strong>
        </p>

        <p className="firstBlock">
          I have been working in a design filed for 5 years and done work for
          more than 200 customers in Switzerland and Germany. I have a huge
          interest in art, programing, technologies and travel. In the middle of
          2019 I joined a fullstack developer bootcamp for 9 weeks and found
          that coding is fun and very addictive. --
        </p>
        <p className="firstBlock">
          I like to code things from scratch. All of my coding projects are
          built with React.js -- including this website. If you are looking for
          junior front-end developer who loves to use react and capable of
          spending whole day fixing bugs and play with CSS. Just scroll a little
          bit down to the end of the page. You will find my contact. Hope to
          hear from you soon.
        </p>
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
