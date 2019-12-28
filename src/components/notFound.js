import React from "react";
import LogoList from "./logoList";
import Logo1 from "../img/LOGO.svg";
import Header from "./headerNonSvg";
import Footer from "./footer";
import Navbar from "./Navbar1";

import fynista from "../img/fynista.svg";
import "../notFound.css";
const Homepage = () => {
  return (
    <div className="container">
      <Navbar />
      <Header />

      <div className="banner">
        <h1 className="banner"> Opps, Page not found</h1>
        <div className="banner"></div>
      </div>

      <div className="content">
        <button>contact Holmes</button>
        <button>back Home</button>
      </div>
      <p>
        You could hire me, I will build the page you're looking for <br /> with
        these technologies
      </p>
      <LogoList />
      <Footer />
    </div>
  );
};

export default Homepage;
