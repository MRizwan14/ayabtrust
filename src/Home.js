import React, { Component } from "react"; 
import Slideshow from "./Slideshow";
import AboutUs from "./AboutUs";

class Home extends Component {
  render() {
    return (
     <div>
       
       <Slideshow/>
       <AboutUs/>

     </div>
    );
  }
}

export default Home;