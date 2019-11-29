import React from "react";
import Logo from "./img/LOGO.svg";
import Logo1 from "./img/LOGO.svg";
import Eatwithme from "./img/eatwithme.png";
import ThaiAir from "./img/thaiAir.png";
import Roomers from "./img/roomers.png";
import Chatzii from "./img/chatzii.png";
import Iphone from "./img/iphone.png";
import Ipad from "./img/ipad.png";
import GreenTea from "./img/green-tea.png";
import "./coding.css";

const Homepage = () => {
  return (
    <div className="container">
      <div className="ui secondary menu">
        <img className="Logo" src={Logo} alt="logo" />
        <a className="item right">Home</a>
        <a className="item ">Coding</a>
        <a className="item left">Design</a>
      </div>
      <div className="header">
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
        <img className="eatwithme " src={Eatwithme} alt="logo" />
        <div>
          <h1 className="eatHeader">EATWITHME</h1>
          <p className="eatText">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <button>LETZ CHECK</button>
        </div>
      </div>

      <div className="wrapper">
        <div className="body2">
          <div className="iphoneLeft">
            <img className="weather" src={Iphone} alt="logo" />
            <h2 className="weatherHeader">WEATHER</h2>
            <p className="text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud abore et dolore magna aliqua.
            </p>
            <button className="weatherButton">LETZ CHECK</button>
          </div>
        </div>

        <div className="body2">
          <div className="iphoneLeft">
            <img className="ipad" src={Ipad} alt="logo" />
            <h2 className="weatherHeader">JUST-IN-CASE</h2>
            <p className="text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud abore et dolore magna aliqua.
            </p>
            <button className="weatherButton">LETZ CHECK</button>
          </div>
        </div>
      </div>

      <div className="allApp">
        <img className="appImage sky" src={Roomers} alt="logo" />
        <img className="appImage sky" src={Chatzii} alt="logo" />
        <img className="appImage sky" src={GreenTea} alt="logo" />
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
  );
};

export default Homepage;
