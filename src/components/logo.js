import React from "react";

import affinity from "../img/affinity.png";
import database from "../img/dataBaseLogo.png";
import css3 from "../img/css3logo.png";
import jsLogo from "../img/jsLogo.png";
import reactLogo from "../img/reactLogo.png";
import html from "../img/htmlLogo.png";
import "../homepage.css";

import "../homepage.css";
const LogoList = () => {
  return (
    <div>
      <div className="listLogo logos">
        <img className="logo1" src={html} alt="logo" />
        <img className="logo1" src={jsLogo} alt="logo" />
        <img className="logo1" src={css3} alt="logo" />
        <img className="logo1" src={reactLogo} alt="logo" />
        <img className="logo1" src={database} alt="logo" />
        <img className="logo1" src={affinity} alt="logo" />
      </div>
    </div>
  );
};

export default LogoList;
