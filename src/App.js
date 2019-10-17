import React from "react";
import logo from "./logo.svg";
import affinity from "./img/affinity.png";
import database from "./img/dataBaseLogo.png";
import css3 from "./img/css3logo.png";
import jsLogo from "./img/jsLogo.png";
import reactLogo from "./img/reactLogo.png";
import html from "./img/htmlLogo.png";
import fyni from "./img/fyniLogo.png";
import "./landing.css";

function App() {
  return (
    <div>
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

      <div>
        <img className="logo" src={fyni} alt="logo" />
      </div>

      <p className="goldfish"> DESIGN AND CODE</p>
      <div className="underLineText"></div>

      <div className="containerBody">
        <h1 className="txt1">under construction</h1>
        <h2 className="txt2">Will be back on</h2>
        <h2 className="txt2">1 Nov 2019</h2>
      </div>

      <div className="listLogo">
        <img className="logo1" src={html} alt="logo" />
        <img className="logo1" src={jsLogo} alt="logo" />
        <img className="logo1" src={css3} alt="logo" />
        <img className="logo1" src={reactLogo} alt="logo" />
        <img className="logo1" src={database} alt="logo" />
        <img className="logo1" src={affinity} alt="logo" />
      </div>

      <div className="groupListName">
        <ul className="groupListName1">
          <li className="listName">Html</li>
          <li className="listName">Javascript</li>
          <li className="listName">CSS3</li>
          <li className="listName">React</li>
          <li className="listName">MongoDb </li>
          <li className="listName">Affinity</li>
        </ul>
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
}

export default App;
