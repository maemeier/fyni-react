import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/LOGO.svg";
import affinity from "../img/affinity.png";
import database from "../img/dataBaseLogo.png";
import css3 from "../img/css3logo.png";
import jsLogo from "../img/jsLogo.png";
import reactLogo from "../img/reactLogo.png";
import html from "../img/htmlLogo.png";
import fyni from "../img/fyniLogo.png";
import fullstackLogo from "../img/fullstack.png";
import designLogo2 from "../img/designLogo2.png";
import Logo1 from "../img/LOGO.svg";
import Navbar1 from "./Navbar1";
import Footer from "./footer";
import "../homepage.css";

const Homepage = () => {
  return (
    <div className="container">
      <Navbar1 />
      <div className="content-center">
        <svg
          className="svg1"
          width="1439"
          height="474"
          viewBox="0 0 1439 474"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1439 0H0V474L1439 175.156V0Z" fill="#E8BCBC" />
          <path d="M1439 0H0V474L1439 175.156V0Z" fill="url(#paint0_linear)" />
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="719"
              y1="-104.18"
              x2="718.787"
              y2="689"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#A26E6E" />
              <stop offset="1" stop-color="white" stop-opacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div>
        <img className="logo" src={Logo1} alt="logo" />
      </div>

      <div className="banner">
        <h1 className="banner"> DESIGN AND CODE</h1>
        <div className="banner"></div>
      </div>

      <div className="listLogo logos">
        <img className="logo1" src={html} alt="logo" />
        <img className="logo1" src={jsLogo} alt="logo" />
        <img className="logo1" src={css3} alt="logo" />
        <img className="logo1" src={reactLogo} alt="logo" />
        <img className="logo1" src={database} alt="logo" />
        <img className="logo1" src={affinity} alt="logo" />
      </div>

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
          <a href="/coding">
            <img
              className="fullstackLogo skyLeft"
              src={fullstackLogo}
              alt="logo"
            />
          </a>
        </div>
        <div>
          <a href="/notFound">
            <img className="designLogo skyLeft" src={designLogo2} alt="logo" />
          </a>
        </div>
        <div>
          <div className="firstBlock skyLeft">
            <p>The technologies that I always use to build my projects</p>
            <ul>
              <li>HTML & CSS</li>
              <li>React.js</li>
              <li>UI Semantic</li>
              <li>MongoDb</li>
              <li>Javascript</li>
              <li>GitTower</li>
              <li>Affinity Designer und Sketch</li>
            </ul>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Homepage;
