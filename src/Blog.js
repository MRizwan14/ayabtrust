import React, { Component } from "react";
import pic1 from "./images/education.jpg";
import pic2 from "./images/food.png";
import pic3 from "./images/health.jpg";
import pic4 from "./images/poverty.jpg";

class Blog extends Component {
  render() {
    return (
      <div style={{ color: "" }}>
        <div className="container">
          <div class="card mb-3 ">
            <div className="">
              <img
                style={{ width: "604px", height: "286px" }}
                src={pic4}
                class="card-img-top "
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Blogs</h5>
                <p class="card-text">
                  Sed ut perspiciatis, unde omnis iste natus error sit
                  voluptatem accusantium doloremque laudantium, totam rem
                  aperiam eaque ipsa, quae ab illo inventore veritatis et quasi
                  architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam
                  voluptatem, quia voluptas sit, aspernatur aut odit aut fugit,
                  sed quia consequuntur magni dolores eos, qui ratione
                  voluptatem sequi nesciunt, neque porro quisquam est, qui
                  dolorem ipsum, quia dolor sit amet consectetur adipisci[ng]
                  velit, sed quia non numquam [do] eius modi tempora
                  inci[di]dunt, ut labore et dolore magnam aliquam quaerat
                  voluptatem. Ut enim ad minima veniam, quis nostrum[d]
                  exercitationem ullam corporis suscipit laboriosam, nisi ut
                  aliquid ex ea commodi consequatur? [D]Quis autem vel eum iure
                  reprehenderit, qui in ea voluptate velit esse, quam nihil
                  molestiae consequatur, vel illum, qui dolorem eum fugiat, quo
                  voluptas nulla pariatur? [33] At vero eos et accusamus et
                  iusto odio dignissimos ducimus, qui blanditiis praesentium
                  voluptatum deleniti atque corrupti, quos dolores et quas
                  molestias excepturi sint, obcaecati cupiditate non provident,
                  similique sunt in culpa, qui officia deserunt mollitia animi,
                  id est laborum et dolorum fuga. Et harum quidem rerum facilis
                  est et expedita distinctio.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-4">
              <div class="card mb-3">
                <img src={pic1} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Food</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div class="card mb-3">
                <img src={pic2} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Health</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div class="card mb-3">
                <img src={pic3} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Education</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Blog;
