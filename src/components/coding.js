import React from "react";
import Logo from "../img/LOGO.svg";
import Logo1 from "../img/LOGO.svg";
import Eatwithme from "../img/eatwithme.png";
import ThaiAir from "../img/thaiAir.png";
import Roomers from "../img/roomers.png";
import Chatzii from "../img/chatzii.png";
import Iphone from "../img/iphone.png";
import Ipad2 from "../img/ipad2.png";
import Ipad1 from "../img/ipad1.png";
import Footer from "./footer";
import Screen from "../img/screen.png";
import Case from "../img/case.png";
import { Link } from "react-router-dom";
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

      <div className="content-center">
        <div>
          <a href="https://eatwithme-react.herokuapp.com">
            <img className="eatwithme" src={Eatwithme} alt="logo" />
          </a>
        </div>
        <div>
          <p className="eatwithmeText">
            Eatwithme -- Discover the unique social media dining website that
            set up you to with with strangers. Create your events and join
            breakfast or dinner with local people. Because eating together is
            always more delicious than eating alone!
          </p>
          <ul>
            <li>Sign up and Login Authentication</li>
            <li>Create events and upload image to the event</li>
            <li>Check proflie and booked events</li>
            <li>Booking events</li>
            <li>Check list and details's Restaurants</li>
          </ul>
        </div>
      </div>

      <div className="content-center">
        <div className="iphoneLeft">
          <img className="ipad" src={Ipad1} alt="logo" />
          <h2 className="weatherHeader">JARDIN DE L'AMOUR</h2>
          <p className="text">
            Online Webshop for preorder wedding bouquets. Jarding de l'amour
            also offers signature packages for wedding. Built with react, all
            data stored in localhost. Responsive for desktop, mobile phone and
            tablette.
          </p>
          <button className="weatherButton">
            {" "}
            <a
              className="linkUrl"
              target="_blank"
              href="https://jardin-fyni.netlify.com/"
            >
              LETZ CHECK
            </a>
          </button>
        </div>

        <div className="iphoneLeft">
          <img className="ipad" src={Ipad2} alt="logo" />
          <h2 className="weatherHeader">DICTIONARY</h2>
          <p className="text">
            Dictionary is a single web page for storing color vocabulary. This
            project was coding test for intership program. The vocabulary can be
            added, edited and deleted (if you want). -- Built with react.
          </p>
          <button className="weatherButton">
            <a
              className="linkUrl"
              target="_blank"
              href="https://dictionary-fyni.netlify.com/"
            >
              LETZ CHECK
            </a>
          </button>
        </div>
      </div>

      <div className="content-center">
        <img className="appImage sky" src={Case} alt="logo" />
        <img className="appImage sky" src={Chatzii} alt="logo" />
        <img className="appImage sky" src={Roomers} alt="logo" />
      </div>

      <Footer />
    </div>
  );
};

export default Homepage;
