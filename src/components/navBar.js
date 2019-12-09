import React from "react";
import Logo from "../img/LOGO.svg";

const NavBar = () => {
  return (
    <div>
      {" "}
      <div className="ui secondary menu">
        <img className="Logo" src={Logo} alt="logo" />
      </div>
    </div>
  );
};

export default NavBar;
