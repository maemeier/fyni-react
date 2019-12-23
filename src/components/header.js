import React from "react";
import "../homepage.css";
import Logo1 from "../img/LOGO.svg";

import fynista from "../img/fynista.svg";
const Header = () => {
  return (
    <div className="container">
      <img className="fynista1" src={fynista} alt="logo" />

      <img className="logo4" src={Logo1} alt="logo" />
    </div>
  );
};

export default Header;
