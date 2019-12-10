import React from "react";
import Logo from "../img/LOGO.svg";
import NavBar from "../components/navBar";
import Iphone from "../img/iphoneRoll.png";
import ThaiAir from "../img/thaiAir.png";
import Skyscanner from "../img/skyscanner.png";
import Airbnb from "../img/airbnb.png";
import TeeShop from "../img/teeShop.png";
import "../design.css";
import NavBar1 from "./Navbar1";

const Design = () => {
  return (
    <div className="container">
      <NavBar1 />
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
      <div className="content-center">
        <div className="content-center">
          <img className="iphone floating" src={Iphone} alt="logo" />
          <div>
            <h1 className="iphoneHeader">
              Design won't save the world, but it makes your apps look good
            </h1>
            <p className="iphoneText">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
      <div className="content-center">
        <div className="content-center">
          <div>
            <h1 className="thaiAirHeader">REDESIGN THAI AIRWAY</h1>
            <p className="thaiAirText">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </div>
        </div>
        <img className="thaiAir" src={ThaiAir} alt="logo" />
      </div>

      <h1 className="mobileHeader">MOBILE APP</h1>
      <p className="mobileText">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur.
      </p>

      <div className="content-center">
        <img className="appImage sky" src={Skyscanner} alt="logo" />
        <img className="appImage sky" src={Airbnb} alt="logo" />
        <img className="appImage sky" src={TeeShop} alt="logo" />
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

export default Design;
