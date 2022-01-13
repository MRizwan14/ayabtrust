import axios from "axios";
import React, { Component } from "react";

class Donors extends Component {
  state = {
    donorsData: [],
  };

  componentDidMount() {
    fetch("http://localhost:5000/donate")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        this.setState({ donorsData: data });
        console.log(this.state.donorsData);
      });
  }

  handleDelete = (id) => {
    console.log(id);
    axios.delete("http://localhost:5000/donate/" + id).then((response) => {
      console.log(response.data);
    });

    this.setState({
      donorsData: this.state.donorsData.filter((el) => el._id !== id),
    });
  };

  render() {
    return (
      <div>
        <div>
          <h2>Our Donors</h2>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Donor Name</th>
                <th scope="col">Donated Amount (Rs)</th>
              </tr>
            </thead>
            <tbody>
              {this.state.donorsData.map((details) => (
                <tr>
                  <td>{details.FirstName}</td>
                  <td>{details.donation}</td>
                  <td>
                    <button
                      type="button"
                      class="btn btn-outline-danger"
                      onClick={(e) => this.handleDelete(details._id)}
                    >
                      Delete
                    </button>

                    <button type="button" class="btn btn-outline-success ms-2">
                      Update
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Donors;
