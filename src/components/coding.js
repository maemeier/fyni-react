import React from "react";
import Logo1 from "../img/LOGO.svg";
import Roomers from "../img/roomers.png";
import Chatzii from "../img/chatzii.png";
import Ipad2 from "../img/ipad2.png";
import Ipad1 from "../img/ipad1.png";
import Footer from "./footer";
import Case from "../img/case.png";
import Navbar from "./navigation";
import Header from "./headerNonSvg";
import { Link } from "react-router-dom";
import "../coding.css";

const Homepage = () => {
  return (
    <div className="container">
      <Navbar />
      <Header />

      <div>
        <img className="logo" src={Logo1} alt="logo" />
      </div>

      <div className="banner">
        <h1 className="banner">Projects - Coding</h1>
        <div className="banner"></div>
      </div>

      <div className="content-center">
        <div>
          <a href="https://eatwithme-react.herokuapp.com">
            <img
              className="eatwithme"
              src="https://res.cloudinary.com/fyni/image/upload/v1576902441/eatwithme_blkxeg.png"
              alt="logo"
            />
          </a>
        </div>
        <div className="eatwithmeText">
          <p>
            <h2 className="weatherHeader">EATWITHME</h2>
            <br />
            Discover unique social dining website that will set you up to eat
            with strangers. Create your event or join the locals for breakfast,
            lunch or dinner. Because eating together is always more delicious
            than eating alone!
          </p>
          <ul>
            <li>Sign up and Login authentication</li>
            <li>Create event and upload image to the event</li>
            <li>Check proflie and book event</li>
            <li>Booking event</li>
            <li>Check list and details of Restaurants</li>
          </ul>
        </div>
      </div>

      <div className="content-center">
        <div className="iphoneLeft">
          <a
            className="linkUrl"
            target="_blank"
            href="https://jardin-fyni.netlify.com/"
          >
            <img className="ipad" src={Ipad1} alt="logo" />
          </a>
          <h2 className="weatherHeader">JARDIN DE L'AMOUR</h2>
          <p className="text">
            Jardin de l'amour: online shop for preordering wedding bouquets as
            well as other signature packages for wedding. Built with react, all
            data stored in localhost. Responsive for desktop, mobile phone and
            tablette.
          </p>
        </div>

        <div className="iphoneLeft">
          <a
            className="linkUrl"
            target="_blank"
            href="https://dictionary-fyni.netlify.com/"
          >
            <img className="ipad" src={Ipad2} alt="logo" />
          </a>
          <h2 className="weatherHeader">DICTIONARY</h2>
          <p className="text">
            Dictionary is a single web page for storing color vocabulary. This
            project was a coding test for intership program. The vocabulary can
            be added, edited and deleted (if you wish). -- Built with react.
          </p>
        </div>
      </div>

      <div className="grap"></div>

      <div className="content-center">
        <div>
          Avaliable on 29th Dec 2019
          <img className="appImage sky" src={Case} alt="logo" />
        </div>
        <div>
          Avaliable on 29th Dec 2019
          <img className="appImage sky" src={Chatzii} alt="logo" />
        </div>
        <div>
          Avaliable on 5th Jan 2020
          <img className="appImage sky" src={Roomers} alt="logo" />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Homepage;
