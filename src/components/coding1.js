import React from "react";
import Logo from "../img/LOGO.svg";
import Logo1 from "../img/LOGO.svg";
import Eatwithme from "../img/eatwithme.png";
import ThaiAir from "../img/thaiAir.png";
import Roomers from "../img/roomers.png";
import Chatzii from "../img/chatzii.png";

import Ipad from "../img/ipad.png";
import Footer from "./footer";
import "../coding.css";

import Navbar1 from "./Navbar1";

const Homepage = () => {
  return (
    <div className="container">
      <Navbar1 />
      <div className="content-center ">
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

      <div className="body">
        <div className="content-center">
          <div className="iphoneLeft">
            <img className="ipad" src={Ipad} alt="logo" />
            <h2 className="weatherHeader">WEATHER</h2>
            <p className="text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud abore et dolore magna aliqua.
            </p>
            <button className="weatherButton">LETZ CHECK</button>
          </div>

          <div className="iphoneLeft">
            <img className="ipad" src={Ipad} alt="logo" />
            <h2 className="weatherHeader">JARDIN DE L'AMOUR</h2>
            <p className="text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud abore et dolore magna aliqua.
            </p>
            <button className="weatherButton">LETZ CHECK</button>
          </div>
        </div>
      </div>

      <div className="content-center">
        <img className="appImage sky" src={Roomers} alt="logo" />
        <img className="appImage sky" src={Chatzii} alt="logo" />
        <img className="appImage sky" src={Roomers} alt="logo" />
      </div>

      <Footer />
    </div>
  );
};

export default Homepage;
