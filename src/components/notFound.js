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
        <h2 className="construction">
          <strong>UNDERCONSTRACTION </strong>
          <br />
          <strong> WILL BE BACK 19th Dec</strong>
        </h2>
      </div>

      <div className="footer">
        <div className="svgBlock">
          <svg
            className="svg2"
            width="1443"
            height="448"
            viewBox="0 0 1443 448"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1442 447H1V1L1442 210.882V447Z"
              fill="#242424"
              stroke="black"
            />
          </svg>
        </div>
        <div className="content-center">
          <div className="contackBlock">
            <p className="contact"> CONTACT</p>
            <div className="info">
              <div>
                {" "}
                <strong>Mae</strong> Kangsadan
              </div>
              <div>
                {" "}
                <a className="footerLink" href="https://www.github/maemeier">
                  {" "}
                  <strong>Github:</strong> maemeier
                </a>
              </div>
              <div>
                {" "}
                <a
                  className="footerLink"
                  href="https://www.pinterest.com/fynista/"
                >
                  <strong>Pinterest:</strong> fynista
                </a>
              </div>
            </div>
            <div className="info2">
              <div>
                <strong>Email: </strong>info@fyni.de
              </div>
              <div>
                <strong> Linkdel: </strong>maemeier
              </div>
              <div>
                {" "}
                <strong>Instagram: </strong>fynista
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
