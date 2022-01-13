import React, { Component } from "react";
import { FaDollarSign } from "react-icons/fa";
import { FaHandHoldingHeart } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import "./AboutUs.css";
class AboutUs extends Component {
  render() {
    return (
      <div>
        <div className="fp">
          <div className="container">
            <hr></hr>
          </div>
          <h2>How you can help</h2>
        </div>
        <div class="support">
          <div class="f1">
            <div className="support-icons"></div>
            <br></br>
            Campaign <FaGlobe />
          </div>
          <div class="f2">
            <div className="support-icons "></div>
            <br></br>
            Donate <FaDollarSign />
          </div>
          <div class="f3">
            <div className="support-icons"></div>
            <br></br>
            Volunteer <FaHandHoldingHeart />
          </div>
        </div>
        <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
</div>
      </div>
    );
  }
}

export default AboutUs;
