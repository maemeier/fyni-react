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
        <h2 className="designText">
          Hello World! My name is Mae Kangsadan, Web Developer and Graphic
          Designer />
        </h2>
        <p className="mobileText1">
          I have been working in a design filed for 5 years and mostly
          interested in frontend developer, web design. Moreover I also open to
          learn from any good challenge that comes up which best challenges my
          intellect, creativity, problem sloving. If you are looking for junior
          front-end developer who loves to use react and capable of spending
          whole day fixing bugs. Just scroll a little bit down to the end of the
          page. You will find my contact. Hope to hear from you soon.--
        </p>
      </div>
    </div>
  );
};

export default Middle;
