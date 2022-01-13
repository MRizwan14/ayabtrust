import React, { Component } from "react";

import pic1 from "./images/hero_1.jpg";
import pic2 from "./images/hero_2.jpg";

import { Link } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";

class Upcoming extends Component {
  state = {
    data: [
      {
        id: 1,
        title: "Campaign",
        desc: "Many desktop publishing package and the web page editor now use lorem Ipsum the model text lorem.",
        img: pic1,
      },
      {
        id: 2,
        title: "Campaign",
        desc: "Many desktop publishing package and the web page editor now use lorem Ipsum the model text lorem.",
        img: pic2,
      },
    ],
  };

  render() {
    const toggleHome = () => {
      scroll.scrollToTop();
    };
    return (
      <div style={{ border: "1px solid white" }}>
        <h3 className="ongoing mt-3" style={{ fontWeight: "bold" }}>
          Upcoming Campaigns
        </h3>
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

                      <div></div>
                      <Link
                        onClick={toggleHome}
                        to="/blog"
                        className="btn"
                        style={{
                          backgroundColor: "#F46A35",
                          fontWeight: "bold",
                        }}
                      >
                        Read
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      //      <div style={{border:"1px solid white"}}>
      //        <div>
      //          <h3 className="ongoing mt-3" style={{color:"white"}}>Upcoming Campaigns</h3>
      //        </div>
      //       <div className="mt-3 mx-auto" >
      //       <div className="row">
      //   <div className="col-sm-6" style={{height:"auto", width:"450px"}}>
      //     <div className="card">
      //       <div className="card-body">
      //         <h5 className="card-title">Support the helpless children of Africa</h5>
      //         <p className=""><img src={pic1} alt="image not found" style={{height:"auto", width:"300px"}}/></p>
      //         <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
      //         <Link to="/blog" className="btn" style={{backgroundColor:"#F46A35", fontWeight:"bold"}}>Read</Link>
      //       </div>
      //     </div>
      //   </div>
      //   <div className="col-sm-6" style={{height:"auto", width:"450px"}}>
      //     <div className="card">
      //       <div className="card-body">
      //         <h5 className="card-title">Campaign for clean and healthy water</h5>
      //         <p className=""><img src={pic2} alt="image not found" style={{height:"250px", width:"400px"}}/></p>
      //         <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
      //         <Link to="/blog" className="btn" style={{backgroundColor:"#F46A35", fontWeight:"bold"}}>Read</Link>
      //       </div>
      //     </div>
      //   </div>
      // </div>
      //       </div>
      //      </div>
    );
  }
}

export default Upcoming;
