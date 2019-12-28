import React from "react";
import aboutMae from "../img/mae.png";
import skills from "../img/skill.png";
import softskills from "../img/softSkill.png";
import Header from "./headerNonSvg";
import Footer from "./footer";
import Navbar from "./Navbar1";
import "../aboutMe.css";

const AboutMe = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="banner">
        <h1 className="banner"> About Me</h1>
        <div className="banner"></div>
      </div>
      <div>
        <p className="aboutMeText">
          Hi again! I am passionate about building unique websites and make them
          live on browser .If you like my profile and looking for frontend
          developer, don't hesitage to contact me. <br /> <br />{" "}
          <strong>Email: info@fyni.de</strong>
        </p>
      </div>
      <div className="aboutMeBox">
        <img className="aboutMe skyLeft" src={aboutMae} alt="logo" />
        <img className="aboutMe skyLeft" src={skills} alt="logo" />
        <img className="aboutMe skyLeft" src={softskills} alt="logo" />
      </div>

      <Footer />
    </div>
  );
};

export default AboutMe;
