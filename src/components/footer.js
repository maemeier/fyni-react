import React from "react";

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
            <div className="info">
              <div>
                {" "}
                <strong>Email: </strong>bovenden31@gmail.com
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
