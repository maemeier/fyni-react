import React from "react";
import LogoList from "./logoList";
import Logo1 from "../img/LOGO.svg";

import fynista from "../img/fynista.svg";
import "../header.css";

const Homepage = () => {
  return (
    <div className="container">
      <img className="fynista1" src={fynista} alt="logo" />

      <img className="logo4" src={Logo1} alt="logo" />

      <div className="banner">
        <h1 className="banner"> DESIGN AND CODE</h1>
        <div className="banner"></div>
      </div>

      <LogoList />

      <div className="content-center">
        <h2 className="construction">
          <strong>in progress </strong>
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
