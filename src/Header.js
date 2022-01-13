import React, { Component } from "react";
import logo from "./images/AyabLogo.png";
import { Link } from "react-router-dom";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <div style={{ backgroundColor: "#2c5990", border: "0.5px solid white" }}>
        <nav className="navbar navbar-expand-lg" style={{ width: "auto" }}>
          <div className="container-fluid">
            <div>
              <Link className="navbar-brand" to="/">
                <img src={logo} style={{ width: "50px" }} />
              </Link>
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarNav"
              style={{ "margin-left": "600px" }}
            >
              <ul className="navbar-nav menu-items">
                <li className="nav-item">
                  <Link
                    className="nav-link fw-bold"
                    aria-current="page"
                    to="/"
                    style={{ color: "white" }}
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link fw-bold"
                    to="/activities"
                    style={{ color: "white" }}
                  >
                    Activities
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link fw-bold"
                    to="/get-help"
                    style={{ color: "white" }}
                  >
                    Get Help
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link fw-bold"
                    to="/offer-help"
                    style={{ color: "white" }}
                  >
                    Offer Help
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link fw-bold"
                    to="/blog"
                    style={{ color: "white" }}
                  >
                    Blog
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link fw-bold"
                    to="/donors"
                    style={{ color: "white" }}
                  >
                    Donors
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link fw-bold"
                    to="/volunteers"
                    style={{ color: "white" }}
                  >
                    Volunteers
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link fw-bold"
                    to="/contact-us"
                    style={{ color: "white" }}
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
