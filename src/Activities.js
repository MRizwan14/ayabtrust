import React, { Component } from "react"; 
import Ongoing from "./Ongoing";
import Upcoming from "./Upcoming";


class Activities extends Component {
  render() {
    return (
     <div>
       <div className='ongoing'>
            <Ongoing/>
       </div>
       <div className='upcoming'>
            <Upcoming/>
       </div>
     </div>
    );
  }
}

export default Activities;