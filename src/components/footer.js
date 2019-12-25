import React from "react";
import "../footer.css";

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
            <p className="contact"> CONTACT</p>
            <div className="info"></div>
            <ul className="listFooter">
              <li className="contactFooter">
                <strong>Email :</strong> maemeier@live.com
              </li>
              <li className="contactFooter">
                {" "}
                <strong>Github : </strong> maemeier
              </li>
              <li className="contactFooter">
                {" "}
                <strong>Linkdin : </strong> Kangsadan Palioudis
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
