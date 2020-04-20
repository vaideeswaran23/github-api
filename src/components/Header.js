import React, { Component } from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import "./../styles/Header.css";

class Header extends Component {
  state = {};
  render() {
    return (
      <nav className="container">
        <div className="left-items">
          <a className="header-links" href="#">
            Search Users on Github
          </a>
        </div>
        {/* <div className="right-items">
          <a className="header-links" href="#">
            Contact
          </a>
          <a className="header-links" href="#">
            About
          </a>
        </div> */}
      </nav>
    );
  }
}

export default Header;
