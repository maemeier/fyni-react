import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../navbar.css";
import { FaAlignRight } from "react-icons/fa";
class NavBar1 extends Component {
  state = {
    isOpen: false
  };
  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <button
              type="button"
              className="nav-btn"
              onClick={this.handleToggle}
            >
              <FaAlignRight className="nav-icon" />
            </button>
          </div>
          <ul
            className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/coding">Coding</Link>
            </li>
            <li>
              <Link to="/NotFound">Design</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar1;
