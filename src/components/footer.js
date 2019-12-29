import React from "react";
import "../footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const icon = <FontAwesomeIcon size="2x" color="var(--white)" icon={faGithub} />;

const Footer = () => {
  return (
    <div>
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
            <ul className="listFooter">
              <li className="contactFooter">code with love ♥️ www.fyni.dev</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
