import React from "react";
import Logo1 from "../img/LOGO.svg";
import "../headerBg.css";

const Header = () => {
  return (
    <>
      <div className="container">
        <div className="header">
          <div className="header-background"></div>
          <img className="logo" src={Logo1} alt="logo" />
        </div>
      </div>
    </>
  );
};

export default Header;
