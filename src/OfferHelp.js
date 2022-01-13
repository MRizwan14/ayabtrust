import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import "./OfferHelp.css";
import pic1 from "./images/donateimg.jpg";
import pic2 from "./images/vol.png";

class OfferHelp extends Component {
  render() {
    const toggleHome = () => {
      scroll.scrollToTop();
    };
    return (
      <div style={{ display: "" }}>
        <div>
          <div class="card">
            <h5 class="card-header"></h5>
            <div class="card-body">
              <img src={pic1} alt="" />
              <h5 class="card-title">Donate</h5>
              <p class="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <Link
                onClick={toggleHome}
                to="/donate"
                className="btn"
                style={{ backgroundColor: "#F46A35", fontWeight: "bold" }}
              >
                Donate
              </Link>
            </div>
          </div>
        </div>

        <div>
          <div class="card">
            <h5 class="card-header"></h5>
            <div class="card-body">
              <img
                src={pic2}
                alt=""
                style={{ width: "604px", height: "286px" }}
              />
              <h5 class="card-title">Volunteer</h5>
              <p class="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <Link
                onClick={toggleHome}
                to="/volunteer"
                className="btn"
                style={{ backgroundColor: "#F46A35", fontWeight: "bold" }}
              >
                Volunteer
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default OfferHelp;
