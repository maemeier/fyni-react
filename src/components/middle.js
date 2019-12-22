import React from "react";
import ThaiAir from "../img/thaiAir.png";
import "../homepage.css";

const Middle = () => {
  return (
    <div className="content-center1">
      <div>
        <img className="thaiAir" src={ThaiAir} alt="logo" />
      </div>
      <div>
        <h2 className="designTitle">
          &#60; Hello World! My name is Mae Kangsadan, Web Developer and Graphic
          Designer />
        </h2>
        <p className="mobileP">
          I have been working in a design field for over 5 years and always
          interested in front-end development & web design. I am also open to
          learn from any projects that challenge my intellect, creativity, and
          problem sloving skills. So if you are looking for junior front-end
          developer who loves to use react and capable of spending whole day
          fixing bugs, just scroll down a little bit to the end of the page till
          you find my contact! Hope to hear from you soon.--
        </p>
      </div>
    </div>
  );
};

export default Middle;
