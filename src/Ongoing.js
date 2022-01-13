import React, { Component } from "react";
import pic1 from "./images/hero_1.jpg";
import pic2 from "./images/hero_2.jpg";
import { animateScroll as scroll } from "react-scroll";

import { Link } from "react-router-dom";

class Ongoing extends Component {
  state = {
    data: [
      {
        id: 1,
        title: "Food and clothes for homeless",
        desc: "Many desktop publishing package and the web page editor now use lorem Ipsum the model text lorem.",
        // bar: "25%",
        // raised: "$12500",
        // goal: "$50000",
        img: pic1,
      },
      {
        id: 2,
        title: "People living in poverty",
        desc: "Many desktop publishing package and the web page editor now use lorem Ipsum the model text lorem.",
        // bar: "50%",
        // raised: "$50000",
        // goal: "$100000",
        img: pic2,
      },
    ],
  };
  #state;
  render() {
    const toggleHome = () => {
      scroll.scrollToTop();
    };

    return (
      <div style={{ border: "1px solid white" }}>
        <div>
          <h3 className="ongoing mt-3" style={{ fontWeight: "bold" }}>
            Ongoing Campaigns
          </h3>
        </div>
        {/* <h3 className="ongoing mt-3" style={{fontWeight:"bold"}}>Ongoing Campaigns</h3> */}
        <div style={{ display: "flex" }}>
          {this.state.data.map((data) => {
            return (
              <div
                className="mt-3 mx-auto"
                style={{ height: "auto", width: "370px" }}
              >
                <div className="row">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title" style={{ fontWeight: "bold" }}>
                        {data.title}
                      </h5>
                      <p className="card-img-top">
                        <img
                          src={data.img}
                          alt="image not found"
                          style={{ height: "auto", width: "270px" }}
                        />
                      </p>
                      <p className="card-text">{data.desc}</p>
                      {/* <div class="progress mb-3">
  <div class="progress-bar " role="progressbar" aria-valuenow={25}
  aria-valuemin={0} aria-valuemax={10} style={{width: `${data.bar}`, backgroundColor:"#F46A35"}}>{data.bar}</div>
  </div> */}

                      {/* <div>
    <span style={{fontWeight:"bold"}}>Goal</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <span style={{fontWeight:"bold"}}>Raised</span>
  </div>
  <div>
    <span style={{fontWeight:"bold"}}>{data.goal}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <span style={{fontWeight:"bold"}}>{data.raised}</span>
  </div> */}

                      <div></div>
                      <Link
                        onClick={toggleHome}
                        to="/offer-help"
                        className="btn"
                        style={{
                          backgroundColor: "#F46A35",
                          fontWeight: "bold",
                        }}
                      >
                        Donate
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Ongoing;
